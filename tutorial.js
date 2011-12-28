window.Tutorial = SC.Application.create({
  rootElement: '#content',

  ready: function(){
    this._super();
    SC.run.schedule('render', function(){
      Tutorial.tutorialController.resetIframe();
    });
  }
});

/**** MODELS ****/

Tutorial.Step = SC.Object.extend({
  controller: null,

  body: null,

  codeTarget: null,
  codeLanguage: 'javascript',
  code: null,
  validator: SC.K,

  startingJavascript: null,
  startingTemplate: null,
  startingConsoleHistory: null,

  isCurrent: function(){
    return Tutorial.tutorialController.get('currentStep') === this;
  }.property('Tutorial.tutorialController.currentStep').cacheable(),

  errors: null,

  addError: function(error) {
    var errors = this.get('errors');
    if (!errors) {
      errors = [];
      this.set('errors', errors);
    }
    errors.pushObject(error);
  },

  validate: function(context) {
    // TODO: Clean this up
    var steps = Tutorial.tutorialController.get('steps'),
        stepIndex = steps.indexOf(this),
        previousStep = stepIndex > 0 ? steps.objectAt(stepIndex-1) : null,
        errors = [];

    this.set('errors', errors);

    if (previousStep) {
      previousStep.validate(context);
      errors.pushObjects(previousStep.get('errors'));
    }

    if (errors.length === 0) {
      this.validator(context);
    }

    return errors.length === 0;
  }
});

/**** CONTROLLERS ****/

Tutorial.tutorialController = SC.Object.create({
  javascript: null,
  template: null,
  consoleHistory: null,

  steps: [],
  currentIndex: -1,

  stepWidth: 540, // Including padding and margin

  containerWidth: function(){
    return this.get('stepWidth') * this.getPath('steps.length');
  }.property('stepWidth', 'steps.length').cacheable(),

  scrollPosition: function(){
    var index = this.get('currentIndex'),
        stepWidth = this.get('stepWidth');
    if (index < 0) { index = 0; }
    return index * stepWidth;
  }.property('stepWidth', 'currentIndex').cacheable(),

  currentStep: function(){
    var steps = this.get('steps'),
        currentIndex = this.get('currentIndex');
    if (currentIndex > -1) { return steps.objectAt(currentIndex); }
  }.property('steps.[]', 'currentIndex').cacheable(),

  addStep: function(step) {
    if (!(step instanceof Tutorial.Step)) {
      step = Tutorial.Step.create(step);
    }

    var steps = this.get('steps'),
        currentIndex = this.get('currentIndex');

    steps.addObject(step);

    if (currentIndex < 0) { this.set('currentIndex', 0); }

    return step;
  },

  hasNextStep: function() {
    return this.get('currentIndex') < this.getPath('steps.length') - 1;
  }.property('steps.length', 'currentIndex').cacheable(),

  hasPreviousStep: function() {
    return this.get('currentIndex') > 0;
  }.property('currentIndex').cacheable(),

  gotoNextStep: function() {
    if (this.get('hasNextStep')) {
      var currentStep = this.get('currentStep'),
          self = this;

      this.evalCode({
        success: function(){
          if (currentStep.get('codeTarget') === 'console') {
            Tutorial.consoleController.runCommand();
          }

          var iframe = self.get('iframe'),
              context = iframe ? iframe.contentWindow : null;

          if (currentStep.validate(context)) {
            self.incrementProperty('currentIndex');
            var nextStep = self.get('currentStep');
            nextStep.beginPropertyChanges();
            nextStep.set('startingJavascript', self.get('javascript'));
            nextStep.set('startingTemplate', self.get('template'));
            nextStep.set('startingConsoleHistory', SC.copy(self.get('consoleHistory')));
            nextStep.set('errors', []);
            nextStep.endPropertyChanges();
          }
        },
        error: function(){
          currentStep.addError("Unable to run code.");
        }
      });
    }
  },

  gotoPreviousStep: function() {
    if (this.get('hasPreviousStep')) {
      this.decrementProperty('currentIndex');

      var previousStep = this.get('currentStep');

      this.beginPropertyChanges();
      this.set('javascript', previousStep.get('startingJavascript'));
      this.set('template', previousStep.get('startingTemplate'));
      this.set('consoleHistory', SC.copy(previousStep.get('startingConsoleHistory')));
      this.endPropertyChanges();

      this.evalCode({ reset: true });
    }
  },

  resetStep: function() {
    var currentStep = this.get('currentStep');
    if (currentStep) {
      this.beginPropertyChanges();
      this.set('javascript', currentStep.get('startingJavascript'));
      this.set('template', currentStep.get('startingTemplate'));
      this.set('consoleHistory', currentStep.get('startingConsoleHistory'));
      currentStep.set('errors', []);
      this.endPropertyChanges();

      this.evalCode({ reset: true });
    }
  },

  currentStepDidChange: function() {
    var codeTarget = this.getPath('currentStep.codeTarget');
    if (codeTarget) { Tutorial.editorTabController.set('currentTab', codeTarget); }
  }.observes('currentStep'),

  copyStepCode: function() {
    var currentStep = this.get('currentStep'),
        codeTarget = currentStep.get('codeTarget'),
        code = currentStep.get('code');

    if (codeTarget && code) {
      var codeBefore = currentStep.get('codeBefore'),
          codeAfter  = currentStep.get('codeAfter');

      if (codeBefore) { code = codeBefore+code; }
      if (codeAfter)  { code = code+codeAfter; }

      var replacesCode = currentStep.get('replacesCode'),
          afterCode = currentStep.get('afterCode'),
          current = this.get(codeTarget) || '';

      if (replacesCode) {
        if (current.indexOf(replacesCode) > -1) {
          code = current.replace(replacesCode, code);
        } else {
          alert("Unable to do this step for you. Sorry!");
          return false;
        }
      } else if (afterCode) {
        var matchIdx = current.indexOf(afterCode)
        if (matchIdx > -1) {
          var beforeLen = matchIdx+afterCode.length;
          code = current.slice(0, beforeLen)+"\n"+code+"\n"+current.slice(beforeLen);
        } else {
          alert("Unable to do this step for you. Sorry!");
          return false;
        }
      } else {
        if (current){ current += "\n\n"; }
        code = current+code;
      }
      this.set(codeTarget, code);
    }
    return true;
  },

  copyStepCodeAndAdvance: function() {
    // Runloop is necessary for the console commands to get run properly
    var copied = SC.run(this, this.copyStepCode);
    if (copied) { this.gotoNextStep(); }
  },

  // For development use only
  _fastForwardSteps: function(amount) {
    if (amount < 1) { return; }
    var self = this;
    SC.run.later(function(){
      self.copyStepCodeAndAdvance();
      self._fastForwardSteps(amount-1);
    }, 1000);
  },

  iframeContainer: '#tutorial-output',

  iframe: null,

  resetIframe: function() {
    var current = this.get('iframe');
    if (current){ SC.$(current).remove(); }

    var container = SC.$(this.get('iframeContainer')),
        iframe = SC.$('<iframe></iframe>').appendTo(container)[0];

    iframe.contentWindow.document.write(
      '<html>'+
        '<head>'+
          '<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>'+
          '<script src="/scripts/sproutcore.js"></script>'+
          '<link href="/tutorial/todos.css" rel="stylesheet">'+
        '</head>'+
        '<body></body>'+
      '</html>'
    );

    this.set('iframe', iframe);
    return iframe;
  },

  evalCode: function(options) {
    options = options || {};

    var iframe = this.get('iframe'),
        iframeNeedsReset = options.reset;
    if (!iframe) { iframeNeedsReset = true; }

    // Prep Javascript
    var startingJavascript = this.getPath('currentStep.startingJavascript'),
        javascript = this.get('javascript'),
        javascriptForEval;

    if (!startingJavascript || iframeNeedsReset) {
      javascriptForEval = javascript;
    } else if (javascript.substr(0,startingJavascript.length) === startingJavascript) {
      javascriptForEval = javascript.substr(startingJavascript.length);
    } else {
      // All the code seems to have changed, redo it all
      javascriptForEval = javascript;
      iframeNeedsReset = true;
    }

    // Reset if needed
    if (iframeNeedsReset) { iframe = this.resetIframe(); }

    var context = iframe.contentWindow,
        timeout = 0,
        self = this;

    var run = function() {
      // Upon resetting the iFrame, SC isn't always immediately accessible
      if (!context.SC) {
        if (timeout >= 1000) {
          if (options.error) { options.error("Timed out."); }
          return;
        }
        setTimeout(run, 100);
        timeout += 100;
        return;
      }

      // Run Javascript
      if (javascriptForEval) {
        try {
          context.eval(javascriptForEval);
        } catch (e) {
          if (options.error) {
            options.error(e);
          }
          return;
        }
      }

      if (context.Todos) {
        // Hack since this doesn't get called correctly
        if (!context.Todos.isReady) {
          context.Todos.ready();
          context.Todos.isReady = true;
        }

        // Run Template
        var template = self.get('template');
        if (context.Todos.rootView) {
          context.SC.run(function() {
            context.Todos.rootView.set('template', template ? context.SC.Handlebars.compile(template) : null);
            context.Todos.rootView.rerender();
          });
        } else if (template) {
          context.SC.run(function() {
            context.Todos.rootView = context.SC.View.create({
              template: context.SC.Handlebars.compile(template)
            });
            context.Todos.rootView.appendTo(context.document.body);
          });
        }
      }

      // Playback previous console if needed
      var consoleHistory = self.get('consoleHistory');
      if (consoleHistory && iframeNeedsReset) {
        consoleHistory.forEach(function(item) {
          var success = item.results && item.results.some(function(r){ return r.type === 'success'; });
          if (success) {
            try {
              context.eval(item.command);
            } catch(error) {
              console.warn("Unable to play back command:", item.command, error);
            }
          }
        });
      }

      if (options.success) { options.success(); }
    };
    run();
  }

});

Tutorial.editorTabController = SC.TabController.create({
  currentTab: 'javascript'
});

Tutorial.consoleController = SC.SandboxedConsoleController.create({
  valueBinding: "Tutorial.tutorialController.console",
  historyBinding: "Tutorial.tutorialController.consoleHistory",

  iframeDidChange: function() {
    this._iframe = Tutorial.tutorialController.get('iframe');
  }.observes('Tutorial.tutorialController.iframe'),

  resetSandbox: function() {
    Tutorial.tutorialController.resetIframe();
  }
});

/**** VIEWS ****/

Tutorial.InstructionsView = SC.View.extend({
  classNames: ['instructions'],

  scrollLeft: 0,

  scrollLeftDidChange: function(){
    this.$().scrollLeft(this.get('scrollLeft'));
  }.observes('scrollLeft')
});

Tutorial.StepsContainerView = SC.View.extend({
  classNames: ['steps-container'],
  attributeBindings: ['style'],

  width: 0,

  style: function(){
    return "width: %@px".fmt(this.get('width'));
  }.property('width').cacheable()
});

Tutorial.StepView = SC.View.extend({
  classNames: ['step'],
  classNameBindings: ['step.isCurrent:active'],

  step: null
});

// The main purpose of this is styling
Tutorial.TabView = SC.Button.extend({
  classNameBindings: ['current'],

  tagName: 'li',
  template: SC.Handlebars.compile("<a href='#' onclick='return false;'>{{title}}</a>"),
  type: null,

  targetObject: function() {
    return SC.stringToObject(this, this.get('controller'));
  }.property('controller').cacheable(),

  action: 'changeTabTo',

  current: function() {
    return this.get('tabName') === this.getPath('targetObject.currentTab');
  }.property('tabName', 'targetObject.currentTab').cacheable()
});

Tutorial.PrettyPrintView = SC.View.extend({
  tagName: 'pre',

  classNames: ['prettyprint'],
  classNameBindings: ['languageClass'],

  language: null,

  languageClass: function() {
    var language = this.get('language');
    switch(language) {
      case 'javascript':
        return 'lang-js';
      case 'template':
        return 'lang-html'
      default:
        return 'lang-'+language;
    }
  }.property('language').cacheable(),

  didInsertElement: function() {
    prettyPrint();
  }
});

Tutorial.AceEditorView = SC.AceEditorView.extend({
  // Also observe parent visibility
  _fixSize: function() {
    if (this.get('isVisible') && this.getPath('parentView.isVisible')) {
      var editor = this.get('editor');
      if (editor) { setTimeout(function(){ editor.resize(); }, 1); }
    }
  }.observes('isVisible', 'parentView.isVisible')
});

/**** MOAR ****/

/*
Tutorial.loadSteps = function() {
  Tutorial.tutorialController.addStep({
    body: "<strong>Welcome.</strong> To get a feel for Ember, follow along this quick tutorial."
  });

  Tutorial.tutorialController.addStep({
    body: "<strong>Create your app</strong>",
    codeTarget: 'javascript',
    code: "MyApp = SC.Application.create();",
    validator: function(context) {
      if (!(context.MyApp instanceof context.SC.Application)) {
        this.addError("Couldn't find valid MyApp instance");
      }
    }
  });

  Tutorial.tutorialController.addStep({
    body: "<strong>Create a model</strong>",
    codeTarget: 'javascript',
    code: "// model\n"+
          "MyApp.Person = SC.Object.extend({\n"+
          "  firstName: null,\n"+
          "  lastName: null\n"+
          "});",
    validator: function(context) {
      if (!context.MyApp.Person || context.MyApp.Person.superclass !== context.SC.Object) {
        this.addError("Couldn't find valid MyApp.Person class");
      }
    }
  });

  Tutorial.tutorialController.addStep({
    body: "<strong>Create an array</strong>",
    codeTarget: 'javascript',
    code: "// controller\n"+
          "MyApp.people = [];",
    validator: function(context) {
      if (!context.MyApp.people || context.MyApp.people.constructor !== context.Array) {
        this.addError("Couldn't find Array named MyApp.people");
      }
    }
  });

  Tutorial.tutorialController.addStep({
    body: "<strong>Create a view and append it</strong>",
    codeTarget: 'template',
    codeLanguage: 'html',
    code: "<!-- view -->\n"+
          "People:\n"+
          "<ul>\n"+
          "{{#each MyApp.people}}\n"+
          "  <li>{{firstName}} {{lastName}}</li>\n"+
          "{{/each}}\n"+
          "</ul>",
    validator: function(context) {
      var rootView = context.MyApp && context.MyApp.rootView,
          eachView = rootView && context.MyApp.rootView.get('_childViews').find(function(v) {
            return ((v instanceof context.SC.CollectionView) &&
                    (v.getPath('contentBinding._from') === 'MyApp.people'));
          });

      if (!eachView) {
        this.addError("No {{#each MyApp.people}} helper found");
      }
    }
  });

  Tutorial.tutorialController.addStep({
    body: "<strong>Add yourself to the array</strong>",
    codeTarget: 'console',
    code: "me = MyApp.Person.create({\n"+
          "  firstName: \"Yehuda\",\n"+
          "  lastName: \"Katz\"\n"+
          "});\n"+
          "MyApp.people.pushObject(me);",
    validator: function(context) {
      if (!(context.me instanceof context.MyApp.Person)) {
        this.addError("Expected 'me' to be an instance of MyApp.Person");
      } else if (!context.MyApp.people.contains(context.me)) {
        this.addError("MyApp.people should contain 'me'");
      }
    }
  });

  Tutorial.tutorialController.addStep({
    body: "<strong>Add someone else to the array</strong>",
    codeTarget: 'console',
    code: "friend = MyApp.Person.create({\n"+
          "  firstName: \"Tom\",\n"+
          "  lastName: \"Dale\",\n"+
          "});\n"+
          "MyApp.people.pushObject(friend);",
    validator: function(context) {
      if (!(context.friend instanceof context.MyApp.Person)) {
        this.addError("Expected 'friend' to be an instance of MyApp.Person");
      } else if (!context.MyApp.people.contains(context.friend)) {
        this.addError("MyApp.people should contain 'friend'");
      }
    }
  });

  Tutorial.tutorialController.addStep({
    body: "<strong>Modify yourself</strong>",
    codeTarget: 'console',
    code: "me.set('firstName', 'Peter');\n"+
          "me.set('lastName', 'Wagenet');"
  });

  Tutorial.tutorialController.addStep({
    body: "<strong>Congratulations!</strong> You've just created your first Ember application!"
  });
};
*/
Tutorial.tutorialController.addStep({
  body: "<h3>Core Concepts</h3>\n<p><strong>Here are the two key features that make Ember so powerful:</strong></p>\n<p><strong>Bindings:</strong> Bindings create a bidirectional link between two properties. If the property of one object changes, the property on the other object updates automatically.</p>\n<p><strong>Computed Properties</strong>: Computed properties allow you to treat a function as a property. This allows you to synthesize a new property from multiple input properties, and have it update automatically any time one of those input properties changes.</p>\n<p>This tutorial will show you how to use these two concepts to build a todo app with astonishingly little code.</p>"
});Tutorial.tutorialController.addStep({
  body: "<h3>Create the Namespace</h3>\n<p>The following code creates a namespace for your application (called Todos), which is also an instance of SC.Application.</p>\n<p>It is important that every Ember app creates an instance of SC.Application, because it is responsible for routing browser events to your views.</p>",
  codeTarget: "javascript",
  code: "Todos = SC.Application.create();",
  validator: function(context){
if (!(context.Todos instanceof context.SC.Application)) {
  this.addError("Couldn't find valid MyApp instance");
}
}
});Tutorial.tutorialController.addStep({
  body: "<h3>Defining Your Model</h3>\n<p>In this tutorial, we want to create a list for managing todos. Users should be able to create a new todo with a specific task, then check it off once it’s done.</p>\n<p>Let’s define our model as a new subclass of SC.Object, inserting the code after the <code>Todos</code> object is created. The following code will define a class with two properties: <code>title</code>, a String; and <code>isDone</code>, a Boolean.</p>",
  codeTarget: "javascript",
  code: "Todos.Todo = SC.Object.extend({\n  title: null,\n  isDone: false\n});",
  validator: function(context){
if (!context.Todos.Todo || context.Todos.Todo.superclass !== context.SC.Object) {
  this.addError("Couldn't find valid Todo class");
}
}
});Tutorial.tutorialController.addStep({
  body: "<h3>Managing the Model Using a Controller</h3>\n<p>Now that we know what our data looks like, let’s create a controller to manage it. Since we want to maintain an ordered list of todos, we’ll use an instance of <code>SC.ArrayProxy</code>.</p>\n<p>In MVC frameworks like Ember, the controller layer bridges the model layer, which is only concerned with a pure-data representation of objects, and the view layer, which is only concerned with representing those objects.</p>",
  codeTarget: "javascript",
  code: "Todos.todosController = SC.ArrayProxy.create({\n  // Initialize the array controller with an empty array.\n  content: []\n});",
  validator: function(context){
if (!(context.Todos.todosController instanceof context.SC.ArrayProxy)) {
  this.addError("Couldn't find valid todosController");
}
}
});Tutorial.tutorialController.addStep({
  body: "<h3>Managing the Model Using a Controller (cont)</h3>\n<p>Now we have an array controller with no content. Let’s add a method to create a new todo. The following code replaces the code we added in our last step.</p>\n<p>NOTE: SC.ArrayProxy acts as a proxy onto its content Array. Ember will propagate any modifications made to the ArrayProxy to the content Array.</p>",
  codeTarget: "javascript",
  code: "Todos.todosController = SC.ArrayProxy.create({\n  // Initialize the array controller with an empty array.\n  content: [],\n  // Creates a new todo with the passed title, then adds it\n  // to the array.\n  createTodo: function(title) {\n    var todo = Todos.Todo.create({ title: title });\n    this.pushObject(todo);\n  }\n});\n",
  replacesCode: "Todos.todosController = SC.ArrayProxy.create({\n  // Initialize the array controller with an empty array.\n  content: []\n});",
  validator: function(context){
if (!(context.Todos.todosController.createTodo instanceof context.Function)) {
  this.addError("Couldn't find createTodo method");
}
}
});Tutorial.tutorialController.addStep({
  body: "<h3>Creating New Todos with a Text Field</h3>\n<p>We’ve got our model and controller set up, so let’s move on to the fun part: creating the interface for our users. The first step is to create a text field into which the user types the name of their todo. Ember uses Handlebars templates to quickly define the application’s interface. While Handlebars makes it easy to markup HTML quickly, you’ll see that it also has been extended to automatically take advantage of Ember’s bindings.</p>\n<p>Here we’ll define a text field with a unique id attribute (so it can be styled via CSS), as well as a placeholder attribute that will be displayed in modern HTML5 browsers. For the ease of the tutorial, we'll set up this template in a view for you.</p>",
  codeTarget: "template",
  code: "{{view SC.TextField id=\"new-todo\" placeholder=\"What needs to be done?\"}}",
  validator: function(context){
// TODO: Make this more specific
if (context.$('input#new-todo').length !== 1) {
  this.addError("Couldn't find text field");
}
}
});Tutorial.tutorialController.addStep({
  body: "<h3>Creating New Todos with a Text Field (cont)</h3>\n<p>Now that we’ve got model, view, and controller represented, we'll start seeing some output.</p>\n<p>In Ember, view objects are responsible for updating the DOM and handling events. Among other things, this allows us to buffer changes to the DOM for maximum performance and to support generic cross-platform event handling. Whenever you want to display dynamic content or handle events, you will use a view object.</p>"
});Tutorial.tutorialController.addStep({
  body: "<h3>Creating New Todos with a Text Field (cont)</h3>\n<p>Now it’s time to tell Ember how to handle events for your &lt;input&gt; tag. When the user types in the field and presses the return key, we will create a new Todo and have it inserted into the content of the array controller.</p>\n<p>Since CreateTodoView will handle events for a text field, we create a subclass of SC.TextField, which provides several conveniences for working with these input controls. For example, you can access the value property and respond to higher level events, such as insertNewline, when the user presses enter.</p>",
  codeTarget: "javascript",
  code: "Todos.CreateTodoView = SC.TextField.extend({\n  insertNewline: function() {\n    var value = this.get('value');\n    if (value) {\n      Todos.todosController.createTodo(value);\n      this.set('value', '');\n    }\n  }\n});\n",
  validator: function(context){
if (!context.Todos.CreateTodoView || context.Todos.CreateTodoView.superclass !== context.SC.TextField) {
  this.addError("Couldn't find CreateTodoView");
}
// TODO: Check for insertNewline as well
}
});Tutorial.tutorialController.addStep({
  body: "<h3>Creating New Todos with a Text Field (cont)</h3>\n<p>Now that we have defined our view, let’s update the template to use our new view subclass. All we need to do is swap <code>Todos.CreateTodoView</code> for <code>SC.TextField</code>.</p>",
  codeTarget: "template",
  code: "{{view Todos.CreateTodoView id=\"new-todo\" placeholder=\"What needs to be done?\"}}",
  replacesCode: "{{view SC.TextField id=\"new-todo\" placeholder=\"What needs to be done?\"}}",
  validator: function(context){
// TODO: Write this
}
});Tutorial.tutorialController.addStep({
  body: "<h3>Display Your Todos</h3>\n<p>Now that we have UI to create new todos, let’s create the code to display them. We’ll use the Handlebars <code>#each</code> helper to display a list of items. <code>#each</code> renders every item in its underlying Array using the enclosed HTML.<p>",
  codeTarget: "template",
  code: "<ul>\n  {{#each Todos.todosController}}\n    <li>{{title}}</li>\n  {{/each}}\n</ul>",
  validator: function(context){
// TODO: Write this
}
});Tutorial.tutorialController.addStep({
  body: "<h3>Display Your Todos (cont)</h3>\n<p>Now is a good time to test out this code. Type a todo into the text field and hit return.</p>\n<p>Look at that! As soon as we create a new todo and insert it into the array controller, the view updates automatically.</p>\n<p>You’ve now seen a little bit of the power of Ember. By using Ember’s bindings to describe the relationship between your data and your views, you were able to change the data layer and let Ember do the hard work of updating the view layer for you.</p>\n<p>This is actually a core concept in Ember, not just something that demos well. Ember’s binding system is designed with the view system in mind, which makes it easy to work directly with your data and not need to worry about manually keeping your view layer in sync. You will see this concept over and over again in the rest of this tutorial and in other guides.</p>"
});Tutorial.tutorialController.addStep({
  body: "<h3>Getting Things Done</h3>\n<p>We now have the ability to add todos, but no way to mark them as done. Before the frustration of a never-ending todo list gets the better of us, let’s add the ability to mark todos complete.</p>\nThe first thing we need to do is add a checkbox to each todo list item. As was mentioned earlier, if we want to handle events, such as user input, we need a view. In this case, we are adding a checkbox and want to be notified whenever the value of the checkbox is changed by the user. Let’s update the Handlebars template to look like the following:<p>",
  codeTarget: "template",
  code: "<li>{{view SC.Checkbox titleBinding=\"title\" valueBinding=\"isDone\"}}</li>",
  replacesCode: "<li>{{title}}</li>",
  validator: function(context){
// TODO: Write this
}
});Tutorial.tutorialController.addStep({
  body: "<h3>Getting Things Done (cont)</h3>\n<p>So far so good, but lets add some styling for a todo that's marked as done.</p>\n<p>For this we can use the <code>bindAttr</code> helper which will automatically update an elements attributes based on the value of a binding. Here, we bind the class attribute. If <code>isDone</code> is true then the class will be added. Ember automatically dasherizes class names for us.</p>",
  codeTarget: "template",
  code: "<li {{bindAttr class=\"isDone\"}}>\n  {{view SC.Checkbox titleBinding=\"title\" valueBinding=\"isDone\"}}\n</li>",
  replacesCode: "<li>{{view SC.Checkbox titleBinding=\"title\" valueBinding=\"isDone\"}}</li>"
});Tutorial.tutorialController.addStep({
  body: "<h3>The More You Know</h3>\n<p>We can now create todos and mark them as being complete. While 76% of all statistics are made up, let’s see if we can display more accurate information from the data we have. At the top of our list, let’s display the number of todos we have.</p>",
  codeTarget: "template",
  code: "<div id=\"stats\">\n  {{Todos.todosController.length}} items\n</div>",
  afterCode: "{{view Todos.CreateTodoView id=\"new-todo\" placeholder=\"What needs to be done?\"}}"
});Tutorial.tutorialController.addStep({
  body: "<h3>The More You Know (cont)</h3>\n<p>Ok, that works, but it would be more useful to know how many items we have left, not just how many we have total. Let's add a property called 'remaining' to our controller to tell us how many undone items there are.</p>\n<p>Here, we specify our dependent key using @each. This allows us to depend on properties of the array’s items. In this case, we want to update the remaining property any time isDone changes on a Todo. We'll also be notified when an item is added to or removed from the array.</p>\n<p>It’s important to declare dependent keys because Ember uses this information to know when to update bindings. In our case, our StatsView updates any time todosController’s remaining property changes.</p>\n<p>We'll add the following to our todosController after the <code>content: []</code> line.</p>",
  codeTarget: "javascript",
  code: "remaining: function() {\n  return this.filterProperty('isDone', false).get('length');\n}.property('@each.isDone'),",
  afterCode: "content: [],"
});Tutorial.tutorialController.addStep({
  body: "<h3>The More You Know (cont)</h3>\n<p>Now lets change set up our view to use this new property.</p>\n<p>While we're at it, lets also fix pluralization. Right now, if you only have one item, it will say \"1 items\", not so polished. To handle this, we'll create a new view that handles pluralization.</p>",
  codeTarget: "javascript",
  code: "Todos.StatsView = SC.View.extend({\n  remainingBinding: 'Todos.todosController.remaining',\n  remainingString: function() {\n    var remaining = this.get('remaining');\n    return remaining + (remaining === 1 ? \" item\" : \" items\");\n  }.property('remaining')\n});\n"
});Tutorial.tutorialController.addStep({
  body: "<h3>The More You Know (cont)</h3>\n<p>Finally, we'll add our new view to the template.</p>",
  codeTarget: "template",
  code: "{{#view Todos.StatsView id=\"stats\"}}\n  {{remainingString}} remaining\n{{/view}}",
  replacesCode: "<div id=\"stats\">\n  {{Todos.todosController.length}} items\n</div>"
});Tutorial.tutorialController.addStep({
  body: "<h3>Clearing Completed Todos</h3>\n<p>As we populate our list with todos, we may want to periodically clear out those we’ve completed. As you have learned, we will want to make that change to the <code>todosController</code> and let Ember automatically propagate those changes to the DOM.</p>\n<p>Let’s add a new <code>clearCompletedTodos</code> method to the controller.</p>",
  codeTarget: "javascript",
  code: "clearCompletedTodos: function() {\n  this.filterProperty('isDone', true).forEach(this.removeObject, this);\n}",
  codeBefore: ",",
  afterCode: "createTodo: function(title) {\n  var todo = Todos.Todo.create({ title: title });\n  this.pushObject(todo);\n}"
});Tutorial.tutorialController.addStep({
  body: "<h3>Clearing Completed Todos (cont)</h3>\n<p>Next, let's add a button to our template inside the <code>StatsView</code>:</p>",
  codeTarget: "template",
  code: "{{#view Todos.StatsView id=\"stats\"}}\n  {{#view SC.Button classBinding=\"isActive\"\n    target=\"Todos.todosController\"\n    action=\"clearCompletedTodos\"}}\n    Clear Completed Todos\n  {{/view}}\n  {{remainingString}} remaining.\n{{/view}}",
  replacesCode: "{{#view Todos.StatsView id=\"stats\"}}\n  {{remainingString}} remaining\n{{/view}}"
});Tutorial.tutorialController.addStep({
  body: "<h3>Clearing Completed Todos (cont)</h3>\n<p>We've defined an instance of <code>SC.Button</code> that calls a method on an object when it is clicked. In this case we've told the button to call the <code>clearCompletedTodos</code> method (its action) on the <code>Todos.todosController</code> object (its target).</p>\n<p>We've also told it to add an <code>is-active</code> class to the view when it is clicked or tapped. Every <code>SC.Button</code> has an <code>isActive</code> property that will be <code>true</code> when it is in the process of being clicked. This allows us to display a visual cue to the user that they have hit the right target.</p>\n<p>Try it out: add some todos, then mark them done and clear them. Because we previously bound the visual list to the <code>todosController</code>, making a change through the action has the expected effect.</p>"
});Tutorial.tutorialController.addStep({
  body: "<h3>Marking All as Done</h3>\n<p>Let's say you've decided to actually get all of your work done. Wouldn't it be nice to have a way to easily mark every todo as complete?</p>\n<p>It turns out that, due to our application's declarative nature, all the hard work is already done. We just need a way to mark every <code>`Todo`</code> complete.</p>"
});Tutorial.tutorialController.addStep({
  body: "<h3>Marking All as Done (cont)</h3>\n<p>Let's first create a new computed property on our controller that describes whether or not every todo is done. It might look something like this:</p>",
  codeTarget: "javascript",
  code: "allAreDone: function() {\n  return this.get('length') && this.everyProperty('isDone', true);\n}.property('@each.isDone')",
  codeBefore: ",",
  afterCode: "createTodo: function(title) {\n  var todo = Todos.Todo.create({ title: title });\n  this.pushObject(todo);\n}"
});Tutorial.tutorialController.addStep({
  body: "<h3>Marking All as Done (cont)</h3>\n<p>Ember has many enumerable helpers. <code>everyProperty('isDone', true)</code> returns <code>true</code> if every item in the array has an <code>isDone</code> property that evaluates to <code>true</code>. You can find out more in the <a href=\"/gudes/enumerables.html\">Enumerables guide</a>.</p>"
});Tutorial.tutorialController.addStep({
  body: "<h3>Marking All as Done (cont)</h3>\n<p>Next, we'll create a checkbox view to mark all items complete and bind its value to the controller's property:</p>",
  codeTarget: "template",
  code: "{{view SC.Checkbox class=\"mark-all-done\"\n  title=\"Mark All as Done\"\n  valueBinding=\"Todos.todosController.allAreDone\"}}",
  codeBefore: "",
  afterCode: "  {{remainingString}} remaining.\n{{/view}}"
});Tutorial.tutorialController.addStep({
  body: "<h3>Marking All as Done (cont)</h3>\n<p>If you use the app now, you'll notice that clicking all of the checkboxes of your todos will cause the \"Mark All as Done\" checkbox to become checked. However, it doesn't work in the other direction: clicking \"Mark All as Done\" has no effect.</p>\n<p>So far, our computed properties have described how to calculate a value from dependent properties. In this case, however, we want to accept a new value and update dependent properties to reflect it. Let's update our <code>allAreDone</code> computed property to also accept a value.</p>",
  codeTarget: "javascript",
  code: "allAreDone: function(key, value) {\n  if (value !== undefined) {\n    this.setEach('isDone', value);\n    return value;\n  } else {\n    return this.get('length') && this.everyProperty('isDone', true);\n  }\n}.property('@each.isDone')\n",
  replacesCode: "allAreDone: function() {\n  return this.get('length') && this.everyProperty('isDone', true);\n}.property('@each.isDone')"
});Tutorial.tutorialController.addStep({
  body: "<h3>Marking All as Done (cont)</h3>\n<p>When you set a computed property, your computed property function is called with the property key as the first parameter and the new value as the second. To determine if Ember is asking for the value or trying to set it, we examine the <code>value</code> parameter. If it is defined, we iterate through the <code>Todo</code>s and set each one's <code>isDone</code> property to the new value.</p>\n<p>Because bindings are bi-directional, Ember will set <code>allAreDone</code> to <code>true</code> when the user clicks the \"Mark All as Done\" checkbox. Conversely, unchecking it will make Ember set <code>allAreDone</code> to <code>false</code>, unchecking all todos.</p>\n<p>Add some todos and click \"Mark All as Done\". Wow! Each of the individual check boxes gets checked off. If you uncheck one of them, the \"Mark All as Done\" checkbox un-checks itself.</p>\n<p>When you use Ember, as you scale your UI, you never need to wonder whether a new feature will work consistently with parts of the UI you already implemented. Since you build your view layer to simply reflect the state of your models, you can make changes however you want and see them update automatically.</p>"
});
$(function loadExamples() {
  var allFiles = {"binding":[{"name":"templates/application.hbs","contents":"\u003cdiv\u003e\n \u003clabel\u003eName:\u003c/label\u003e\n {{input type=\"text\" value=name placeholder=\"Enter your name\"}}\n\u003c/div\u003e\n\u003cdiv class=\"text\"\u003e\n\u003ch3\u003eMy name is {{name}} and I want to learn Ember!\u003c/h3\u003e\n\u003c/div\u003e"}],"components":[{"name":"components/gravatar-image.js","contents":"App.GravatarImageComponent = Ember.Component.extend({\n  size: 200,\n  email: '',\n\n  gravatarUrl: function() {\n    var email = this.get('email'),\n        size = this.get('size');\n\n    return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=' + size;\n  }.property('email', 'size')\n});\n"},{"name":"templates/application.hbs","contents":"\u003cul class=\"example-gravatar\"\u003e\n  \u003cli\u003e{{gravatar-image email=\"tomster@emberjs.com\" size=\"200\"}}\u003c/li\u003e\n  \u003cli\u003e{{gravatar-image size=\"200\"}}\u003c/li\u003e\n\u003c/ul\u003e\n"},{"name":"templates/components/gravatar-image.hbs","contents":"\u003cimg {{bind-attr src=gravatarUrl}}\u003e\n\u003cdiv class=\"email-input\"\u003e\n  {{input type=\"email\" value=email placeholder=\"Enter your Gravatar e-mail\"}}\n\u003c/div\u003e\n"}],"loading":[{"name":"app.js","contents":"App.ApplicationRoute = Ember.Route.extend({\n  model: function() {\n    return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls').then(function(data) {\n      return data.splice(0, 3);\n    });\n  }\n});"},{"name":"templates/application.hbs","contents":"\u003ch3\u003eLast 3 Pull Requests to Ember.js\u003c/h3\u003e\n\u003cul\u003e\n{{#each pr in model}}\n  \u003cli\u003e\n    \u003cdiv class=\"issue-number\"\u003e#{{pr.number}}\u003c/div\u003e\n    \u003cdiv class=\"issue-title\"\u003e\n      \u003ca {{bind-attr href=pr.html_url}}\u003e{{pr.title}}\u003c/a\u003e\n    \u003c/div\u003e\n    \u003cdiv class=\"author-name\"\u003e\n      Opened by \u003ca {{bind-attr href=pr.head.user.html_url}}\u003e\u003cstrong\u003e@{{pr.head.user.login}}\u003c/strong\u003e\u003c/a\u003e\n    \u003c/div\u003e\n  \u003c/li\u003e\n{{/each}}\n\u003c/ul\u003e\n"}],"routing":[{"name":"app.js","contents":"// Model\n\nApp.Mailbox = Em.Object.extend();\n\nApp.Mailbox.reopenClass({\n  find: function(id) {\n    if (id) {\n      return App.FIXTURES.findBy('id', id);\n    } else {\n      return App.FIXTURES;\n    }\n  }\n});\n\n// Routes\n\nApp.Router.map(function() {\n  this.resource('mailbox', { path: '/:mailbox_id' }, function() {\n    this.resource('mail', { path: '/:message_id' });\n  });\n});\n\nApp.ApplicationRoute = Em.Route.extend({\n  model: function() {\n    return App.Mailbox.find();\n  }\n});\n\nApp.MailRoute = Em.Route.extend({\n  model: function(params) {\n    return this.modelFor('mailbox').messages.findBy('id', params.message_id);\n  }\n});\n\n// Handlebars helper\n\nEmber.Handlebars.registerBoundHelper('date', function(date) {\n  return moment(date).format('MMM Do');\n});\n"},{"name":"fixtures.js","contents":"App.FIXTURES = [\n  {\n    name: \"Inbox\",\n    id: \"inbox\",\n    messages: [\n      {\n        id: 1,\n        subject: \"Welcome to Ember\",\n        from: \"tomster@emberjs.com\",\n        to: \"user@example.com\",\n        date: new Date(),\n        body: \"Welcome to Ember. We hope you enjoy your stay\"\n      }, {\n        id: 2,\n        subject: \"Great Ember Resources\",\n        from: \"tomster@emberjs.com\",\n        to: \"user@example.com\",\n        date: new Date(),\n        body: \"Have you seen embercasts.com? How about emberaddons.com?\"\n      }\n    ]\n  }, {\n    name: \"Spam\",\n    id: \"spam\",\n    messages: [\n      {\n        id: 3,\n        subject: \"You have one the lottery!!!111ONEONE\",\n        from: \"419@thereallotteryhonest.com\",\n        to: \"user@example.com\",\n        date: new Date(),\n        body: \"You have ONE the lottery! You only have to send us a small amount of monies to claim your prize\"\n      }\n    ]\n  }, {\n    name: \"Sent Mail\",\n    id: \"sent-mail\",\n    messages: [\n      {\n        id: 4,\n        subject: \"Should I use Ember\",\n        from: \"user@example.com\",\n        to: \"tomster@emberjs.com\",\n        date: new Date(),\n        body: \"Ember looks pretty good, should I use it?\"\n      }\n    ]\n  }\n];\n\n"},{"name":"templates/application.hbs","contents":"\u003cdiv class=\"url\"\u003eURL: {{target.url}}\u003c/div\u003e\n\u003caside\u003e\n    \u003cul\u003e\n        \u003cli\u003e\u003ch2\u003eMailboxes\u003c/h2\u003e\u003c/li\u003e\n        {{#each mailbox in model}}\n            \u003cli\u003e\n                {{#link-to \"mailbox\" mailbox current-when=\"mailbox\"}}\n                    \u003cspan class=\"count\"\u003e\n                        {{mailbox.messages.length}}\n                    \u003c/span\u003e\n                    {{mailbox.name}}\n                {{/link-to}}\n            \u003c/li\u003e\n        {{/each}}\n    \u003c/ul\u003e\n\u003c/aside\u003e\n\n\u003csection class=\"main\"\u003e\n    {{outlet}}\n\u003c/section\u003e\n"},{"name":"templates/index.hbs","contents":"\u003cdiv class=\"index\"\u003e\n  \u003ch1\u003eTomsterMail\u003c/h1\u003e\n  \u003cspan class=\"tomster\"\u003e\u003c/span\u003e\n\u003c/div\u003e\n"},{"name":"templates/mail.hbs","contents":"\u003cdiv class=\"mail\"\u003e\n  \u003cdl\u003e\n      \u003cdt\u003eFrom\u003c/dt\u003e\n      \u003cdd\u003e{{from}}\u003c/dd\u003e\n      \u003cdt\u003eTo\u003c/dt\u003e\n      \u003cdd\u003e{{to}}\u003c/dd\u003e\n      \u003cdt\u003eDate\u003c/dt\u003e\n      \u003cdd\u003e{{date date}}\u003c/dd\u003e\n  \u003c/dl\u003e\n  \u003ch4\u003e{{subject}}\u003c/h4\u003e\n  \u003cp\u003e{{body}}\u003c/p\u003e\n\u003c/div\u003e\n"},{"name":"templates/mailbox/index.hbs","contents":"\u003cdiv class=\"mailbox-index\"\u003e\n  Select an email\n\u003c/div\u003e\n"},{"name":"templates/mailbox.hbs","contents":"\u003ctable\u003e\n    \u003ctr\u003e\n        \u003cth\u003eDate\u003c/th\u003e\n        \u003cth\u003eSubject\u003c/th\u003e\n        \u003cth\u003eFrom\u003c/th\u003e\n        \u003cth\u003eTo\u003c/th\u003e\n    \u003c/tr\u003e\n\n    {{#each message in messages}}\n        {{#link-to \"mail\" message tagName=\"tr\"}}\n            \u003ctd\u003e{{date message.date}}\u003c/td\u003e\n            \u003ctd\u003e{{view.isActive}}{{message.subject}}\u003c/td\u003e\n            \u003ctd\u003e{{message.from}}\u003c/td\u003e\n            \u003ctd\u003e{{message.to}}\u003c/td\u003e\n        {{/link-to}}\n    {{/each}}\n\u003c/table\u003e\n\n{{outlet}}\n"}]};
  // Find all of the examples on the page
  var $examples = $('.example-app');

  // For each example, create a new Ember.Application
  $examples.each(function() {
    var $viewer = $('<div class="example-viewer"></div>');
    var $output = $('<div class="example-output"></div>');

    $(this).append($viewer)
           .append($output);

    // Extract configuration options for the example
    // from attributes on the element
    var name = this.getAttribute('data-name');
    var fileNames = this.getAttribute('data-files').split(' ');

    var files = allFiles[name];
    // Sort by `data-files`
    files = fileNames.map(function(name) {
      for (var i = 0, length = files.length; i < length; i++) {
        if (files[i].name == name) {
          return files[i];
        }
      }
    });

    generateViewerApp($viewer, files);
    generateOutputApp($output, files);
  });
});

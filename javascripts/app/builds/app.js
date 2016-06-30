Ember.TEMPLATES["_ember_cli_usage"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 8
              },
              "end": {
                "line": 10,
                "column": 8
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          or ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1,"class","debug");
            dom.setAttribute(el1,"target","_blank");
            var el2 = dom.createTextNode("run the tests");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element2, 'href');
            return morphs;
          },
          statements: [
            ["attribute","href",["get","project.lastReleaseTestUrl",["loc",[null,[9,37],[9,63]]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 13,
              "column": 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("\n        Read the ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"class","debug");
          var el3 = dom.createTextNode("changelog");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        for ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(".\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var element4 = dom.childAt(element3, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element4, 'href');
          morphs[1] = dom.createMorphAt(element3,2,2);
          morphs[2] = dom.createMorphAt(element3,4,4);
          morphs[3] = dom.createMorphAt(element3,6,6);
          return morphs;
        },
        statements: [
          ["attribute","href",["get","project.lastReleaseChangelogUrl",["loc",[null,[7,41],[7,72]]]]],
          ["block","if",[["get","project.lastReleaseTestUrl",["loc",[null,[8,15],[8,41]]]]],[],0,null,["loc",[null,[8,8],[10,16]]]],
          ["content","project.projectName",["loc",[null,[11,12],[11,35]]]],
          ["content","project.lastRelease",["loc",[null,[11,36],[11,59]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 4
              },
              "end": {
                "line": 17,
                "column": 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2,"class","debug");
            dom.setAttribute(el2,"target","_blank");
            var el3 = dom.createTextNode("Run the tests");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" for ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" in your browser.\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element1, 'href');
            morphs[1] = dom.createMorphAt(element0,3,3);
            morphs[2] = dom.createMorphAt(element0,5,5);
            return morphs;
          },
          statements: [
            ["attribute","href",["get","project.lastReleaseTestUrl",["loc",[null,[15,32],[15,58]]]]],
            ["content","project.projectName",["loc",[null,[15,99],[15,122]]]],
            ["content","product.lastRelease",["loc",[null,[15,123],[15,146]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 4
              },
              "end": {
                "line": 19,
                "column": 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 4
            },
            "end": {
              "line": 19,
              "column": 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","project.lastReleaseTestUrl",["loc",[null,[13,14],[13,40]]]]],[],0,1,["loc",[null,[13,4],[19,4]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes"
          ]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        dom.setAttribute(el1,"class","project-name");
        var el2 = dom.createTextNode("Using ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" builds with Ember-CLI");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("pre");
        var el3 = dom.createElement("code");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [1]);
        var element6 = dom.childAt(fragment, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element5,1,1);
        morphs[1] = dom.createMorphAt(element5,3,3);
        morphs[2] = dom.createUnsafeMorphAt(dom.childAt(element6, [1, 0]),0,0);
        morphs[3] = dom.createMorphAt(element6,3,3);
        return morphs;
      },
      statements: [
        ["content","project.projectName",["loc",[null,[2,33],[2,56]]]],
        ["content","channel",["loc",[null,[2,57],[2,68]]]],
        ["inline","printf",[["get","project.installWithEmberCLI",["loc",[null,[4,25],[4,52]]]],["get","project.lastRelease",["loc",[null,[4,53],[4,72]]]]],[],["loc",[null,[4,15],[4,75]]]],
        ["block","if",[["get","project.lastReleaseChangelogUrl",["loc",[null,[5,10],[5,41]]]]],[],0,1,["loc",[null,[5,4],[19,11]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type"
        ]
      },
      "revision": "Ember@2.4.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 22,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","project.installWithEmberCLI",["loc",[null,[1,6],[1,33]]]]],[],0,null,["loc",[null,[1,0],[21,7]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));
Ember.TEMPLATES["_files_table"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 8,
              "column": 2
            }
          }
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createElement("a");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var element4 = dom.childAt(element3, [1, 0]);
          var element5 = dom.childAt(element3, [5]);
          var morphs = new Array(5);
          morphs[0] = dom.createAttrMorph(element4, 'href');
          morphs[1] = dom.createMorphAt(element4,0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element3, [3]),0,0);
          morphs[3] = dom.createMorphAt(element5,0,0);
          morphs[4] = dom.createMorphAt(element5,2,2);
          return morphs;
        },
        statements: [
          ["attribute","href",["get","url",["loc",[null,[4,20],[4,23]]]]],
          ["inline","tag-url-path",[["get","url",["loc",[null,[4,41],[4,44]]]]],[],["loc",[null,[4,26],[4,46]]]],
          ["inline","format-date-time",[["get","project.date",["loc",[null,[5,29],[5,41]]]]],[],["loc",[null,[5,10],[5,43]]]],
          ["inline","copy-clipboard",[],["label","Link","text",["subexpr","@mut",[["get","url",["loc",[null,[6,45],[6,48]]]]],[],[]]],["loc",[null,[6,10],[6,50]]]],
          ["inline","copy-clipboard",[],["label","Script Tag","text",["subexpr","script-tag",[["get","url",["loc",[null,[6,104],[6,107]]]]],[],["loc",[null,[6,92],[6,108]]]]],["loc",[null,[6,51],[6,110]]]]
        ],
        locals: ["url"],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","each",[["subexpr","params",[["get","project.lastReleaseProdUrl",["loc",[null,[2,18],[2,44]]]],["get","project.lastReleaseMinUrl",["loc",[null,[2,45],[2,70]]]],["get","project.lastReleaseDebugUrl",["loc",[null,[2,71],[2,98]]]]],[],["loc",[null,[2,10],[2,99]]]]],[],0,null,["loc",[null,[2,2],[8,11]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 10,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("tr");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createElement("a");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1, 0]);
        var element2 = dom.childAt(element0, [5]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element1, 'href');
        morphs[1] = dom.createMorphAt(element1,0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        morphs[3] = dom.createMorphAt(element2,0,0);
        morphs[4] = dom.createMorphAt(element2,2,2);
        return morphs;
      },
      statements: [
        ["attribute","href",["get","file.url",["loc",[null,[12,18],[12,26]]]]],
        ["content","file.name",["loc",[null,[12,29],[12,42]]]],
        ["inline","format-date-time",[["get","file.lastModified",["loc",[null,[13,27],[13,44]]]]],[],["loc",[null,[13,8],[13,46]]]],
        ["inline","copy-clipboard",[],["label","Link","text",["subexpr","@mut",[["get","file.url",["loc",[null,[14,43],[14,51]]]]],[],[]]],["loc",[null,[14,8],[14,53]]]],
        ["inline","copy-clipboard",[],["label","Script Tag","text",["subexpr","@mut",[["get","file.scriptTag",["loc",[null,[14,95],[14,109]]]]],[],[]]],["loc",[null,[14,54],[14,111]]]]
      ],
      locals: ["file"],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
          "multiple-nodes"
        ]
      },
      "revision": "Ember@2.4.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 17,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","includeReleasesInFileList",["loc",[null,[1,6],[1,31]]]]],[],0,null,["loc",[null,[1,0],[9,7]]]],
      ["block","each",[["get","project.files",["loc",[null,[10,8],[10,21]]]]],[],1,null,["loc",[null,[10,0],[16,9]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));
Ember.TEMPLATES["_project_listing"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 12
                },
                "end": {
                  "line": 21,
                  "column": 12
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","beta-current-version");
              var el2 = dom.createTextNode("(current beta)");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() { return []; },
            statements: [

            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 26,
                  "column": 12
                },
                "end": {
                  "line": 28,
                  "column": 12
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","beta-current-version");
              var el2 = dom.createTextNode("(current beta)");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() { return []; },
            statements: [

            ],
            locals: [],
            templates: []
          };
        }());
        var child2 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 29,
                  "column": 12
                },
                "end": {
                  "line": 31,
                  "column": 12
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","beta-current-version");
              var el2 = dom.createTextNode("(coming ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(")");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
              return morphs;
            },
            statements: [
              ["inline","format-date-time",[["get","project.nextDate",["loc",[null,[30,75],[30,91]]]],"MMM Do"],[],["loc",[null,[30,56],[30,102]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child3 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 36,
                  "column": 12
                },
                "end": {
                  "line": 38,
                  "column": 12
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","beta-current-version");
              var el2 = dom.createTextNode("(current beta)");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() { return []; },
            statements: [

            ],
            locals: [],
            templates: []
          };
        }());
        var child4 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 39,
                  "column": 12
                },
                "end": {
                  "line": 41,
                  "column": 12
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","beta-current-version");
              var el2 = dom.createTextNode("(coming ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(")");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
              return morphs;
            },
            statements: [
              ["inline","format-date-time",[["get","project.nextDate",["loc",[null,[40,75],[40,91]]]],"MMM Do"],[],["loc",[null,[40,56],[40,102]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child5 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 46,
                  "column": 12
                },
                "end": {
                  "line": 48,
                  "column": 12
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","beta-current-version");
              var el2 = dom.createTextNode("(current beta)");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() { return []; },
            statements: [

            ],
            locals: [],
            templates: []
          };
        }());
        var child6 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 49,
                  "column": 12
                },
                "end": {
                  "line": 51,
                  "column": 12
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","beta-current-version");
              var el2 = dom.createTextNode("(coming ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(")");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
              return morphs;
            },
            statements: [
              ["inline","format-date-time",[["get","project.nextDate",["loc",[null,[50,75],[50,91]]]],"MMM Do"],[],["loc",[null,[50,56],[50,102]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child7 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 56,
                  "column": 12
                },
                "end": {
                  "line": 58,
                  "column": 12
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","beta-current-version");
              var el2 = dom.createTextNode("(current beta)");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() { return []; },
            statements: [

            ],
            locals: [],
            templates: []
          };
        }());
        var child8 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 59,
                  "column": 12
                },
                "end": {
                  "line": 61,
                  "column": 12
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","beta-current-version");
              var el2 = dom.createTextNode("(coming ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(")");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
              return morphs;
            },
            statements: [
              ["inline","format-date-time",[["get","project.nextDate",["loc",[null,[60,75],[60,91]]]],"MMM Do"],[],["loc",[null,[60,56],[60,102]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 71,
                "column": 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","release-progress clear");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","left");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","small-release-image");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","release-version");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","release-date");
            var el4 = dom.createTextNode("Released ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","float-left-container");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","release-cycle-title");
            var el4 = dom.createTextNode("The path to ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("...");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","tiny-beta-image");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","beta-version");
            var el5 = dom.createTextNode("beta 1");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","tiny-beta-image");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","beta-version");
            var el5 = dom.createTextNode("beta 2");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","tiny-beta-image");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","beta-version");
            var el5 = dom.createTextNode("beta 3");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","tiny-beta-image");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","beta-version");
            var el5 = dom.createTextNode("beta 4");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","tiny-beta-image");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","beta-version");
            var el5 = dom.createTextNode("beta 5");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","right future-image");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","small-release-image");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","release-version");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","release-date");
            var el4 = dom.createTextNode("Coming ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","clear");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1]);
            var element2 = dom.childAt(element1, [1]);
            var element3 = dom.childAt(element0, [3]);
            var element4 = dom.childAt(element3, [3]);
            var element5 = dom.childAt(element3, [5]);
            var element6 = dom.childAt(element3, [7]);
            var element7 = dom.childAt(element3, [9]);
            var element8 = dom.childAt(element3, [11]);
            var element9 = dom.childAt(element0, [5]);
            var element10 = dom.childAt(element9, [1]);
            var morphs = new Array(21);
            morphs[0] = dom.createAttrMorph(element2, 'title');
            morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
            morphs[2] = dom.createMorphAt(dom.childAt(element1, [5]),1,1);
            morphs[3] = dom.createMorphAt(dom.childAt(element3, [1]),1,1);
            morphs[4] = dom.createAttrMorph(element4, 'class');
            morphs[5] = dom.createMorphAt(element4,5,5);
            morphs[6] = dom.createAttrMorph(element5, 'class');
            morphs[7] = dom.createMorphAt(element5,5,5);
            morphs[8] = dom.createMorphAt(element5,6,6);
            morphs[9] = dom.createAttrMorph(element6, 'class');
            morphs[10] = dom.createMorphAt(element6,5,5);
            morphs[11] = dom.createMorphAt(element6,6,6);
            morphs[12] = dom.createAttrMorph(element7, 'class');
            morphs[13] = dom.createMorphAt(element7,5,5);
            morphs[14] = dom.createMorphAt(element7,6,6);
            morphs[15] = dom.createAttrMorph(element8, 'class');
            morphs[16] = dom.createMorphAt(element8,5,5);
            morphs[17] = dom.createMorphAt(element8,6,6);
            morphs[18] = dom.createAttrMorph(element10, 'title');
            morphs[19] = dom.createMorphAt(dom.childAt(element9, [3]),0,0);
            morphs[20] = dom.createMorphAt(dom.childAt(element9, [5]),1,1);
            return morphs;
          },
          statements: [
            ["attribute","title",["get","project.lastStableVersion",["loc",[null,[10,51],[10,76]]]]],
            ["content","project.lastStableVersion",["loc",[null,[11,39],[11,68]]]],
            ["inline","format-date-time",[["get","project.lastStableDate",["loc",[null,[12,64],[12,86]]]],"MMM Do"],[],["loc",[null,[12,45],[12,97]]]],
            ["content","project.finalVersion",["loc",[null,[15,55],[15,79]]]],
            ["attribute","class",["concat",["left ",["subexpr","if",[["get","project.beta1Completed",["loc",[null,[16,32],[16,54]]]],"","future-image"],[],["loc",[null,[16,27],[16,74]]]]]]],
            ["block","if",[["get","project.isBeta1",["loc",[null,[19,18],[19,33]]]]],[],0,null,["loc",[null,[19,12],[21,19]]]],
            ["attribute","class",["concat",["left ",["subexpr","if",[["get","project.beta2Completed",["loc",[null,[23,32],[23,54]]]],"","future-image"],[],["loc",[null,[23,27],[23,74]]]]]]],
            ["block","if",[["get","project.isBeta2",["loc",[null,[26,18],[26,33]]]]],[],1,null,["loc",[null,[26,12],[28,19]]]],
            ["block","if",[["get","project.isBeta1",["loc",[null,[29,18],[29,33]]]]],[],2,null,["loc",[null,[29,12],[31,19]]]],
            ["attribute","class",["concat",["left ",["subexpr","if",[["get","project.beta3Completed",["loc",[null,[33,32],[33,54]]]],"","future-image"],[],["loc",[null,[33,27],[33,74]]]]]]],
            ["block","if",[["get","project.isBeta3",["loc",[null,[36,18],[36,33]]]]],[],3,null,["loc",[null,[36,12],[38,19]]]],
            ["block","if",[["get","project.isBeta2",["loc",[null,[39,18],[39,33]]]]],[],4,null,["loc",[null,[39,12],[41,19]]]],
            ["attribute","class",["concat",["left ",["subexpr","if",[["get","project.beta4Completed",["loc",[null,[43,32],[43,54]]]],"","future-image"],[],["loc",[null,[43,27],[43,74]]]]]]],
            ["block","if",[["get","project.isBeta4",["loc",[null,[46,18],[46,33]]]]],[],5,null,["loc",[null,[46,12],[48,19]]]],
            ["block","if",[["get","project.isBeta3",["loc",[null,[49,18],[49,33]]]]],[],6,null,["loc",[null,[49,12],[51,19]]]],
            ["attribute","class",["concat",["left ",["subexpr","if",[["get","project.beta5Completed",["loc",[null,[53,32],[53,54]]]],"","future-image"],[],["loc",[null,[53,27],[53,74]]]]]]],
            ["block","if",[["get","project.isBeta5",["loc",[null,[56,18],[56,33]]]]],[],7,null,["loc",[null,[56,12],[58,19]]]],
            ["block","if",[["get","project.isBeta4",["loc",[null,[59,18],[59,33]]]]],[],8,null,["loc",[null,[59,12],[61,19]]]],
            ["attribute","title",["get","project.finalVersion",["loc",[null,[65,51],[65,71]]]]],
            ["content","project.finalVersion",["loc",[null,[66,39],[66,63]]]],
            ["inline","format-date-time",[["get","project.cycleEstimatedFinishDate",["loc",[null,[67,62],[67,94]]]],"MMM Do"],[],["loc",[null,[67,43],[67,105]]]]
          ],
          locals: [],
          templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 75,
              "column": 2
            }
          }
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","ember-cli-usage");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","if",[["get","project.isEmberBeta",["loc",[null,[7,10],[7,29]]]]],[],0,null,["loc",[null,[7,4],[71,11]]]],
          ["inline","partial",["emberCliUsage"],[],["loc",[null,[73,6],[73,33]]]]
        ],
        locals: ["project"],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 87,
              "column": 8
            },
            "end": {
              "line": 89,
              "column": 8
            }
          }
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","partial",["filesTable"],[],["loc",[null,[88,10],[88,34]]]]
        ],
        locals: ["project"],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 5,
            "column": 0
          },
          "end": {
            "line": 93,
            "column": 0
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","files-table");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2,"class","project-name");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" Channel Downloads");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2,"class","table");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("thead");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("File");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Modified");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Quick Copy");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tbody");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element11 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(element11, [1]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element11, [3, 3]),1,1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","each",[["get","projects",["loc",[null,[6,10],[6,18]]]]],[],0,null,["loc",[null,[6,2],[75,11]]]],
        ["content","channel",["loc",[null,[77,29],[77,40]]]],
        ["block","each",[["get","projects",["loc",[null,[87,16],[87,24]]]]],[],1,null,["loc",[null,[87,8],[89,17]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 95,
              "column": 2
            },
            "end": {
              "line": 100,
              "column": 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1,"class","loading-spinner");
          var el2 = dom.createTextNode("\n      Loading...");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"src","/images/ajax-loader.gif");
          dom.setAttribute(el2,"width","31");
          dom.setAttribute(el2,"height","31");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 100,
              "column": 2
            },
            "end": {
              "line": 102,
              "column": 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("There are currently no builds for ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(". Please check back soon.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["content","model.title",["loc",[null,[101,41],[101,56]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 93,
            "column": 0
          },
          "end": {
            "line": 103,
            "column": 0
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","model.isLoading",["loc",[null,[95,8],[95,23]]]]],[],0,1,["loc",[null,[95,2],[102,9]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes",
          "wrong-type"
        ]
      },
      "revision": "Ember@2.4.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 104,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"class","project-name");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" Channel");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
      morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["content","channel",["loc",[null,[1,25],[1,36]]]],
      ["content","channelDescription",["loc",[null,[3,3],[3,25]]]],
      ["block","if",[["get","model.filesPresent",["loc",[null,[5,6],[5,24]]]]],[],0,1,["loc",[null,[5,0],[103,7]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));
Ember.TEMPLATES["application"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 3,
            "column": 56
          },
          "end": {
            "line": 3,
            "column": 80
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Home");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 7,
            "column": 66
          },
          "end": {
            "line": 7,
            "column": 95
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Release");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 8,
            "column": 63
          },
          "end": {
            "line": 8,
            "column": 86
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Beta");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child3 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 9,
            "column": 65
          },
          "end": {
            "line": 9,
            "column": 92
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Canary");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child4 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 12,
            "column": 57
          },
          "end": {
            "line": 12,
            "column": 92
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Prev. Releases");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes"
        ]
      },
      "revision": "Ember@2.4.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 19,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","sidebar");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("ol");
      dom.setAttribute(el2,"id","toc-list");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      var el5 = dom.createTextNode("Channels");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("ol");
      dom.setAttribute(el4,"style","display:block");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","subcontent");
      dom.setAttribute(el1,"class","has-sidebar");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0, 1]);
      var element1 = dom.childAt(element0, [1]);
      var element2 = dom.childAt(element0, [3]);
      var element3 = dom.childAt(element2, [3]);
      var element4 = dom.childAt(element3, [1]);
      var element5 = dom.childAt(element3, [3]);
      var element6 = dom.childAt(element3, [5]);
      var element7 = dom.childAt(element0, [5]);
      var morphs = new Array(12);
      morphs[0] = dom.createAttrMorph(element1, 'class');
      morphs[1] = dom.createMorphAt(element1,0,0);
      morphs[2] = dom.createAttrMorph(element2, 'class');
      morphs[3] = dom.createAttrMorph(element4, 'class');
      morphs[4] = dom.createMorphAt(element4,0,0);
      morphs[5] = dom.createAttrMorph(element5, 'class');
      morphs[6] = dom.createMorphAt(element5,0,0);
      morphs[7] = dom.createAttrMorph(element6, 'class');
      morphs[8] = dom.createMorphAt(element6,0,0);
      morphs[9] = dom.createAttrMorph(element7, 'class');
      morphs[10] = dom.createMorphAt(element7,0,0);
      morphs[11] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
      return morphs;
    },
    statements: [
      ["attribute","class",["concat",["level-1 ",["subexpr","if",[["get","isIndexActive",["loc",[null,[3,28],[3,41]]]],"selected"],[],["loc",[null,[3,23],[3,54]]]]]]],
      ["block","link-to",["index"],[],0,null,["loc",[null,[3,56],[3,92]]]],
      ["attribute","class",["concat",["level-1 ",["subexpr","if",[["get","isChannelsActive",["loc",[null,[4,28],[4,44]]]],"selected"],[],["loc",[null,[4,23],[4,57]]]]]]],
      ["attribute","class",["concat",["level-3 ",["subexpr","if",[["get","isReleaseActive",["loc",[null,[7,32],[7,47]]]],"sub-selected"],[],["loc",[null,[7,27],[7,64]]]]]]],
      ["block","link-to",["release"],[],1,null,["loc",[null,[7,66],[7,107]]]],
      ["attribute","class",["concat",["level-3 ",["subexpr","if",[["get","isBetaActive",["loc",[null,[8,32],[8,44]]]],"sub-selected"],[],["loc",[null,[8,27],[8,61]]]]]]],
      ["block","link-to",["beta"],[],2,null,["loc",[null,[8,63],[8,98]]]],
      ["attribute","class",["concat",["level-3 ",["subexpr","if",[["get","isCanaryActive",["loc",[null,[9,32],[9,46]]]],"sub-selected"],[],["loc",[null,[9,27],[9,63]]]]]]],
      ["block","link-to",["canary"],[],3,null,["loc",[null,[9,65],[9,104]]]],
      ["attribute","class",["concat",["level-1 ",["subexpr","if",[["get","isTaggedActive",["loc",[null,[12,28],[12,42]]]],"selected"],[],["loc",[null,[12,23],[12,55]]]]]]],
      ["block","link-to",["tagged"],[],4,null,["loc",[null,[12,57],[12,104]]]],
      ["content","outlet",["loc",[null,[17,2],[17,12]]]]
    ],
    locals: [],
    templates: [child0, child1, child2, child3, child4]
  };
}()));
Ember.TEMPLATES["build-list"] = Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type"
        ]
      },
      "revision": "Ember@2.4.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","partial",["projectListing"],[],["loc",[null,[1,0],[1,28]]]]
    ],
    locals: [],
    templates: []
  };
}()));
Ember.TEMPLATES["components/copy-clipboard"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element1, 'data-clipboard-text');
        morphs[1] = dom.createAttrMorph(element1, 'data-label');
        morphs[2] = dom.createMorphAt(element1,0,0);
        return morphs;
      },
      statements: [
        ["attribute","data-clipboard-text",["get","text",["loc",[null,[2,32],[2,36]]]]],
        ["attribute","data-label",["get","label",["loc",[null,[2,52],[2,57]]]]],
        ["content","label",["loc",[null,[2,60],[2,69]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 3,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("input");
        dom.setAttribute(el1,"type","text");
        dom.setAttribute(el1,"class","name-input");
        dom.setAttribute(el1,"readonly","readonly");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(1);
        morphs[0] = dom.createAttrMorph(element0, 'value');
        return morphs;
      },
      statements: [
        ["attribute","value",["get","text",["loc",[null,[4,68],[4,72]]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type"
        ]
      },
      "revision": "Ember@2.4.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 6,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","hasFlash",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[5,7]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));
Ember.TEMPLATES["index"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 27,
            "column": 4
          },
          "end": {
            "line": 29,
            "column": 4
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","canary");
        dom.setAttribute(el1,"title","Canary Builds");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 32,
            "column": 8
          },
          "end": {
            "line": 32,
            "column": 35
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Canary");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 41,
            "column": 4
          },
          "end": {
            "line": 43,
            "column": 4
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","beta");
        dom.setAttribute(el1,"title","Beta Builds");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child3 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 46,
            "column": 8
          },
          "end": {
            "line": 46,
            "column": 31
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Beta");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child4 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 58,
            "column": 4
          },
          "end": {
            "line": 60,
            "column": 4
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","release");
        dom.setAttribute(el1,"title","Release Builds");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child5 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 63,
            "column": 8
          },
          "end": {
            "line": 63,
            "column": 37
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Release");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes"
        ]
      },
      "revision": "Ember@2.4.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 99,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","old-version-warning");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("i");
      dom.setAttribute(el2,"class","icon-attention-circled");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("strong");
      var el3 = dom.createTextNode("Getting Started?");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" Ember-CLI is the\n  modern, supported way to run an Ember application.\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"class","btn");
      var el3 = dom.createTextNode("Getting Started Guide");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("\nEmber releases follow a \"train\" release model. Every\nsix weeks, the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("master");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" branch of Ember (sometimes referred to as\n\"canary\") branches to become the new beta. After six weeks as a beta, this\nversion becomes the new stable release of Ember.\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("\nThe Ember project adheres to\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"href","http://semver.org/");
      var el3 = dom.createTextNode("semantic versioning");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(". Releases are named\naccording to a ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("MAJOR.MINOR.PATCH");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" scheme, and only\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("MAJOR");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" versions releases may change or remove public APIs after\ndeprecation. ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("MINOR");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" versions may introduce new features so long\nas they are backwards compatible, and ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("PATCH");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" releases may include\nbug or security fixes.\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","channels section");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","channel canary");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","description");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h3");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("Canary builds are the bleeding edge of Ember development. Please do\n      not use these builds unless you want to try out and offer\n      feedback on new features and fixes not available in the Release or\n      Beta builds.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","channel beta");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","description");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h3");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("em");
      var el6 = dom.createTextNode("The latest beta release is ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(", made\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("Beta builds incorporate new features that are ready for evaluation in\n      application code. We do not recommend using Beta builds in production.\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","channel release");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","description");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h3");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("em");
      var el6 = dom.createTextNode("The latest stable release is ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(", made\n        on ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("Release builds have been hardened through our multi-tiered release\n      process. These builds are perfect for use in production environments.\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","channel lts");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("a");
      dom.setAttribute(el3,"class","tomster");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","lts");
      dom.setAttribute(el4,"title","LTS Builds");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","description last");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h3");
      var el5 = dom.createTextNode("Long-Term Support (LTS)");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("em");
      var el6 = dom.createTextNode("The latest LTS release is ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(", made on\n              ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("The LTS channel provides a longer support timeframe but receives\n      new features less frequently. These builds are right for users who\n      prefer to upgrade roughly twice a year.\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("\nPeriodically, various APIs in Ember may be deprecated. As new releases\nof Ember and Ember Data land, be sure to review the\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"href","/deprecations");
      var el3 = dom.createTextNode("deprecation guides");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" and\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"href","http://guides.emberjs.com");
      var el3 = dom.createTextNode("documentation guides");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(". These are updated\nregularly.\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0, 5]);
      var element1 = dom.childAt(fragment, [6]);
      var element2 = dom.childAt(element1, [1]);
      var element3 = dom.childAt(element1, [3]);
      var element4 = dom.childAt(element3, [3]);
      var element5 = dom.childAt(element4, [3, 1]);
      var element6 = dom.childAt(element1, [5]);
      var element7 = dom.childAt(element6, [3]);
      var element8 = dom.childAt(element7, [3, 1]);
      var element9 = dom.childAt(element1, [7, 3, 3, 1]);
      var morphs = new Array(13);
      morphs[0] = dom.createAttrMorph(element0, 'href');
      morphs[1] = dom.createMorphAt(element2,1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element2, [3, 1]),1,1);
      morphs[3] = dom.createMorphAt(element3,1,1);
      morphs[4] = dom.createMorphAt(dom.childAt(element4, [1]),1,1);
      morphs[5] = dom.createMorphAt(element5,1,1);
      morphs[6] = dom.createMorphAt(element5,3,3);
      morphs[7] = dom.createMorphAt(element6,1,1);
      morphs[8] = dom.createMorphAt(dom.childAt(element7, [1]),1,1);
      morphs[9] = dom.createMorphAt(element8,1,1);
      morphs[10] = dom.createMorphAt(element8,3,3);
      morphs[11] = dom.createMorphAt(element9,1,1);
      morphs[12] = dom.createMorphAt(element9,3,3);
      return morphs;
    },
    statements: [
      ["attribute","href",["subexpr","concat",["https://guides.emberjs.com/v",["get","latestVersionOfDocs",["loc",[null,[5,62],[5,81]]]],"/getting-started/quick-start/"],[],["loc",[null,[5,22],[5,115]]]]],
      ["block","link-to",["canary"],["class","tomster"],0,null,["loc",[null,[27,4],[29,16]]]],
      ["block","link-to",["canary"],[],1,null,["loc",[null,[32,8],[32,47]]]],
      ["block","link-to",["beta"],["class","tomster"],2,null,["loc",[null,[41,4],[43,16]]]],
      ["block","link-to",["beta"],[],3,null,["loc",[null,[46,8],[46,43]]]],
      ["content","model.beta.lastRelease",["loc",[null,[49,37],[49,63]]]],
      ["inline","format-date-time",[["get","model.beta.date",["loc",[null,[50,27],[50,42]]]]],[],["loc",[null,[50,8],[50,44]]]],
      ["block","link-to",["release"],["class","tomster"],4,null,["loc",[null,[58,4],[60,16]]]],
      ["block","link-to",["release"],[],5,null,["loc",[null,[63,8],[63,49]]]],
      ["content","model.release.lastRelease",["loc",[null,[66,39],[66,68]]]],
      ["inline","format-date-time",[["get","model.release.date",["loc",[null,[67,30],[67,48]]]],"MMMM Do, YYYY"],[],["loc",[null,[67,11],[67,66]]]],
      ["content","model.lts.lastRelease",["loc",[null,[81,40],[81,65]]]],
      ["inline","format-date-time",[["get","model.lts.date",["loc",[null,[82,33],[82,47]]]],"MMMM Do, YYYY"],[],["loc",[null,[82,14],[82,65]]]]
    ],
    locals: [],
    templates: [child0, child1, child2, child3, child4, child5]
  };
}()));
Ember.TEMPLATES["tagged"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 8
            },
            "end": {
              "line": 19,
              "column": 8
            }
          }
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","partial",["filesTable"],[],["loc",[null,[18,10],[18,34]]]]
        ],
        locals: ["project"],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 6,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","files-table");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2,"class","table");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("thead");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("File");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Modified");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Quick Copy");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tbody");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1, 3]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","projects",["loc",[null,[17,16],[17,24]]]]],[],0,null,["loc",[null,[17,8],[19,17]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 25,
              "column": 2
            },
            "end": {
              "line": 30,
              "column": 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1,"class","loading-spinner");
          var el2 = dom.createTextNode("\n      Loading...");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"src","/images/ajax-loader.gif");
          dom.setAttribute(el2,"width","31");
          dom.setAttribute(el2,"height","31");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 2
            },
            "end": {
              "line": 32,
              "column": 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("There are currently no builds for ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(". Please check back soon.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["content","model.title",["loc",[null,[31,41],[31,56]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 23,
            "column": 0
          },
          "end": {
            "line": 33,
            "column": 0
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","model.isLoading",["loc",[null,[25,8],[25,23]]]]],[],0,1,["loc",[null,[25,2],[32,9]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes",
          "wrong-type"
        ]
      },
      "revision": "Ember@2.4.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 34,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"class","project-name");
      var el2 = dom.createTextNode("Previous Releases");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("This list contains downloadable assets for all tagged versions of Ember and\nEmber-Data.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","model.filesPresent",["loc",[null,[6,6],[6,24]]]]],[],0,1,["loc",[null,[6,0],[33,7]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));

var App = Ember.Application.create({
  rootElement: '#builds-application'
});

App.Router.map(function() {
  this.route('release');
  this.route('beta');
  this.route('canary');
  this.route('tagged');
});

App.Router.reopen({
  notifyGoogleAnalytics: Ember.on('didTransition', function() {
    var url = this.get('url');

    // Add a slash if neccesary
    if (!/^\//.test(url)){ url = '/' + url; }

    _gaq.push(['_trackPageview', '/builds' + url]);
  })
});

App.CopyClipboardComponent = Ember.Component.extend({
  tagName: 'span',
  hasFlash: ZeroClipboard.detectFlashSupport(),

  didInsertElement: function () {
    var clip = new ZeroClipboard(this.$('button'), {
      // This would normally be a relative path
      moviePath: "/images/ZeroClipboard.swf",

      trustedDomains: ["*"],
      allowScriptAccess: "always"
    });

    clip.on('mousedown', function(client, e) {
      Em.run.later(this, function() {
        $(this).removeClass('loading');
        $(this).removeAttr('disabled');
      }, 1000);
      Em.run.next(this, function() {
        $(this).addClass('loading');
        $(this).attr('disabled', 'disabled');
      });
    });

    this.$('input').on('click', function() {
      $(this).select();
    });
  }
});

App.S3Bucket = Ember.Object.extend({
  files: [],
  isLoading: false,

  // Setup these as default values.
  // They can be overridden on create.
  queryUseSSL: true,
  objectUseSSL: false,
  delimiter: '/',
  bucket: 'builds.emberjs.com',
  endpoint: 's3.amazonaws.com',

  delimiterParameter: Ember.computed('delimiter', function(){
    var delimiter = this.getWithDefault('delimiter','').toString();
    return (delimiter) ? 'delimiter=' + delimiter : '';
  }),

  maxKeysParameter: Ember.computed('maxKeys', function(){
    return 'max-keys=' + this.getWithDefault('maxKeys','').toString();
  }),

  prefixParameter: Ember.computed('prefix', function(){
    return 'prefix=' + this.getWithDefault('prefix','').toString();
  }),

  queryProtocol: Ember.computed('queryUseSSL', function() {
    return this.get('queryUseSSL') ? 'https://' : 'http://';
  }),

  queryBaseUrl: Ember.computed('queryProtocol', 'endpoint', 'bucket', function(){
    return this.get('queryProtocol') + this.get('endpoint') + '/' + this.get('bucket')
  }),

  objectProtocol: Ember.computed('objectUseSSL', function() {
    return this.get('objectUseSSL') ? 'https://' : 'http://';
  }),

  objectBaseUrl: Ember.computed('objectProtocol', 'bucket', function(){
    return this.get('objectProtocol') + this.get('bucket');
  }),

  queryParams: Ember.computed('delimiterParameter', 'maxKeysParameter', 'prefixParameter', function(){
    return this.get('delimiterParameter')  + '&' +
      this.get('maxKeysParameter')    + '&' +
      this.get('prefixParameter');
  }),

  queryUrl: Ember.computed('queryBaseUrl', 'queryParams', function(){
    return this.get('queryBaseUrl') + '?' + this.get('queryParams');
  }),

  filesPresent: Ember.computed('files.[]', function(){
    return this.get('files').length;
  }),

  filterFiles: function(filter, ignoreFiles){
    var files = this.get('files');
    var ignoreFiles = Ember.A(ignoreFiles);

    return files.filter(function(e) {
      var name = e.get('name');
      var ignored = ignoreFiles.any(function(f) { return name.indexOf(f) >= 0; });
      var selected = filter.any(function(f) { return name.match(f); });

      return !ignored && selected;
    });
  },

  load: Ember.on('init', Ember.observer('queryUrl', function() {
    var self = this;
    this.set('isLoading', true);

    this.loadAllPages('', []).then(function(files) {
      self.set('isLoading', false);
      self.set('files', files.sort(function(a, b) {
        return b.lastModified - a.lastModified;
      }));
    });
  })),

  loadAllPages: function(marker, files) {
    var self = this;
    var baseUrl = this.get('objectBaseUrl');

    return Ember.$.get(this.get('queryUrl') + '&marker=' + marker).then(function(data) {
      var contents = data.getElementsByTagName('Contents');
      var isTruncated = data.getElementsByTagName('IsTruncated')[0].firstChild.data === "true";
      var length = contents.length;

      self.set('response', data);

      for(var i = 0; i < length; i++) {
        var size = contents[i].getElementsByTagName('Size')[0].firstChild.data;
        var name = contents[i].getElementsByTagName('Key')[0].firstChild.data;
        var lastModified = new Date(contents[i].getElementsByTagName('LastModified')[0].firstChild.data);

        files.push(
          App.S3File.create({
            name: name,
            size: size,
            lastModified: lastModified,
            relativePath: name,
            baseUrl: baseUrl
          })
        );
      }

      if (isTruncated) {
        var lastFile = files[files.length - 1];
        return self.loadAllPages(lastFile.get('name'), files);
      } else {
        return files;
      }
    });
  }
});

App.S3File = Ember.Object.extend({
  scriptTag: Ember.computed('url', function(){
    var escapedURL = Ember.Handlebars.Utils.escapeExpression(this.get('url'));

    return new Ember.Handlebars.SafeString('<script src="' + escapedURL + '"></script>').toString();
  }),

  url: Ember.computed('baseUrl', 'relativePath', function(){
    return this.get('baseUrl') + '/' + this.get('relativePath');
  })
});

App.Project = Ember.Object.extend();

App.Project.reopenClass({
  FIXTURES:
    [ {
      projectName: 'Ember',
      baseFileName: 'ember',
      projectFilter: [ /ember\./, /ember-template-compiler/ ],
      projectRepo: 'emberjs/ember.js',
      channel: "tagged"
    }, {
      projectName: 'Ember Data',
      baseFileName: 'ember-data',
      projectFilter: [ /ember-data\./ ],
      projectRepo: 'emberjs/data',
      channel: "tagged"
    }, {
      projectName: "Ember",
      baseFileName: 'ember',
      projectFilter: [ /ember\./, /ember-template-compiler/ ],
      projectRepo: 'emberjs/ember.js',
      initialVersion: "2.4.5",
      initialReleaseDate: "2016-04-11",
      lastRelease: "2.4.5",
      futureVersion: "2.4.6",
      channel: "lts",
      date: "2016-04-11",
      changelogPath: "CHANGELOG.md",
      enableTestURL: true,
      debugFileName: ".debug.js",
      ignoreFiles: ['ember.js'],
      installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#release'
    }, {
      projectName: "Ember",
      baseFileName: 'ember',
      projectFilter: [ /ember\./, /ember-template-compiler/ ],
      projectRepo: 'emberjs/ember.js',
      initialVersion: "2.6.0",
      initialReleaseDate: "2016-06-08",
      lastRelease: "2.6.1",
      futureVersion: "2.6.2",
      channel: "release",
      date: "2016-06-27",
      changelogPath: "CHANGELOG.md",
      enableTestURL: true,
      debugFileName: ".debug.js",
      ignoreFiles: ['ember.js'],
      installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#release'
    }, {
      projectName: "Ember",
      baseFileName: 'ember',
      projectFilter: [ /ember\./, /ember-template-compiler/ ],
      projectRepo: 'emberjs/ember.js',
      lastRelease: "2.7.0-beta.2",
      futureVersion: "2.7.0-beta.3",
      finalVersion: '2.7.0',
      channel: "beta",
      cycleEstimatedFinishDate: '2016-07-25',
      date: "2016-06-25",
      nextDate: "2016-07-04",
      changelogPath: "CHANGELOG.md",
      enableTestURL: true,
      debugFileName: ".debug.js",
      ignoreFiles: ['ember.js'],
      installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#beta'
    }, {
      projectName: "Ember Data",
      baseFileName: 'ember-data',
      projectFilter: [ /ember-data\./ ],
      projectRepo: 'emberjs/data',
      lastRelease: "2.6.1",
      futureVersion: "2.6.2",
      channel: "release",
      date: "2016-06-15",
      changelogPath: "CHANGELOG.md",
      debugFileName: ".js",
      installWithEmberCLI: '# Install Ember-Data %s:\nnpm install --save-dev ember-data@%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nnpm install --save-dev emberjs/data#release'
    }, {
      projectName: "Ember Data",
      baseFileName: 'ember-data',
      projectFilter: [ /ember-data\./ ],
      projectRepo: 'emberjs/data',
      lastRelease: "2.7.0-beta.2",
      futureVersion: "2.7.0-beta.3",
      finalVersion: '2.7.0',
      channel: "beta",
      date: "2016-06-28",
      changelogPath: "CHANGELOG.md",
      debugFileName: ".js",
      installWithEmberCLI: '# Install Ember-Data %s:\nnpm install --save-dev ember-data@%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nnpm install --save-dev emberjs/data#beta'
    }, {
      projectName: "Ember",
      baseFileName: 'ember',
      projectFilter: [ /ember\./, /ember-template-compiler/ ],
      projectRepo: 'emberjs/ember.js',
      channel: "canary",
      enableTestURL: true,
      debugFileName: ".debug.js",
      ignoreFiles: ['ember.js'],
      installWithEmberCLI: '# Install the latest Ember canary:\nbower install --save ember#canary'
    }, {
      projectName: "Ember Data",
      baseFileName: 'ember-data',
      projectFilter: [ /ember-data\./ ],
      projectRepo: 'emberjs/data',
      channel: "canary",
      debugFileName: ".js",
      installWithEmberCLI: '# Install the latest Ember-Data canary:\nnpm install --save-dev emberjs/data#master'
    }],

  all: function(channel){
    var projects;

    if (channel)
      projects = this.FIXTURES.filterBy('channel', channel);
    else
      projects = this.FIXTURES;

    return projects.map(function(obj) {
      return App.Project.create(obj);
    });
  },

  find: function(channel, name) {
    var allProjects = this.all(channel);

    if (!name)
      return allProjects;
    else
      return allProjects.filterBy('projectName', name);
  },

  findOne: function(channel, name) {
    var results = this.find(channel, name);
    if (results.length > 1) {
      throw new Error('Expected one result from `find`, got '+results.length);
    }
    return results[0];
  }
});

App.BuildCategoryMixin = Ember.Mixin.create({
  renderTemplate: function() {
    this.render('build-list');
  }
});

App.ApplicationController = Ember.Controller.extend({
  isIndexActive: Ember.computed('currentRouteName', function(){
    return this.isActiveChannel('index');
  }),

  isTaggedActive: Ember.computed('currentRouteName', function(){
    return this.isActiveChannel('tagged');
  }),

  isChannelsActive: Ember.computed('currentRouteName', function(){
    var self = this;
    return !['index','tagged'].some(function(name){
      return name === self.get('currentRouteName');
    });
  }),

  isReleaseActive: Ember.computed('currentRouteName', function(){
    return this.isActiveChannel('release');
  }),

  isBetaActive: Ember.computed('currentRouteName', function(){
    return this.isActiveChannel('beta');
  }),

  isCanaryActive: Ember.computed('currentRouteName', function(){
    return this.isActiveChannel('canary');
  }),

  isActiveChannel: function(channel){
    return this.get('currentRouteName').indexOf(channel) !== -1;
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      release: App.Project.findOne('release', 'Ember'),
      beta: App.Project.findOne('beta', 'Ember'),
      canary: App.Project.findOne('canary', 'Ember'),
      lts: App.Project.findOne('lts', 'Ember')
    });
  }
});

App.IndexController = Ember.Controller.extend({
  latestVersionOfDocs: Ember.computed('model.release.lastRelease', function() {
    const release = this.get('model.release.lastRelease');
    const versionArray = release.split('.');
    return `${versionArray[0]}.${versionArray[1]}.0`;
  })
});

App.ProjectsMixin = Ember.Mixin.create({
  projects: Ember.computed('channel', 'model', function(){
    var projects = App.Project.find(this.get('channel')),
        bucket   = this.get('model'),
        self = this;

    projects.forEach(function(project){
      if (project.channel === 'beta'){
        project.isEmberBeta = project.projectName === 'Ember';

        [1,2,3,4,5].forEach(function(increment){
          var versionParts = project.lastRelease.split('.');
          var currentBetaNumber = parseInt(versionParts[versionParts.length - 1], 10);
          project['beta' + increment + 'Completed'] = increment <= currentBetaNumber;
          project['isBeta' + increment] = increment === currentBetaNumber;
        });

        var release = App.Project.find('release', project.projectName)[0];

        // no releases exist for ember-data (yet)
        if (release) {
          project.lastStableVersion = release.initialVersion;
          project.lastStableDate = release.initialReleaseDate;
        }
      }

      project.files = bucket.filterFiles(project.projectFilter, project.ignoreFiles);
      project.description = self.description(project);
      project.lastReleaseDebugUrl = self.lastReleaseUrl(project.baseFileName, project.channel, project.lastRelease, project.debugFileName);
      project.lastReleaseProdUrl  = self.lastReleaseUrl(project.baseFileName, project.channel, project.lastRelease, '.prod.js');
      project.lastReleaseMinUrl   = self.lastReleaseUrl(project.baseFileName, project.channel, project.lastRelease, '.min.js');

      if (project.enableTestURL) {
        project.lastReleaseTestUrl  = self.lastReleaseUrl(project.baseFileName, project.channel, project.lastRelease, '-tests-index.html');
      }

      if (project.channel === 'canary') {
        project.lastRelease = 'latest';
      } else if (project.changelog !== 'false') {
        project.lastReleaseChangelogUrl   = 'https://github.com/' + project.projectRepo + '/blob/v' + project.lastRelease + '/' + project.changelogPath;
      }
    });

    return projects;
  }),

  description: function(project){
    var lastRelease = project.lastRelease,
        futureVersion = project.futureVersion,
        value;

    if (this.get('channel') === 'tagged') {
      value = '';
    } else if (lastRelease) {
      value = 'The builds listed below are incremental improvements made since ' + lastRelease + ' and may become ' + futureVersion + '.'
    } else if (futureVersion) {
      value = 'The builds listed below are not based on a tagged release. Upon the next release cycle they will become ' + futureVersion + '.';
    } else {
      value = 'The builds listed below are based on the most recent development.';
    }

    return new Ember.Handlebars.SafeString(value);
  },

  lastReleaseUrl: function(project, channel, lastRelease, extension){
    if (channel === 'canary')
      return 'http://builds.emberjs.com/canary/' + project + extension;
    else
      return 'http://builds.emberjs.com/tags/v' + lastRelease + '/' + project + extension;
  }


});

App.CanaryRoute = Ember.Route.extend(App.BuildCategoryMixin, {
  model: function() {
    return App.S3Bucket.create({title: 'Canary Builds', prefix: 'canary/' });
  }
});

App.CanaryController = Ember.Controller.extend(App.ProjectsMixin, {
  templateName: 'buildList',
  channel: 'canary',
  channelDescription: 'Canary builds are generated from each commit to the master branch of Ember and Ember-Data. These builds are not suitable for use in production, and may contain unstable features disabled behind a flag.'
});

App.BetaRoute = Ember.Route.extend(App.BuildCategoryMixin, {
  model: function() {
    return App.S3Bucket.create({title: 'Beta Builds', prefix: 'beta/'});
  }
});

App.BetaController = Ember.Controller.extend(App.ProjectsMixin, {
  templateName: 'buildList',
  channel: 'beta',
  includeReleasesInFileList: true,
  channelDescription: 'The master branch of Ember and Ember-Data is promoted to beta every six weeks. Roughly each week, a new beta release is provided for evaluation. After six of these beta releases, a stable release is declared.'
});

App.ReleaseRoute = Ember.Route.extend(App.BuildCategoryMixin, {
  model: function() {
    return App.S3Bucket.create({title: 'Release Builds', prefix: 'release/'});
  }
});

App.ReleaseController = Ember.Controller.extend(App.ProjectsMixin, {
  templateName: 'buildList',
  channel: 'release',
  includeReleasesInFileList: true,
  channelDescription: 'Release builds are production-ready versions of Ember and Ember-Data that have been through a six-week beta cycle.'
});

App.TaggedRoute = Ember.Route.extend({
  model: function() {
    var bucket = App.S3Bucket.create({
      title: 'Tagged Release Builds',
      prefix: 'tags/v',
      delimiter: '',
    });
    return bucket;
  }
});

App.TaggedController = Ember.Controller.extend(App.ProjectsMixin, {
  channel: 'tagged'
});

/*
 * Helpers
 */

App.FormatDateTimeHelper = Ember.Helper.helper(function(params) {
  var date = params[0];
  var format = params[1];
  if (format) {
    return moment(date).format(format);
  } else {
    return moment(date).fromNow();
  }
});

App.PrintfHelper = Ember.Helper.helper(function(params) {
  var template = params[0];
  var value = params[1];
  return template.replace(/%s/g, value);
});

App.ScriptTagHelper = Ember.Helper.helper(function(params) {
  var url = params[0];
  var escapedURL = Ember.Handlebars.Utils.escapeExpression(url);
  return Ember.String.htmlSafe('<script src="' + escapedURL + '"></script>');
});

App.TagUrlPathHelper = Ember.Helper.helper(function(params) {
  var url = params[0];
  var pathIndex = url.indexOf('tags');
  return url.slice(pathIndex);
});

App.ParamsHelper = Ember.Helper.helper(function(params) {
  return params;
});

Ember.TEMPLATES._files_table=Ember.Handlebars.template({1:function(e,t,a,s){var r,n=this.escapeExpression,i=t.helperMissing,l="";return s.buffer.push('  <div class="release-progress clear">\n    <div class="left">\n      <div class="small-release-image" '),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{title:"project.lastStableVersion"},hashTypes:{title:"ID"},hashContexts:{title:e},types:[],contexts:[],data:s}))),s.buffer.push('></div>\n      <div class="release-version">'),r=t._triageMustache.call(e,"project.lastStableVersion",{name:"_triageMustache",hash:{},hashTypes:{},hashContexts:{},types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push('</div>\n      <div class="release-date">Released '),s.buffer.push(n((t["format-date-time"]||e&&e["format-date-time"]||i).call(e,"project.lastStableDate","MMM Do",{name:"format-date-time",hash:{},hashTypes:{},hashContexts:{},types:["ID","STRING"],contexts:[e,e],data:s}))),s.buffer.push('</div>\n    </div>\n    <div class="float-left-container">\n      <div class="release-cycle-title">The path to '),r=t._triageMustache.call(e,"project.finalVersion",{name:"_triageMustache",hash:{},hashTypes:{},hashContexts:{},types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("...</div>\n      <div "),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{"class":":left project.beta1Completed::future-image"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},types:[],contexts:[],data:s}))),s.buffer.push('>\n        <div class="tiny-beta-image"></div>\n        <div class="beta-version">beta 1</div>\n'),r=t["if"].call(e,"project.isBeta1",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(2,s),inverse:this.noop,types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("      </div>\n      <div "),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{"class":":left project.beta2Completed::future-image"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},types:[],contexts:[],data:s}))),s.buffer.push('>\n        <div class="tiny-beta-image"></div>\n        <div class="beta-version">beta 2</div>\n'),r=t["if"].call(e,"project.isBeta2",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(2,s),inverse:this.noop,types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),r=t["if"].call(e,"project.isBeta1",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(4,s),inverse:this.noop,types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("      </div>\n      <div "),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{"class":":left project.beta3Completed::future-image"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},types:[],contexts:[],data:s}))),s.buffer.push('>\n        <div class="tiny-beta-image"></div>\n        <div class="beta-version">beta 3</div>\n'),r=t["if"].call(e,"project.isBeta3",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(2,s),inverse:this.noop,types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),r=t["if"].call(e,"project.isBeta2",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(4,s),inverse:this.noop,types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("      </div>\n      <div "),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{"class":":left project.beta4Completed::future-image"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},types:[],contexts:[],data:s}))),s.buffer.push('>\n        <div class="tiny-beta-image"></div>\n        <div class="beta-version">beta 4</div>\n'),r=t["if"].call(e,"project.isBeta4",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(2,s),inverse:this.noop,types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),r=t["if"].call(e,"project.isBeta3",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(4,s),inverse:this.noop,types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("      </div>\n      <div "),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{"class":":left project.beta5Completed::future-image"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},types:[],contexts:[],data:s}))),s.buffer.push('>\n        <div class="tiny-beta-image"></div>\n        <div class="beta-version">beta 5</div>\n'),r=t["if"].call(e,"project.isBeta5",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(2,s),inverse:this.noop,types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),r=t["if"].call(e,"project.isBeta4",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(4,s),inverse:this.noop,types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push('      </div>\n    </div>\n    <div class="right future-image">\n      <div class="small-release-image" '),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{title:"project.finalVersion"},hashTypes:{title:"ID"},hashContexts:{title:e},types:[],contexts:[],data:s}))),s.buffer.push('></div>\n      <div class="release-version">'),r=t._triageMustache.call(e,"project.finalVersion",{name:"_triageMustache",hash:{},hashTypes:{},hashContexts:{},types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push('</div>\n      <div class="release-date">Coming '),s.buffer.push(n((t["format-date-time"]||e&&e["format-date-time"]||i).call(e,"project.cycleEstimatedFinishDate","MMM Do",{name:"format-date-time",hash:{},hashTypes:{},hashContexts:{},types:["ID","STRING"],contexts:[e,e],data:s}))),s.buffer.push('</div>\n    </div>\n    <div class="clear"></div>\n  </div>\n'),l},2:function(e,t,a,s){s.buffer.push('          <div class="beta-current-version">(current beta)</div>\n')},4:function(e,t,a,s){var r=t.helperMissing,n=this.escapeExpression,i="";return s.buffer.push('          <div class="beta-current-version">(coming '),s.buffer.push(n((t["format-date-time"]||e&&e["format-date-time"]||r).call(e,"project.nextDate","MMM Do",{name:"format-date-time",hash:{},hashTypes:{},hashContexts:{},types:["ID","STRING"],contexts:[e,e],data:s}))),s.buffer.push(")</div>\n"),i},6:function(e,t,a,s){var r,n=this.escapeExpression,i="";return s.buffer.push('<div id="download">\n  <div id="download-ember">\n    <a class="orange button" '),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{href:"project.lastReleaseDebugUrl"},hashTypes:{href:"ID"},hashContexts:{href:e},types:[],contexts:[],data:s}))),s.buffer.push(" download>Download "),r=t._triageMustache.call(e,"project.lastRelease",{name:"_triageMustache",hash:{},hashTypes:{},hashContexts:{},types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push('</a>\n    <div class="info">\n      '),r=t._triageMustache.call(e,"project.lastRelease",{name:"_triageMustache",hash:{},hashTypes:{},hashContexts:{},types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push(':\n      <a class="debug" '),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{href:"project.lastReleaseProdUrl"},hashTypes:{href:"ID"},hashContexts:{href:e},types:[],contexts:[],data:s}))),s.buffer.push(' download>production</a>\n      <a class="debug" '),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{href:"project.lastReleaseMinUrl"},hashTypes:{href:"ID"},hashContexts:{href:e},types:[],contexts:[],data:s}))),s.buffer.push(' download>(min)</a> |\n      <a class="debug" '),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{href:"project.lastReleaseDebugUrl"},hashTypes:{href:"ID"},hashContexts:{href:e},types:[],contexts:[],data:s}))),s.buffer.push(" download>debug</a>\n      "),r=t["if"].call(e,"project.lastReleaseTestUrl",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(7,s),inverse:this.noop,types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("      "),r=t["if"].call(e,"project.lastReleaseChangelogUrl",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(9,s),inverse:this.noop,types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("    </div>\n  </div>\n</div>\n"),i},7:function(e,t,a,s){var r=this.escapeExpression,n="";return s.buffer.push(' |\n        <a class="debug" '),s.buffer.push(r(t["bind-attr"].call(e,{name:"bind-attr",hash:{href:"project.lastReleaseTestUrl"},hashTypes:{href:"ID"},hashContexts:{href:e},types:[],contexts:[],data:s}))),s.buffer.push(' target="_blank" >live tests</a>\n'),n},9:function(e,t,a,s){var r=this.escapeExpression,n="";return s.buffer.push(' |\n        <a class="debug" '),s.buffer.push(r(t["bind-attr"].call(e,{name:"bind-attr",hash:{href:"project.lastReleaseChangelogUrl"},hashTypes:{href:"ID"},hashContexts:{href:e},types:[],contexts:[],data:s}))),s.buffer.push(">changelog</a>\n"),n},11:function(e,t,a,s){var r,n=this.escapeExpression,i=t.helperMissing,l="";return s.buffer.push("      <tr>\n        <td><a "),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{href:"file.url"},hashTypes:{href:"ID"},hashContexts:{href:e},types:[],contexts:[],data:s}))),s.buffer.push(">"),r=t._triageMustache.call(e,"file.name",{name:"_triageMustache",hash:{},hashTypes:{},hashContexts:{},types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("</a></td>\n        <td>"),s.buffer.push(n((t["format-date-time"]||e&&e["format-date-time"]||i).call(e,"file.lastModified",{name:"format-date-time",hash:{},hashTypes:{},hashContexts:{},types:["ID"],contexts:[e],data:s}))),s.buffer.push("</td>\n        <td>"),s.buffer.push(n((t["copy-clipboard"]||e&&e["copy-clipboard"]||i).call(e,{name:"copy-clipboard",hash:{text:"file.url",label:"Link"},hashTypes:{text:"ID",label:"STRING"},hashContexts:{text:e,label:e},types:[],contexts:[],data:s}))),s.buffer.push(" "),s.buffer.push(n((t["copy-clipboard"]||e&&e["copy-clipboard"]||i).call(e,{name:"copy-clipboard",hash:{text:"file.scriptTag",label:"Script Tag"},hashTypes:{text:"ID",label:"STRING"},hashContexts:{text:e,label:e},types:[],contexts:[],data:s}))),s.buffer.push("</td>\n      </tr>\n"),l},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,s){var r,n="";return s.buffer.push('<h2 class="project-name">'),r=t._triageMustache.call(e,"project.projectName",{name:"_triageMustache",hash:{},hashTypes:{},hashContexts:{},types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push(" "),r=t._triageMustache.call(e,"project.channel",{name:"_triageMustache",hash:{},hashTypes:{},hashContexts:{},types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push(" Builds</h2>\n"),r=t["if"].call(e,"project.isEmberBeta",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(1,s),inverse:this.noop,types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),r=t["if"].call(e,"project.lastRelease",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(6,s),inverse:this.noop,types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push('<p class="description">'),r=t._triageMustache.call(e,"project.description",{name:"_triageMustache",hash:{},hashTypes:{},hashContexts:{},types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push('</p>\n<table class="table">\n  <thead>\n    <tr>\n      <th>File</th>\n      <th>Modified</th>\n      <th>Quick Copy</th>\n    </tr>\n  </thead>\n  <tbody>\n'),r=t.each.call(e,"file","in","project.files",{name:"each",hash:{},hashTypes:{},hashContexts:{},fn:this.program(11,s),inverse:this.noop,types:["ID","ID","ID"],contexts:[e,e,e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("  </tbody>\n</table>\n"),n},useData:!0}),Ember.TEMPLATES._project_listing=Ember.Handlebars.template({1:function(e,t,a,s){var r,n="";return r=t.each.call(e,"project","in","projects",{name:"each",hash:{},hashTypes:{},hashContexts:{},fn:this.program(2,s),inverse:this.noop,types:["ID","ID","ID"],contexts:[e,e,e],data:s}),null!=r&&s.buffer.push(r),n},2:function(e,t,a,s){var r=t.helperMissing,n=this.escapeExpression,i="";return s.buffer.push("    "),s.buffer.push(n((t.partial||e&&e.partial||r).call(e,"filesTable",{name:"partial",hash:{},hashTypes:{},hashContexts:{},types:["STRING"],contexts:[e],data:s}))),s.buffer.push("\n"),i},4:function(e,t,a,s){var r,n="";return s.buffer.push("  <br/>\n"),r=t["if"].call(e,"isLoading",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(5,s),inverse:this.program(7,s),types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),n},5:function(e,t,a,s){s.buffer.push('    <p class="loading-spinner">\n      Loading...<br/><br/>\n      <img src="/images/ajax-loader.gif" width="31" height="31" />\n    </p>\n')},7:function(e,t,a,s){var r,n="";return s.buffer.push("    <p>There are currently no builds for "),r=t._triageMustache.call(e,"title",{name:"_triageMustache",hash:{},hashTypes:{},hashContexts:{},types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push(". Please check back soon.</p>\n"),n},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,s){var r,n="";return r=t["if"].call(e,"filesPresent",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(1,s),inverse:this.program(4,s),types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),n},useData:!0}),Ember.TEMPLATES.application=Ember.Handlebars.template({1:function(e,t,a,s){s.buffer.push("Home")},3:function(e,t,a,s){s.buffer.push("Tagged Releases")},5:function(e,t,a,s){s.buffer.push("Release")},7:function(e,t,a,s){s.buffer.push("Beta")},9:function(e,t,a,s){s.buffer.push("Canary")},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,s){var r,n=this.escapeExpression,i=t.helperMissing,l="";return s.buffer.push('<div id="sidebar">\n  <ol id="toc-list">\n    <li '),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{"class":":level-1 isIndexActive:selected"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},types:[],contexts:[],data:s}))),s.buffer.push(">"),r=(t["link-to"]||e&&e["link-to"]||i).call(e,"index",{name:"link-to",hash:{},hashTypes:{},hashContexts:{},fn:this.program(1,s),inverse:this.noop,types:["STRING"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("</li>\n    <li "),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{"class":":level-1 isTaggedActive:selected"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},types:[],contexts:[],data:s}))),s.buffer.push(">"),r=(t["link-to"]||e&&e["link-to"]||i).call(e,"tagged",{name:"link-to",hash:{},hashTypes:{},hashContexts:{},fn:this.program(3,s),inverse:this.noop,types:["STRING"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("</li>\n    <li "),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{"class":":level-1 isChannelsActive:selected"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},types:[],contexts:[],data:s}))),s.buffer.push('>\n      <a>Channels</a>\n      <ol style="display:block">\n        <li '),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{"class":":level-3 isReleaseActive:sub-selected"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},types:[],contexts:[],data:s}))),s.buffer.push(">"),r=(t["link-to"]||e&&e["link-to"]||i).call(e,"release",{name:"link-to",hash:{},hashTypes:{},hashContexts:{},fn:this.program(5,s),inverse:this.noop,types:["STRING"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("</li>\n        <li "),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{"class":":level-3 isBetaActive:sub-selected"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},types:[],contexts:[],data:s}))),s.buffer.push(">"),r=(t["link-to"]||e&&e["link-to"]||i).call(e,"beta",{name:"link-to",hash:{},hashTypes:{},hashContexts:{},fn:this.program(7,s),inverse:this.noop,types:["STRING"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("</li>\n        <li "),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{"class":":level-3 isCanaryActive:sub-selected"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},types:[],contexts:[],data:s}))),s.buffer.push(">"),r=(t["link-to"]||e&&e["link-to"]||i).call(e,"canary",{name:"link-to",hash:{},hashTypes:{},hashContexts:{},fn:this.program(9,s),inverse:this.noop,types:["STRING"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push('</li>\n      </ol>\n    </li>\n  </ol>\n</div>\n\n<div id="subcontent" class="has-sidebar">\n  '),r=t._triageMustache.call(e,"outlet",{name:"_triageMustache",hash:{},hashTypes:{},hashContexts:{},types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("\n</div>\n"),l},useData:!0}),Ember.TEMPLATES["build-list"]=Ember.Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,s){var r=t.helperMissing,n=this.escapeExpression,i="";return s.buffer.push(n((t.partial||e&&e.partial||r).call(e,"projectListing",{name:"partial",hash:{},hashTypes:{},hashContexts:{},types:["STRING"],contexts:[e],data:s}))),s.buffer.push("\n"),i},useData:!0}),Ember.TEMPLATES["components/copy-clipboard"]=Ember.Handlebars.template({1:function(e,t,a,s){var r,n=this.escapeExpression,i="";return s.buffer.push("  <button "),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{"data-clipboard-text":"text"},hashTypes:{"data-clipboard-text":"ID"},hashContexts:{"data-clipboard-text":e},types:[],contexts:[],data:s}))),s.buffer.push(" "),s.buffer.push(n(t["bind-attr"].call(e,{name:"bind-attr",hash:{"data-label":"label"},hashTypes:{"data-label":"ID"},hashContexts:{"data-label":e},types:[],contexts:[],data:s}))),s.buffer.push(">"),r=t._triageMustache.call(e,"label",{name:"_triageMustache",hash:{},hashTypes:{},hashContexts:{},types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("</button>\n"),i},3:function(e,t,a,s){var r=this.escapeExpression,n="";return s.buffer.push('  <input type="text" class="name-input" readonly="readonly" '),s.buffer.push(r(t["bind-attr"].call(e,{name:"bind-attr",hash:{value:"text"},hashTypes:{value:"ID"},hashContexts:{value:e},types:[],contexts:[],data:s}))),s.buffer.push(">\n"),n},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,s){var r,n="";return r=t["if"].call(e,"hasFlash",{name:"if",hash:{},hashTypes:{},hashContexts:{},fn:this.program(1,s),inverse:this.program(3,s),types:["ID"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),n},useData:!0}),Ember.TEMPLATES.index=Ember.Handlebars.template({1:function(e,t,a,s){s.buffer.push('      <div class="release" title="Release Builds"></div>\n')},3:function(e,t,a,s){s.buffer.push('      <div class="beta" title="Beta Builds"></div>\n')},5:function(e,t,a,s){s.buffer.push('      <div class="canary" title="Canary Builds"></div>\n')},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,s){var r,n=t.helperMissing,i="";return s.buffer.push('<div class="features section">\n  <div class="feature">\n'),r=(t["link-to"]||e&&e["link-to"]||n).call(e,"release",{name:"link-to",hash:{},hashTypes:{},hashContexts:{},fn:this.program(1,s),inverse:this.noop,types:["STRING"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push('    <h2>Release</h2>\n    <p>Release builds have been hardened through our multi-tiered release process. These builds are perfect for use in production environments.</p>\n  </div>\n  <div class="feature">\n'),r=(t["link-to"]||e&&e["link-to"]||n).call(e,"beta",{name:"link-to",hash:{},hashTypes:{},hashContexts:{},fn:this.program(3,s),inverse:this.noop,types:["STRING"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push('    <h2>Beta</h2>\n    <p>Beta builds will incorporate new features that are ready for more review. They will include new features that have been more thoroughly tested. We do not recommend using Beta builds in production.</p>\n  </div>\n  <div class="feature">\n'),r=(t["link-to"]||e&&e["link-to"]||n).call(e,"canary",{name:"link-to",hash:{},hashTypes:{},hashContexts:{},fn:this.program(5,s),inverse:this.noop,types:["STRING"],contexts:[e],data:s}),null!=r&&s.buffer.push(r),s.buffer.push("    <h2>Canary</h2>\n    <p>Canary builds are the bleeding edge of Ember development. Please do not use these builds unless you are absolutely certain that you need fixes and/or features not available in the Release or Beta builds.</p>\n  </div>\n</div>\n"),i},useData:!0});var App=Ember.Application.create({rootElement:"#builds-application"});App.Router.map(function(){this.route("release"),this.route("beta"),this.route("canary"),this.route("tagged")}),App.Router.reopen({notifyGoogleAnalytics:function(){var e=this.get("url");/^\//.test(e)||(e="/"+e),_gaq.push(["_trackPageview","/builds"+e])}.on("didTransition")}),App.CopyClipboardComponent=Ember.Component.extend({tagName:"span",hasFlash:ZeroClipboard.detectFlashSupport(),didInsertElement:function(){var e=new ZeroClipboard(this.$("button"),{moviePath:"/images/ZeroClipboard.swf",trustedDomains:["*"],allowScriptAccess:"always"});e.on("mousedown",function(){Em.run.later(this,function(){$(this).removeClass("loading"),$(this).removeAttr("disabled")},1e3),Em.run.next(this,function(){$(this).addClass("loading"),$(this).attr("disabled","disabled")})}),this.$("input").on("click",function(){$(this).select()})}}),App.S3Bucket=Ember.Object.extend({files:[],isLoading:!1,queryUseSSL:!0,objectUseSSL:!1,delimiter:"/",bucket:"builds.emberjs.com",endpoint:"s3.amazonaws.com",delimiterParameter:function(){var e=this.getWithDefault("delimiter","").toString();return e?"delimiter="+e:""}.property("delimiter"),markerParameter:function(){return"marker="+this.getWithDefault("marker","").toString()}.property("marker"),maxKeysParameter:function(){return"max-keys="+this.getWithDefault("maxKeys","").toString()}.property("maxKeys"),prefixParameter:function(){return"prefix="+this.getWithDefault("prefix","").toString()}.property("prefix"),queryProtocol:function(){return this.get("queryUseSSL")?"https://":"http://"}.property("queryUseSSL"),queryBaseUrl:function(){return this.get("queryProtocol")+this.get("endpoint")+"/"+this.get("bucket")}.property("queryProtocol","endpoint","bucket"),objectProtocol:function(){return this.get("objectUseSSL")?"https://":"http://"}.property("objectUseSSL"),objectBaseUrl:function(){return this.get("objectProtocol")+this.get("bucket")}.property("objectProtocol","bucket"),queryParams:function(){return this.get("delimiterParameter")+"&"+this.get("markerParameter")+"&"+this.get("maxKeysParameter")+"&"+this.get("prefixParameter")}.property("delimiterParameter","markerParameter","maxKeysParameter","prefixParameter"),queryUrl:function(){return this.get("queryBaseUrl")+"?"+this.get("queryParams")}.property("queryBaseUrl","queryParams"),filesPresent:function(){return this.get("files").length}.property("files.@each"),filterFiles:function(e,t){var a=this.get("files"),t=Ember.A(t);return a.filter(function(a){var s=a.get("name"),r=t.any(function(e){return s.indexOf(e)>=0}),n=s.indexOf(e+".")>=0;return!r&&n})},load:function(){var e=this,t=this.get("objectBaseUrl");this.set("isLoading",!0),Ember.$.get(this.get("queryUrl"),function(a){e.set("isLoading",!1),e.set("response",a);for(var s=a.getElementsByTagName("Contents"),r=s.length,n=[],i=0;r>i;i++){var l=s[i].getElementsByTagName("Size")[0].firstChild.data,h=s[i].getElementsByTagName("Key")[0].firstChild.data,o=new Date(s[i].getElementsByTagName("LastModified")[0].firstChild.data);n.push(App.S3File.create({name:h,size:l,lastModified:o,relativePath:h,baseUrl:t}))}e.set("files",n.sort(function(e,t){return t.lastModified-e.lastModified}))})}.observes("queryUrl").on("init")}),App.S3File=Ember.Object.extend({scriptTag:function(){var e=Handlebars.Utils.escapeExpression(this.get("url"));return new Handlebars.SafeString('<script src="'+e+'"></script>').toString()}.property("url"),url:function(){return this.get("baseUrl")+"/"+this.get("relativePath")}.property("baseUrl","relativePath")}),App.Project=Ember.Object.extend(),App.Project.reopenClass({FIXTURES:[{projectName:"Ember",projectFilter:"ember",projectRepo:"emberjs/ember.js",channel:"tagged"},{projectName:"Ember Data",projectFilter:"ember-data",projectRepo:"emberjs/data",channel:"tagged"},{projectName:"Ember",projectFilter:"ember",projectRepo:"emberjs/ember.js",initialVersion:"1.9.0",initialReleaseDate:"2014-12-08",lastRelease:"1.9.0",futureVersion:"1.9.1",channel:"release",date:"2014-12-08",changelogPath:"CHANGELOG.md",enableTestURL:!0,debugFileName:".js"},{projectName:"Ember",projectFilter:"ember",projectRepo:"emberjs/ember.js",lastRelease:"1.10.0-beta.1",futureVersion:"1.9.0-beta.2",finalVersion:"1.10.0",channel:"beta",cycleEstimatedFinishDate:"2015-02-23",date:"2014-12-10",nextDate:"2014-12-17",changelogPath:"CHANGELOG.md",enableTestURL:!0,debugFileName:".debug.js",ignoreFiles:["ember.js"]},{projectName:"Ember Data",projectFilter:"ember-data",projectRepo:"emberjs/data",lastRelease:"1.0.0-beta.12",futureVersion:"1.0.0-beta.13",channel:"beta",date:"2014-11-26",changelogPath:"CHANGELOG.md",debugFileName:".js"},{projectName:"Ember",projectFilter:"ember",projectRepo:"emberjs/ember.js",channel:"canary",enableTestURL:!0,debugFileName:".debug.js",ignoreFiles:["ember.js"]},{projectName:"Ember Data",projectFilter:"ember-data",projectRepo:"emberjs/data",channel:"canary",debugFileName:".js"}],all:function(e){var t;return t=e?this.FIXTURES.filterBy("channel",e):this.FIXTURES,t.map(function(e){return App.Project.create(e)})},find:function(e,t){var a=this.all(e);return t?a.filterBy("projectName",t):a}}),App.BuildCategoryMixin=Ember.Mixin.create({renderTemplate:function(){this.render("build-list")}}),App.ApplicationController=Ember.ObjectController.extend({isIndexActive:function(){return this.isActiveChannel("index")}.property("currentRouteName"),isTaggedActive:function(){return this.isActiveChannel("tagged")}.property("currentRouteName"),isChannelsActive:function(){var e=this;return!["index","tagged"].some(function(t){return t===e.get("currentRouteName")})}.property("currentRouteName"),isReleaseActive:function(){return this.isActiveChannel("release")}.property("currentRouteName"),isBetaActive:function(){return this.isActiveChannel("beta")}.property("currentRouteName"),isCanaryActive:function(){return this.isActiveChannel("canary")}.property("currentRouteName"),isActiveChannel:function(e){return-1!==this.get("currentRouteName").indexOf(e)}}),App.ProjectsMixin=Ember.Mixin.create({projects:function(){var e=App.Project.find(this.get("channel")),t=this.get("model"),a=this;return e.forEach(function(e){if("beta"===e.channel){e.isEmberBeta="Ember"===e.projectName,[1,2,3,4,5].forEach(function(t){var a=e.lastRelease.split("."),s=parseInt(a[a.length-1],10);e["beta"+t+"Completed"]=s>=t,e["isBeta"+t]=t===s});var s=App.Project.find("release",e.projectName)[0];s&&(e.lastStableVersion=s.initialVersion,e.lastStableDate=s.initialReleaseDate)}e.files=t.filterFiles(e.projectFilter,e.ignoreFiles),e.description=a.description(e),e.lastReleaseDebugUrl=a.lastReleaseUrl(e.projectFilter,e.channel,e.lastRelease,e.debugFileName),e.lastReleaseProdUrl=a.lastReleaseUrl(e.projectFilter,e.channel,e.lastRelease,".prod.js"),e.lastReleaseMinUrl=a.lastReleaseUrl(e.projectFilter,e.channel,e.lastRelease,".min.js"),e.enableTestURL&&(e.lastReleaseTestUrl=a.lastReleaseUrl(e.projectFilter,e.channel,e.lastRelease,"-tests-index.html")),"canary"===e.channel?e.lastRelease="latest":"false"!==e.changelog&&(e.lastReleaseChangelogUrl="https://github.com/"+e.projectRepo+"/blob/v"+e.lastRelease+"/"+e.changelogPath)}),e}.property("channel","model"),description:function(e){var t,a=e.lastRelease,s=e.futureVersion;return t="tagged"===this.get("channel")?"":a?"The builds listed below are incremental improvements made since "+a+" and may become "+s+".":s?"The builds listed below are not based on a tagged release. Upon the next release cycle they will become "+s+".":"The builds listed below are based on the most recent development.",new Handlebars.SafeString(t)},lastReleaseUrl:function(e,t,a,s){return"canary"===t?"http://builds.emberjs.com/canary/"+e+s:"http://builds.emberjs.com/tags/v"+a+"/"+e+s}}),App.CanaryRoute=Ember.Route.extend(App.BuildCategoryMixin,{model:function(){return App.S3Bucket.create({title:"Canary Builds",prefix:"canary/"})}}),App.CanaryController=Ember.ObjectController.extend(App.ProjectsMixin,{templateName:"buildList",channel:"canary"}),App.BetaRoute=Ember.Route.extend(App.BuildCategoryMixin,{model:function(){return App.S3Bucket.create({title:"Beta Builds",prefix:"beta/"})}}),App.BetaController=Ember.ObjectController.extend(App.ProjectsMixin,{templateName:"buildList",channel:"beta"}),App.ReleaseRoute=Ember.Route.extend(App.BuildCategoryMixin,{model:function(){return App.S3Bucket.create({title:"Release Builds",prefix:"release/"})}}),App.ReleaseController=Ember.ObjectController.extend(App.ProjectsMixin,{templateName:"buildList",channel:"release"}),App.TaggedRoute=Ember.Route.extend(App.BuildCategoryMixin,{model:function(){var e=App.S3Bucket.create({title:"Tagged Release Builds",prefix:"tags/",delimiter:""});return e}}),App.TaggedController=Ember.ObjectController.extend(App.ProjectsMixin,{channel:"tagged"}),Ember.Handlebars.helper("format-bytes",function(e){return(e/1024).toFixed(2)+" KB"}),Ember.Handlebars.helper("format-date-time",function(e,t,a){return a||(a=t,t=null),t?moment(e).format(t):moment(e).fromNow()}),Ember.Handlebars.helper("isHiDPIScreen",function(){return window.getDevicePixelRatio()>1});
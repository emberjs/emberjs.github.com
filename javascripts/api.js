$(function(){function t(){var t=this.getAttribute("data-type"),a=e?e.getItem("api-options-"+t):void 0;void 0!=a&&(a="true"==a,$(this).attr("checked",a))}function a(){var t=this.getAttribute("data-type");$("."+t).toggle(this.checked),e&&e.setItem("api-options-"+t,this.checked)}function i(t,a){var i=t.find("> ul"),n=i.find("a[href="+a+"]"),e=$(a);i.find("li").removeClass("active"),n.parent().addClass("active"),t.find(".pane").hide(),e.show()}function n(){var t=window.location.hash,a=$(t);a.length>0&&!a.is(":visible")?(i(a.parents(".tabs"),"#"+a.parents(".pane").attr("id")),$("html, body").scrollTop(a.offset().top)):0==a.length&&i($(".tabs"),"#index")}var e=window.localStorage;$("#api-options input").each(t),$("#api-options input").each(a),$("#api-options input").on("change",a),$(".tabs .pane").hide(),$(".tabs .pane:first").show(),$(".tabs ul li:first").addClass("active"),$(".tabs > ul li a").click(function(){var t=$(this),a=t.parents(".tabs"),n=t.attr("href");return i(a,n),!1}),$(window).on("hashchange",n),n()}),$(function(){$("#toc-list .level-1 > a").not("[target=_blank]").click(function(){return $(this).parent().find("> ol").slideToggle(function(){positionBackToTop(!0)}),!1}),$(function(){$(".anchorable-toc").each(function(){var t=$(this),a=t.data("id")||t.attr("id"),i="#"+a,n='<a class="toc-anchor" href="'+i+'"></a>';t.prepend(n)})})});
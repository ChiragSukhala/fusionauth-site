"use strict";

//noinspection JSUnusedAssignment
var FusionAuth = FusionAuth || {};

FusionAuth.Documentation = function() {
  Prime.Utils.bindAll(this);

  this.scrollTop = Prime.Document.queryById('scroll-top').addEventListener('click', this._handleClick);
  window.onscroll = this._handleScroll;
  this._replaceBreadcrumbsWithGlyphs();
}

FusionAuth.Documentation.constructor = FusionAuth.Documentation;
FusionAuth.Documentation.prototype = {


  _handleClick: function(event) {
    Prime.Utils.stopEvent(event);
    this.scrolling = true;

    // Hide the scroll-to button and scroll to the top
    this.scrollTop.removeClass('show')
    window.scrollTo(0, 0);

    setTimeout(this._resetScrollingState, 1500);
  },

  _resetScrollingState: function() {
    this.scrolling = false;
  },

  _handleScroll: function() {
    if (!this.scrolling) {
      if (window.pageYOffset > 2000) {
        this.scrollTop.addClass('show');
      } else {
        this.scrollTop.removeClass('show')
      }
    }
  },

  _replaceBreadcrumbsWithGlyphs: function() {
    // Use a Font Awesome glyph for bread crumbs
    Prime.Document.query('span.breadcrumb').each(function(element) {
      var innerHTML = element.domElement.innerHTML;

      // TODO I should just replace all usages of these arrows with one or the other
      element.setHTML(innerHTML
          .replace(/→/g, '<i class="fa fa-chevron-right"></i>')
          .replace(/->/g, '<i class="fa fa-chevron-right"></i>'));
    });
  }
}


Prime.Document.onReady(function() {
  new FusionAuth.Documentation();
});

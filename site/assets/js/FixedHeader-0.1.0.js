"use strict";

//noinspection JSUnusedAssignment
var FusionAuth = FusionAuth || {};

FusionAuth.FixedHeader = function() {
  Prime.Utils.bindAll(this);
  this.header = Prime.Document.queryFirst('header');

  // Reset when we navigate away from the page
  new Prime.Document.Element(document.body).addEventListener('click', this._resetHeader);

  window.addEventListener('scroll', this._handleOnScroll);
  this._restoreState();
};

FusionAuth.FixedHeader.constructor = FusionAuth.FixedHeader;
FusionAuth.FixedHeader.prototype = {

  hide: function() {
    this.header.removeClass('gray').removeClass('animate');
  },

  show: function() {
    this.header.addClass('gray').addClass('animate');
  },

  _handleOnScroll: function() {
    if (window.pageYOffset > 500) {
      this.show();
      localStorage.setItem('animate-header', 'true');
    } else {
      this.hide();
      localStorage.setItem('animate-header', 'false');
    }
  },

  _resetHeader: function() {
    localStorage.setItem('animate-header', 'false');
  },

  // Preserve state on page refresh to keep movement down.
  _restoreState: function() {
    const animateHeader = (localStorage.getItem('animate-header') || 'false') === 'true';
    if (animateHeader) {
      this.show();
    } else {
      this.hide();
    }
  }
};


Prime.Document.onReady(function() {
  new FusionAuth.FixedHeader();
});

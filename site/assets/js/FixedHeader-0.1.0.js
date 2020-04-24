"use strict";

//noinspection JSUnusedAssignment
var FusionAuth = FusionAuth || {};

FusionAuth.FixedHeader = function() {
  Prime.Utils.bindAll(this);
  this.header = Prime.Document.queryFirst('header');

  window.onscroll = this.handleOnScroll;
  this.restoreState();
};

FusionAuth.FixedHeader.constructor = FusionAuth.FixedHeader;
FusionAuth.FixedHeader.prototype = {
  handleOnScroll: function() {
    if (window.pageYOffset > 500) {
      this.show();
      localStorage.setItem('animate-header', 'true');
    } else {
      this.hide();
      localStorage.setItem('animate-header', 'false');
    }
  },

  hide: function() {
    this.header.removeClass('gray').removeClass('animate');
  },

  // Preserve state on page refresh to keep movement down.
  restoreState: function() {
    const animateHeader = (localStorage.getItem('animate-header') || 'false') === 'true';
    if (animateHeader) {
      this.show();
    } else {
      this.hide();
    }
  },

  show: function() {
    this.header.addClass('gray').addClass('animate');
  },
};


Prime.Document.onReady(function() {
  new FusionAuth.FixedHeader();
});

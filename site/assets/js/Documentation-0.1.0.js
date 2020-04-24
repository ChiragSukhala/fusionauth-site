"use strict";
Prime.Document.onReady(function() {
  /* Use a Font Awesome glyph for bread crumbs */
  Prime.Document.query('span.breadcrumb').each(function(element) {
    var innerHTML = element.domElement.innerHTML;
    // TODO I should just replace all usages of these arrows with one or the other
    element.setHTML(innerHTML
        .replace(/→/g, '<i class="fa fa-chevron-right"></i>')
        .replace(/->/g, '<i class="fa fa-chevron-right"></i>'));
  });
});
Prime.Document.onReady(function() {
  /* Use a Font Awesome glyph for bread crumbs */
  Prime.Document.query('span.breadcrumb').each(function(element) {
    var innerHTML = element.domElement.innerHTML;
    element.setHTML(innerHTML.replaceAll('→', '<i class="fa fa-chevron-right"></i>'))
  });
});
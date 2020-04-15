Prime.Document.onReady(function() {
  // Main nav
  Prime.Document.queryFirst('.menu-open').addEventListener('click', function(event) {
    Prime.Utils.stopEvent(event);
    Prime.Document.queryFirst('.page-header nav').addClass('open');
    Prime.Document.queryFirst('body').addClass('nav-open');
  });
  Prime.Document.queryFirst('.menu-close').addEventListener('click', function(event) {
    Prime.Utils.stopEvent(event);
    Prime.Document.queryFirst('.page-header nav').removeClass('open');
    Prime.Document.queryFirst('body').removeClass('nav-open');
  });

  // Docs nav
  Prime.Document.query('.docs aside a.sub-menu').each(function(e) {
    e.addEventListener('click', function(event) {
      Prime.Utils.stopEvent(event);
      const i = e.queryLast('i');
      const subMenu = e.getNextSibling();
      if (subMenu.isVisible()) {
        i.removeClass('fa-chevron-up').addClass('fa-chevron-down');
        subMenu.hide();
      } else {
        i.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        subMenu.show();
      }
    });
  });

  // Super downdowns
  Prime.Document.query('li.dropdown > a').addEventListener('click', function(event) {
    Prime.Utils.stopEvent(event);

    // Remove all the animations
    const li = new Prime.Document.Element(event.currentTarget).getParent(); // currentTarget is the anchor
    li.getParent().query('.animate').each(function(e) {
      e.removeClass('animate-apply');
    });
    const dropdown = li.queryFirst('.super-dropdown');
    dropdown.removeClass('animate-apply');

    // Open or close the one clicked
    if (dropdown.hasClass('open')) {
      dropdown.removeClass('open');
      return; // Done closing
    } else {
      dropdown.addClass('open');
    }

    setTimeout(function() {
      dropdown.addClass('animate-apply');
      dropdown.query('.animate').each(function(e) {
        e.addClass('animate-apply');
      });
    }, 20);

    // Close everything else
    Prime.Document.query('.super-dropdown').each(function(other) {
      if (other.domElement !== dropdown.domElement) {
        other.removeClass('open');
      }
    });

    // Position the arrow
    const left = li.getOffsetLeft();
    const width = li.getWidth();
    dropdown.domElement.style.setProperty('--super-dropdown-arrow-left', (left + (width / 2) - 12) + 'px');
  });
});

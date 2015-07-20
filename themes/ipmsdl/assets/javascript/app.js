(function() {
  var fnMenu;

  fnMenu = function() {
    return $('.site-navbar nav').meanmenu({
      meanMenuClose: '<i class="fa fa-times"></i>',
      meanExpand: '+',
      meanContract: '-',
      meanMenuContainer: '#responsinve-menu',
      meanScreenWidth: '1024',
      meanRemoveAttrs: true
    });
  };

  $(document).ready(function() {
    $(document).tooltip({
      selector: "[data-toggle=tooltip]"
    });
    return fnMenu();
  });

}).call(this);

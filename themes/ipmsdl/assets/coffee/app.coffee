# Application

fnMenu = ()->
  $('.site-navbar nav').meanmenu
    meanMenuClose: '<i class="fa fa-times"></i>'
    meanExpand: '+'
    meanContract: '-'
    meanMenuContainer: '#responsinve-menu'
    meanScreenWidth: '1024'
    meanRemoveAttrs: true

$(document).ready ()->
  $(document).tooltip({selector: "[data-toggle=tooltip]"})

  # Responsive menu
  fnMenu()
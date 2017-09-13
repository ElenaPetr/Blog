jQuery(document).ready(function($) {
  var content = $('.main');
  var sidebar = $('.right');
  var getContentHeight = content.outerHeight();
  var getSidebarHeight = sidebar.outerHeight();
  
  if (getContentHeight > getSidebarHeight) {
    sidebar.css('min-height', getContentHeight);
    }
  if (getSidebarHeight > getContentHeight) {
    content.css('min-height', getSidebarHeight);
    }
});
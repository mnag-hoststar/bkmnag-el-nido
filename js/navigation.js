// Navigation
	
$(document).ready(function() {

	// Hides other submenus when a main menu point with a submenu is clicked.
    
	$(".extendednavigation > ul > li").click(function() {
		$(this).siblings(".extendednavigation > ul > li.folder").removeClass("folder-open");
	});

});
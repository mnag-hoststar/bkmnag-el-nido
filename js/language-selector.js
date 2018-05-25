// ----------------------------------------
// El Nido: JS > Scripts
// ----------------------------------------

$(document).ready(function() {
	
	// ------------------------------
	// Changes to the header when a language selector is present.
	// ------------------------------
	
	function languageSelector() {
    	if ($('.language-selector')) {
    	    var languageSelectorHeight = $('.language-selector').outerHeight();
    	    
			$('.widget.extendednavigation').css('margin-top', languageSelectorHeight+'px');
    	}
	}
	
	languageSelector();

	// ------------------------------
    // Changes by the editor are saved in the style elmement with the class js-compiled-styles.
	// ------------------------------
	
    $(document).bind("DOMSubtreeModified",function(){
		languageSelector();
		$(window).resize(function() {
			languageSelector();
		});
    });
});
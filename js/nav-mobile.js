(function() {
	var mobileBox = document.getElementById("main-nav");
	var mainLogo = document.getElementById("main-logo");
	var mobileOpen = document.getElementById("nav-open");
	var mobileClose = document.getElementById("nav-close");

	mobileOpen.onclick = function() {
		mobileBox.className = "nav"; // Removes .nav-mobile-off, turning on navigation
		mainLogo.className = "logo fixed-logo"; // Changes logo to fixed position
		mobileOpen.className = "icon-off"; // Hides menu icon
	};

	mobileClose.onclick = function() {
		mobileBox.className = "nav nav-mobile-off";
		mainLogo.className = "logo";
		mobileOpen.className = ""; 
	};

	window.onclick = function(event) {
		if (event.target == mobileBox) {
			mobileBox.className = "nav nav-mobile-off";
			mainLogo.className = "logo";
			mobileOpen.className = ""; 
		}
	};
})();

$('.static_parent').on('touchstart mouseenter', '.link', function (e) {
    $(this).addClass('touch_effect');
});

$('.static_parent').on('mouseleave touchmove click', '.link', function (e) {
    $(this).removeClass('touch_effect');
	
    if (e.type == 'click') {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
});

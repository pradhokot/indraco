$(document).ready(function () {
	let lastScrollTop = 0;

	const setHeights = () => {
		const screenHeight = $(window).height();
		$('.page').css('min-height', screenHeight);
		$('.jumbotron').height(screenHeight);
	};

	const setPadding = () => {
		const headerHeight = $('.page-header').outerHeight() || 0;
		$('.page').css('padding-top', headerHeight);
	};

	const handleScroll = () => {
		const scrollTop = $(window).scrollTop();

		// Toggle 'on-scroll' class based on scroll direction
		$('#navtop').toggleClass('on-scroll', scrollTop > lastScrollTop);

		// Toggle 'scrollTop' class based on scroll position
		$('#navtop').toggleClass('scrollTop', scrollTop > 100);

		lastScrollTop = scrollTop;
	};

	// Responsive screen
	const handleResponsive = () => {
		const windowWidth = $(window).width();
		if (windowWidth <= 991.98) {
			$('#nav-product, #nav-store')
				.removeAttr('href')
				.attr('data-bs-toggle', 'dropdown')
				.attr('data-bs-target', '#dropdownMenu');
		} else {
			$('#nav-product, #nav-store')
				.removeAttr('data-bs-toggle')
				.removeAttr('data-bs-target')
				.attr('href', '#');

			// when cursor hover on dropdown
			$('.dropdown').mouseenter(function () {
				$('#navtop').addClass('dropmenu-show');
			});
			$('#navtop').mouseleave(function () {
				$(this).removeClass('dropmenu-show');
			});

			// change trigger nav-tabs from click to hover
			document.querySelectorAll('.nav-pills > .nav-link > span').forEach(function (everyitem) {
				var tabTrigger = new bootstrap.Tab(everyitem)
				everyitem.addEventListener('mouseenter', function () {
					tabTrigger.show();
				});
			});
		}
	};

	// Initialize on load
	setHeights();
	setPadding();
	handleScroll();
	handleResponsive();

	// Update on resize and scroll
	$(window).on('resize', () => {
		setHeights();
		setPadding();
		handleScroll();
		handleResponsive();
	});

	$(window).on('scroll', handleScroll);
});
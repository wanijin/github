(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Hack: Enable IE workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');

	// Scrolly.
		$('.scrolly')
			.scrolly({
				offset: 100
			});


	// by
// @AbubakerSaeed96
// abubakersaeed.netlify.app

// And the journey to CSS only components continues...

/*
  In this one I'm using CSS selectors and little hack/tricks to archive proper sliding effect between slides, the old one would be something like this when you change the slide:
  the 1st one goes backward(left) and the 2nd one comes forward(center) and if you change it to 3rd...
  the 2nd one goes backward(left) and the 3rd one comes forward(center) and so on...
*/

/*
  It makes sliding weird and most of the times we've to use JavaScript to archive proper sliding, so I start experimenting and is able to archive proper sliding effect with CSS only :)
*/

/*
  Images are from Unsplash 
*/

// Thanks for viewing
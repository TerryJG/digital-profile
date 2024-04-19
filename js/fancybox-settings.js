$(document).ready(function () {
	Fancybox.bind('[data-fancybox="video-gallery"]', {

		// Command list for Images
		Images: {
			protected: true
		},

		// Command list for Thumbnail
		Thumbs: {
			type: 'classic',
			showOnStart: true, // thumbnail bar load immediately after fancybox launches
		},

		// Command list for Toolbar
		Toolbar: {
			display: {
				left: [],
				middle: [
					/* All available option buttons. Can add custom buttons
					  e.g. Twitter share button; refer to documentation. */

					// "infobar"
					// "iterateZoom",
					// "zoomIn",
					// "zoomOut",
					// "toggle1to1",
					// "rotateCCW",
					// "rotateCW",
					// "flipX",
					// "flipY",
					// "slideshow", 
					// "thumbs", 
					// "close",
					// "fullscreen",
				],
				right: ["close"],
			},
		},
	});
});

$(document).ready(function () {
	Fancybox.bind('[data-fancybox="image-gallery"]', {

		// Command list for Images
		Images: { protected: true },

		// Command list for Thumbnail
		Thumbs: {
			type: 'modern',
			showOnStart: true,
		},

		// Command list for Toolbar
		Toolbar: {
			display: {
				left: [],
				middle: [
					/* All available option buttons. Can add custom buttons
					  e.g. Twitter share button; refer to documentation. */

					// "infobar"
					"iterateZoom",
					// "zoomIn",
					// "zoomOut",
					// "toggle1to1",
					// "rotateCCW",
					// "rotateCW",
					// "flipX",
					// "flipY",
					// "slideshow", 
					"thumbs",
					// "close",
					"fullscreen",
				],
				right: ["close"],
			},
		},
	});
});

$(document).ready(function () {
	Fancybox.bind('[data-fancybox="web-gallery"]', {
		compact: true,

		// Command list for Thumbnail
		Thumbs: {
			type: 'classic',
			showOnStart: false,
		},

		// Command list for Toolbar
		Toolbar: {
			display: {
				left: [],
				middle: [
					/* All available option buttons. Can add custom buttons
					  e.g. Twitter share button; refer to documentation. */

					// "infobar"
					// "iterateZoom",
					// "zoomIn",
					// "zoomOut",
					// "toggle1to1",
					// "rotateCCW",
					// "rotateCW",
					// "flipX",
					// "flipY",
					// "slideshow", 
					// "thumbs", 
					// "close",
					// "fullscreen",
				],
				right: ["close"],
			},
		},
	});
});
;(function ( w, doc, undefined ) {
	'use strict';

	/**
	 * Local object for method references
	 * and define script meta-data
	 */
	var A11YswitchCheck = {};
	w.A11YswitchCheck   = A11YswitchCheck;

	A11YswitchCheck.NS      = 'A11YswitchCheck';
	A11YswitchCheck.AUTHOR  = 'Scott O\'Hara';
	A11YswitchCheck.VERION  = '0.1.0';
	A11YswitchCheck.LICENSE = 'https://github.com/scottaohara/a11y_styled_form_controls/blob/master/LICENSE';

	var widget = doc.querySelectorAll('[type="checkbox"][data-switch]');

	A11YswitchCheck.init = function () {
		var enterKey = 13;
		var self;
		var keyCode;
		var i;

		for ( i = 0; i < widget.length; i++ ) {
			self = widget[i];

			self.setAttribute('role', 'switch');

			self.addEventListener('keydown', function ( e ) {
				keyCode = e.keyCode || e.which;

				switch ( keyCode ) {
					case enterKey:
						e.preventDefault();
						e.target.click();
					break;
				}
			});
		}
	}; // A11YswitchCheck.init()

	// go go JavaScript
	A11YswitchCheck.init();

})( window, document );

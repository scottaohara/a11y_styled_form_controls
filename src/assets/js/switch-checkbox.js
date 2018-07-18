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
		var self;
		var i;

		for ( i = 0; i < widget.length; i++ ) {
			self = widget[i];

			self.setAttribute('role', 'switch');
			self.setAttribute('aria-checked', 'false');

			self.addEventListener('click', A11YswitchCheck.toggleState, false);
			self.addEventListener('keypress', A11YswitchCheck.keyEvents, false);
		}
	}; // A11YswitchCheck.init()

	A11YswitchCheck.keyEvents = function ( e ) {
		var enterKey = 13;
		var keyCode = e.keyCode || e.which;

		switch ( keyCode ) {
			case enterKey:
			case 32:
				e.preventDefault();
				e.target.click();
				e.target.focus(); // fix for ie?
			break;
		}
	}

	A11YswitchCheck.toggleState = function ( e ) {
    this.setAttribute('aria-checked', this.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
	};

	// go go JavaScript
	A11YswitchCheck.init();

})( window, document );

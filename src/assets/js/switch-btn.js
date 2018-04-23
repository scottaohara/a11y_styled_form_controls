;(function ( w, doc, undefined ) {
	'use strict';

	/**
	 * Local object for method references
	 * and define script meta-data
	 */
	var A11YswButtons = {};
	w.A11YswButtons   = A11YswButtons;

	A11YswButtons.NS      = 'A11YswButtons';
	A11YswButtons.AUTHOR  = 'Scott O\'Hara';
	A11YswButtons.VERION  = '0.1.0';
	A11YswButtons.LICENSE = 'https://github.com/scottaohara/a11y_styled_form_controls/blob/master/LICENSE';

	var widget = doc.querySelectorAll('[data-btn-switch]');

	/**
	 * Run function to progressively enhance a checkbox pattern
	 * into an ARIA Button to act as a Switch Toggle.
	 */
	A11YswButtons.init = function () {
		var self;
		var btn;
		var i;

		for ( i = 0; i < widget.length; i++ ) {
			self = widget[i];
			var getLabel = self.querySelector('label').innerHTML;
			var getID = self.querySelector('[type="checkbox"]').id;

			self.innerHTML = '<button type="button" id="' + getID + '" class="btn-switch" aria-pressed="false"><span class="btn-switch__label">' + getLabel + '</span><span class="btn-switch__toggle"></span></button>';
		}

		/**
		 * After all buttons have been setup, search
		 * DOM for buttons to attach toggle function to.
		 */
		btn = doc.querySelectorAll('.btn-switch');

		/**
		 * After all switches have been created, setup
		 * eventListenter for on/off functionality.
		 */
		for ( i = 0; i < btn.length; i++ ) {
			btn[i].addEventListener('click', function ( e ) {
				this.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
			});
		}
	}; // A11YswButtons.init()

	// go go JavaScript
	A11YswButtons.init();

})( window, document );

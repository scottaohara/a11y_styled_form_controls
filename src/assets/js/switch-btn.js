;(function ( w, doc, undefined ) {
	'use strict';

	var peSwitch = document.querySelectorAll('[data-btn-switch]');
	var i;

	/**
	 * Run function to progressively enhance a checkbox pattern
	 * into an ARIA Button to act as a Switch Toggle.
	 */
	for ( i = 0; i < peSwitch.length; i++ ) {
		var getLabel = peSwitch[i].querySelector('label').innerHTML;
		var getID = peSwitch[i].querySelector('[type="checkbox"]').id;
		peSwitch[i].innerHTML = '<button type="button" id="' + getID + '" class="btn-switch" aria-pressed="false"><span class="btn-switch__label">' + getLabel + '</span><span class="btn-switch__toggle"></span></button>';
	}

	/**
	 * After all buttons have been setup, search
	 * DOM for buttons to attach toggle function to.
	 */
	var btn = document.querySelectorAll('.btn-switch');

	/**
	 * After all switches have been setup, setup
	 * eventListenter for on/off functionality.
	 */
	for ( i = 0; i < btn.length; i++ ) {
		btn[i].addEventListener('click', function ( e ) {
			this.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
		});
	}

})( window, document );

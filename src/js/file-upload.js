;(function ( w, doc, undefined ) {
	'use strict';

	/**
	 * Local object for method references
	 * and define script meta-data
	 */
	var A11YfileUp = {};
	w.A11YfileUp   = A11YfileUp;

	A11YfileUp.NS      = 'A11YfileUp';
	A11YfileUp.AUTHOR  = 'Scott O\'Hara';
	A11YfileUp.VERION  = '0.1.0';
	A11YfileUp.LICENSE = '';

	var widget = doc.querySelectorAll('[data-file-input]');

	/**
	 * Create Instances
	 */
	A11YfileUp.init = function () {
		var i;

		for ( i = 0; i < widget.length; i++ ) {
			var label = widget[i].querySelector('.file-up__label');
			var input = widget[i].querySelector('[type="file"]');
			var output = doc.createElement('span');
			output.classList.add('file-up__output');
			output.setAttribute('aria-hidden', 'true');

			label.appendChild(output);

			if ( widget[i].querySelector('[disabled]') ) {
				widget[i].classList.add('is-disabled');
			}

			input.addEventListener('change', function () {

				if ( this.hasAttribute('multiple') && this.files.length > 1 ) {
					this.parentNode.querySelector('.file-up__output').innerHTML = this.files.length + ' files selected.';
				}
				else {
					this.parentNode.querySelector('.file-up__output').innerHTML = this.value.replace(/(\w+:?[\\\/])/g, '');
				}
			});
		}
	}; // A11YfileUp.create()


	// go go JavaScript
	A11YfileUp.init();

})( window, document );



/**
 * Focus within in all browsers.
 * source: https://gist.github.com/aFarkas/a7e0d85450f323d5e164
 */
(function ( w, doc ) {
	'use strict';

		var slice = [].slice;
		var removeClass = function (elem) {
			elem.classList.remove('focus-within');
		};

		var update = ( function () {
			var running
			var last;

			var action = function () {
				var element = doc.activeElement;

				running = false;

				if ( last !== element ){
					last = element;
					slice.call(doc.getElementsByClassName('focus-within')).forEach(removeClass);

					while ( element && element.classList ) {
						element.classList.add('focus-within');
						element = element.parentNode;
					}
				}
			};
			return function () {
				if (!running) {
					requestAnimationFrame(action);
					running = true;
				}
			};
		})();

		doc.addEventListener('focus', update, true);
		doc.addEventListener('blur', update, true);
		update();

})( window, document );

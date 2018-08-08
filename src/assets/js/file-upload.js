(function ( w, doc, undefined ) {
	'use strict';
	var A11yFileUpload;

	A11yFileUpload = function ( ) {
		/**
		 * Author: Scott O'Hara
		 * Version: 0.1.0
		 * License: https://github.com/scottaohara/a11y_styled_form_controls/blob/master/LICENSE
		 */
		var el;
		var isThisChrome;

		/**
		 * Initialize the instance, run all setup functions
		 * and attach the necessary events.
		 */
		this.init = function ( elm ) {
			isThisChrome = checkChrome( isThisChrome );
			el = elm;

			var input = el.querySelector('[type="file"]');

			setupPattern( el, isThisChrome, input );
			checkDisabled( el );
			attachEvents( el, input );
		};

		/**
		 * Google Chrome (July 2018) does not announce the name or # of
		 * uploaded files to a file upload input. To provide a better
		 * experience, check to see if the browser is Chrome, and
		 * if so DO NOT add the aria-hidden="true" to the styled
		 * file name output (which is necessary for other browsers
		 * to not have duplicate file name announcements)
		 *
		 * For more info on this function, see:
		 * https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome/13348618#13348618
		 */
		var checkChrome = function ( isThisChrome ) {
			var isChromium = w.chrome;
			var winNav = w.navigator;
			var vendorName = winNav.vendor;
			var isOpera = typeof w.opr !== "undefined";
			var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
			var isIOSChrome = winNav.userAgent.match("CriOS");

			if ( isIOSChrome ) {
			   // is Google Chrome on IOS
			} else if(
			  isChromium !== null &&
			  typeof isChromium !== "undefined" &&
			  vendorName === "Google Inc." &&
			  isOpera === false &&
			  isIEedge === false
			) {
			   return true;
			} else {
			   return false;
			}
		}

		/**
		 * Setup the instance with the necessary
		 * attributes, classes, and output area.
		 */
		var setupPattern = function ( el, isThisChrome, input ) {
			var label = el.querySelector('label');
			label.classList.add('file-up__label');

			var output = doc.createElement('span');
			output.classList.add('file-up__output');
			output.setAttribute('aria-hidden', 'true');

			if ( isThisChrome ) {
				var getID = input.id || 'o_' + Math.floor(Math.random() * 999);
				output.id = getID + '_output';
				input.setAttribute('aria-describedby', output.id);
			}

			if ( el.getAttribute('data-file-input') === 'compact' ) {
				el.classList.add('file-up--compact');
			}
			else {
				output.innerHTML = 'no file selected...';
			}

			el.appendChild(output);
		};

		/**
		 * Disable check
		 * If an input is disabled, this pattern won't
		 * dim everything. Set an is-disabled class to
		 * make sure it visually looks disabled.
		 */
		var checkDisabled = function ( el ) {
			if ( el.querySelector('[disabled]') ) {
				el.classList.add('is-disabled');
			}
		};

		/**
		 * Events for toggle buttons
		 */
		var attachEvents = function ( el, input, output ) {
			var output = el.querySelector('.file-up__output');

			input.addEventListener('change', function () {
				el.classList.remove('file-up--compact');

				if ( this.hasAttribute('multiple') && this.files.length > 1 ) {
					output.innerHTML = this.files.length + ' files selected.';
				}
				else {
					output.innerHTML = this.value.replace(/(\w+:?[\\\/])/g, '');
				}
			});

			/*
				the output is outside of the label to not mess with the accessible name
				in VoiceOver. But the output is typically mouse clickable to open the
				file selection dialog.
				No need for additional semantics, as the file upload control itself
				should receive focus and is actionable.
			*/
			output.addEventListener('click', function () {
				input.click();
			});
		};

		return this;
	}; // A11yFileUpload()

	w.A11yFileUpload = A11yFileUpload;
})( window, document );

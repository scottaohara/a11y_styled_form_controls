(function ( w, doc, undefined ) {
	'use strict';
	var A11yToggleButton;

	A11yToggleButton = function ( ) {
		/**
		 * Author: Scott O'Hara
		 * Version: 0.1.0
		 * License: https://github.com/scottaohara/a11y_styled_form_controls/blob/master/LICENSE
		 */
		var el;

		/**
		 * Initialize the instance, run all setup functions
		 * and attach the necessary events.
		 */
		this.init = function ( elm ) {
			el = elm;
			checkState ( el );
			setPressed ( el );
			setButton ( el );
			setClasses ( el );
			setSwitchUI ( el );
			attachEvents ( el );
		};

		/**
		 * Check default state of element:
		 * A toggle button is not particularly useful without JavaScript,
		 * so ideally such a button would be set to hidden or disabled, if JS wasn't
		 * around to make it function.
		 */
		var checkState = function ( el ) {
			// Unless a toggle button is specifically meant to be disabled,
			// when JS is available, remove the disabled attribute so these
			// buttons can be used.
			if ( el.getAttribute('data-toggle-btn') !== "disabled" ) {
				el.removeAttribute('disabled');
			}

			// reveal any hidden instances
			el.removeAttribute('hidden');
		};

		/**
		 * A toggle button won't register as a toggle button if an aria-pressed
		 * isn't present prior to user interaction.
		 *
		 * e.g. a button that is pressed, and then acquires an aria-pressed='true'
		 * attribute will NOT always be announced as a toggle button.
		 *
		 * Check for the presence of aria-pressed and if not there, run additional
		 * checks to determine if this button should be set to true or false by default.
		 */
		var setPressed = function ( el ) {
			if ( !el.hasAttribute('aria-pressed') ) {
				el.setAttribute('aria-pressed', el.hasAttribute('data-toggle-btn-pressed'))
			}
		}

		/**
		 * Enhance elements to buttons
		 * If the element is not a button, then add a role button.
		 * If it is not an a[href], or already have a tabindex, then
		 * provide a tabindex=0 so it can be keyboard focusable.
		 */
		var setButton = function ( el ) {
			if ( el.tagName !== 'BUTTON' ) {
				el.setAttribute('role', 'button');

				if ( !el.hasAttribute('href') && !el.hasAttribute('disabled') ) {
					el.tabIndex = 0;
				}
			}
		}

		/**
		 * Create Switch UI
		 * If a button is missing an inner element to
		 * wrap the accessible name and serve as the
		 * basis for the switch UI, then create a span
		 * and append it to the button element.
		 */
		var setSwitchUI = function ( el ) {
			var switchUI = el.querySelector('[data-toggle-btn-ui]') || el.querySelector('.toggle-switch__ui');

			if ( !switchUI ) {
				var newUI = doc.createElement('span');
				el.appendChild(newUI);
				switchUI = el.querySelector('span');
			}

			if ( !switchUI.classList.contains('toggle-switch__ui') ) {
				switchUI.classList.add('toggle-switch__ui');
			}

			// after confirming a switchUI element exists:
			switchUI.setAttribute('aria-hidden', 'true');
		};

		/**
		 * Setup the classes for the toggle buttons
		 */
		var setClasses = function ( el ) {
			// if the default class for this component doesn't exist, add it
			if ( !el.classList.contains('toggle-switch') ) {
				el.classList.add('toggle-switch');
			}

			// if a switch ui should display the text 'on' and 'off'
			if ( el.hasAttribute('data-switch-btn-labels') || el.classList.contains('toggle-switch--labels') ) {
				el.classList.add('toggle-switch--labels');
			};
		}

		/**
		 * Toggle the Button's state (aria-pressed=t/f)
		 */
		var toggleState = function ( e ) {
			this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
		};

		/**
		 * Attach keyEvents to toggle buttons
		 */
		var keyEvents = function ( e ) {
			var keyCode = e.keyCode || e.which;

			/**
			 * If the element is not a real button, then
			 * map the appropriate key commands.  If it is,
			 * well buttons' already know how to do this then :)
			 */
			if ( e.target.tagName !== 'BUTTON' ) {
				switch ( keyCode ) {
					case 32:
					case 13:
						e.stopPropagation();
						e.preventDefault();
						e.target.click();
						break;

					default:
						break;
				}
			}
		};

		/**
		 * Events for toggle buttons
		 */
		var attachEvents = function ( el ) {
			el.addEventListener('click', toggleState, false);
			el.addEventListener('keypress', keyEvents, false);
		};

		return this;
	}; // A11yToggleButton()

	w.A11yToggleButton = A11yToggleButton;
})( window, document );

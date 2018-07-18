;(function ( w, doc, undefined ) {
	'use strict';

	/**
	 * Local object for method references
	 * and define script meta-data
	 */
	var A11yToggleButton = {};
	w.A11yToggleButton   = A11yToggleButton;

	A11yToggleButton.NS      = 'A11yToggleButton';
	A11yToggleButton.AUTHOR  = 'Scott O\'Hara';
	A11yToggleButton.VERION  = '0.1.0';
	A11yToggleButton.LICENSE = 'https://github.com/scottaohara/a11y_styled_form_controls/blob/master/LICENSE';

	var widget = doc.querySelectorAll('[data-toggle-btn]');

	A11yToggleButton.setup = function () {
		var self;
		var switchUI;
		var i;

		for ( i = 0; i < widget.length; i++ ) {
			self = widget[i];
			switchUI = self.querySelector('span');

			/**
			 * Check instances of the widget.
			 * If the widget is not a button element, then add a role button.
			 * If it is not an a[href], or already have a tabindex, then
			 * provide a tabindex=0 so it can be keyboard focusable.
			 */
			if ( self.tagName !== 'BUTTON' ) {
				self.setAttribute('role', 'button');

				if ( !self.hasAttribute('href') && !self.hasAttribute('tabindex') ) {
					self.tabIndex = 0;
				}
			}

			/**
			 * If a button is missing an inner span to
			 * wrap the accessible name and serve as the
			 * basis for the switch UI, then take the contents
			 * of the button and inject it into a newly created
			 * span element.
			 */
			if ( !switchUI ) {
				var newUI = doc.createElement('span');
				self.append(newUI);
				switchUI = self.querySelector('span');
			}
			switchUI.setAttribute('aria-hidden', 'true');

			// if the default class for this component doesn't exist, add it
			if ( !self.classList.contains('toggle-switch') ) {
				self.classList.add('toggle-switch');
			}

			// if a switch ui should display the text 'on' and 'off'
			if ( self.hasAttribute('data-toggle-btn-labels') ) {
				self.classList.add('toggle-switch--labels');
			}

			if ( !switchUI.classList.contains('toggle-switch__ui') ) {
				switchUI.classList.add('toggle-switch__ui');
			}

			/**
			 * A toggle button is not particularly useful without JavaScript,
			 * so ideally such a button would be set to disabled, if JS wasn't
			 * around to make it function.
			 *
			 * Unless a toggle button is specifically meant to be disabled,
			 * when JS is available, remove the disabled attribute so these
			 * buttons can be used.
			 */
			if ( self.disabled && self.getAttribute('data-toggle-btn') !== "disabled" ) {
				self.removeAttribute('disabled');
			}

			if ( !self.hasAttribute('aria-pressed') ) {

				if ( self.hasAttribute('data-toggle-btn-pressed') ) {
					self.setAttribute('aria-pressed', 'true');
				}
				else {
					self.setAttribute('aria-pressed', 'false');
				}
			}

			self.addEventListener('click', A11yToggleButton.toggleState, false);
			self.addEventListener('keypress', A11yToggleButton.keyEvents, false);
		}
	}; // A11yToggleButton.setup


	A11yToggleButton.toggleState = function ( e ) {
    this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
	}; // A11yToggleButton.toggleState


	A11yToggleButton.keyEvents = function ( e ) {
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

	}; // A11yToggleButton.keyEvents

	/**
   * Initialize functions.
   * If expanding this script, place any other
   * initialize functions within here.
   */
  A11yToggleButton.init = function () {
    A11yToggleButton.setup();
  };

	// go go JavaScript
	A11yToggleButton.init();

})( window, document );

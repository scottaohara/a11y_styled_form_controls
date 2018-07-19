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

	A11yToggleButton.init = function ( customSelector, buttonLabel ) {
		var selectors = '[data-toggle-btn], ' + customSelector;
		var self = doc.querySelectorAll(selectors);
		var switchUI;
	  var i = self.length;

	  for ( i = 0; i < self.length; i++ ) {
	  	switchUI = self[i].querySelector('[data-toggle-btn-ui]') || self[i].querySelector('.toggle-switch__ui');
	    setup(self[i], switchUI, buttonLabel);
	  }
	} // A11yToggleButton.init


	var setup = function ( self, switchUI ) {
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
		 * If a button is missing an inner element to
		 * wrap the accessible name and serve as the
		 * basis for the switch UI, then create a span
		 * and append it to the button element.
		 */
		if ( !switchUI ) {
			var newUI = doc.createElement('span');
			self.appendChild(newUI);
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

		/**
		 * If an element is set to be hidden, if JS is not available,
		 * remove the hidden attribute
		 */
		if ( self.hidden ) {
			self.removeAttribute('hidden');
		}

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
		if ( !self.hasAttribute('aria-pressed') ) {
			self.setAttribute('aria-pressed', self.hasAttribute('data-toggle-btn-pressed'))
		}

		self.removeAttribute('data-toggle-btn')

		/**
		 * Event listeners for toggle buttons
		 */
		self.addEventListener('click', toggleState, false);
		self.addEventListener('keypress', keyEvents, false);
	}; // setup


	var toggleState = function ( e ) {
    this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
	}; // toggleState


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
	}; // keyEvents


	// Go go JavaScript
	A11yToggleButton.init();

})( window, document );

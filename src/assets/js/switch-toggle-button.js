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

	A11yToggleButton.create = function () {
		var self;
		var labelUI;
		var i;

		for ( i = 0; i < widget.length; i++ ) {
			self = widget[i];
			labelUI = self.querySelector('span');

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

			if ( !self.classList.contains('toggle-switch') ) {
				self.classList.add('toggle-switch');
			}

			if ( !labelUI ) {
				var getLabel = self.innerHTML;
				self.innerHTML = '';
				var newLabel = doc.createElement('span');
				newLabel.innerHTML = getLabel;
				self.append(newLabel);
				labelUI = self.querySelector('span');
			}

			labelUI.classList.add('toggle-switch__ui');

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

			self.addEventListener('click', A11yToggleButton.toggleState, false);
			self.addEventListener('keypress', A11yToggleButton.keyEvents, false);
		}
	}; // A11yToggleButton.create


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
    A11yToggleButton.create();
  };

	// go go JavaScript
	A11yToggleButton.init();

})( window, document );

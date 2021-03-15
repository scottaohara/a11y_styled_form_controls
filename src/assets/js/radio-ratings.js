(function ( w, doc, undefined ) {
	'use strict';
	var radios = document.querySelectorAll('input[type="radio"]');
	var i;
	var hideClass = 'hide-label';
	var keys = {
		TAB:    9, // didn't use this after all
		ESC:   27
	};
	var hidelabel = function ( el ) {
		el.classList.add(hideClass);
	};
	var returnlabel = function ( el ) {
		el.classList.remove(hideClass);
	};

	for ( i = 0; i <= radios.length; i++ ) {
		radios[i].addEventListener('keyup', function (e) {
			var keyCode = e.keyCode || e.which;

			switch(keyCode) {
				case keys.ESC:
					hidelabel(this);
					break;
			}
		});
		radios[i].addEventListener('blur', function (e) {
			if ( this.classList.contains(hideClass) ) {
				returnlabel(this);
			}
		});
	}
})( window, document );

( function ( mw, $, uw, OO ) {

	// Save old Thanks view
	uw.ui.oldThanks = uw.ui.Thanks;

	/**
	 * Overrides default Thanks view
	 *
	 * @class uw.ui.NewThanks
	 * @extends uw.ui.Thanks
	 * @constructor
	 * @param {Object} config
	 */
	uw.ui.NewThanks = function UWUINewThanks( config ) {

		uw.ui.oldThanks.call(
			this,
			config
		);

		this.testButton = new OO.ui.ButtonWidget( {
			label: mw.config.get( 'wgUploadWizardExtraButtonTitle' ),
			href: mw.config.get( 'wgUploadWizardExtraButtonHref' )
		} );

		this.buttonGroup.insertItem( this.testButton, 0 );
		this.buttonGroup.moveItem( this.testButton, 0 );

	};

	// Inherits methods from default Thanks view
	OO.inheritClass( uw.ui.NewThanks, uw.ui.oldThanks );

	// Replaces default Thanks view with the new one
	uw.ui.Thanks = uw.ui.NewThanks;

}( mediaWiki, jQuery, mediaWiki.uploadWizard, OO ) );
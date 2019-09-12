/**
 * This overrides default uw.ui.Thanks class from UploadWizard.
 * It should be upgrade-safe because the class calls constructor of the original class
 * and after that adds a bit of custom code.
 */

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

		var campaign = mw.Uri().query.campaign || false,
			whitelistedCampaigns = mw.config.get( 'wgUploadWizardExtraButtonCampaigns' ),
			mainPage, subPage;

		uw.ui.oldThanks.call(
			this,
			config
		);

		if ( campaign && whitelistedCampaigns.length ) {
			if ( whitelistedCampaigns.indexOf( campaign ) !== -1 ) {

				mainPage = mw.config.get( 'UploadWizardConfig' ).fields[ 0 ].initialValue;
				subPage = mainPage.substr( 0, mainPage.indexOf( '/' ) );
				this.testButton = new OO.ui.ButtonWidget( {
					label: mw.config.get( 'wgUploadWizardExtraButtonTitle' ),
					href: mw.config.get( 'wgServer' ) + mw.config.get( 'wgArticlePath' ).replace( '$1', encodeURI( subPage || mainPage ) )
				} );

				this.buttonGroup.insertItem( this.testButton, 0 );
				this.buttonGroup.moveItem( this.testButton, 0 );

			}
		}

	};

	// Inherits methods from default Thanks view
	OO.inheritClass( uw.ui.NewThanks, uw.ui.oldThanks );

	// Replaces default Thanks view with the new one
	uw.ui.Thanks = uw.ui.NewThanks;

}( mediaWiki, jQuery, mediaWiki.uploadWizard, OO ) );

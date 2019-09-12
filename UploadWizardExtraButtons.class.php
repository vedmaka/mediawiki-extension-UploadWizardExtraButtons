<?php

/**
 * Class for UploadWizardExtraButtons extension
 *
 * @file
 * @ingroup Extensions
 */
class UploadWizardExtraButtons
{

	/**
	 * @param OutputPage $out
	 * @param Skin       $skin
	 *
	 * @throws MWException
	 */
	public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin ) {
		if( $out->getTitle()->equals( SpecialPage::getTitleFor('UploadWizard') ) ) {
			$out->addModules('ext.uploadwizardextrabuttons');
		}
	}

	/**
	 * @param array $vars
	 */
	public static function onResourceLoaderGetConfigVars( &$vars ) {
		global $wgUploadWizardExtraButtonTitle, $wgUploadWizardExtraButtonHref, $wgUploadWizardExtraButtonCampaigns;
		if( $wgUploadWizardExtraButtonHref === "" ) {
			$wgUploadWizardExtraButtonHref = Title::newMainPage()->getFullURL();
		}
		$vars['wgUploadWizardExtraButtonTitle'] = 'Return to the meeting page';#wfMessage($wgUploadWizardExtraButtonTitle)->text();
		$vars['wgUploadWizardExtraButtonHref'] = $wgUploadWizardExtraButtonHref;
        $vars['wgUploadWizardExtraButtonCampaigns'] = $wgUploadWizardExtraButtonCampaigns;
	}

}

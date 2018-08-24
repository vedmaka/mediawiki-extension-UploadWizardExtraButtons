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
		global $wgUploadWizardExtraButtonTitle, $wgUploadWizardExtraButtonHref;
		if( $wgUploadWizardExtraButtonHref === "" ) {
			$wgUploadWizardExtraButtonHref = Title::newMainPage()->getFullURL();
		}
		$vars['wgUploadWizardExtraButtonTitle'] = $wgUploadWizardExtraButtonTitle;
		$vars['wgUploadWizardExtraButtonHref'] = $wgUploadWizardExtraButtonHref;
	}

}

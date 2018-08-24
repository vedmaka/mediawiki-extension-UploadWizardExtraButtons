Adds a single extra button to UploadWizard successful upload screen.

# Requirements

* Mediawiki 1.31+
* UploadWizard (REL1_31)

# Installation

* Clone the repository contents into `/extesions/UploadWizardExtraButtons` folder
* Add `wfLoadExtension('UploadWizardExtraButtons'');` to the bottom of your `LocalSettings.php` file

# Configuration

* `$wgUploadWizardExtraButtonTitle` defines a message key to be used for button title (by default it's `uploadwizardextrabuttons-button-title`)
* `$wgUploadWizardExtraButtonHref` defines button link URL, by default it will use Main Page url 

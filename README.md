Adds a single extra button to UploadWizard successful upload screen.

![image](https://user-images.githubusercontent.com/592009/44592621-cd558880-a7c9-11e8-8bc7-0937a4b5fc12.png)

# Requirements

* Mediawiki 1.31+
* UploadWizard (REL1_31)

# Installation

* Clone the repository contents into `/extesions/UploadWizardExtraButtons` folder
* Add `wfLoadExtension('UploadWizardExtraButtons');` to the bottom of your `LocalSettings.php` file

# Configuration

* `uploadwizardextrabuttons-button-title` i18n key defines a text to be used for button title (by default it's `Test`), you can alter it via `Special:AllMessages`
* `$wgUploadWizardExtraButtonHref` defines button link URL, by default it will use Main Page url 

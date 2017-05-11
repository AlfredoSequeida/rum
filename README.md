![rum](https://cdn.rawgit.com/AlfredoSequeida/rum/98c9ab8d/assets/images/banner.svg)

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/AlfredoSequeida/rum/issues)

Rum is a cross platform integration client focused on making your multi screen ecosystem simple by bringing your devices together. 

### Please note, rum is not yet ready for usage and is currently under development.

### Additions to the to-do list are welcomed.

## Run

Install npm
In the project's root run these commands in a terminal / command line 

Install dependencies
```
npm i 
```

Run
```
npm start
```

## To-Do List
* ~~Implement angular route menu~~
* Implement html for different sections
    * Files
    * SMS
    * Phone
* Implement solution to avoid mixing of devices on the same network
	* Create login screen
        * ~~html~~
        * js
* Implement device selection
	* Create device selection screen
	* Selection should include:
		* Device host name
		* Device OS type
* Implement application update feature on launch
	* Update feature should:
		* Display update log
		* Prompt user to update or cancel
		* Compare package.json file version
		* Pull latest version from github repo (probably a release version to integrate well with OS installation)
		* Compile application if necessary and automatically install 
* Implement phone server side solution
	* Android / IOS (Possible jailbreak required for one or more of the features bellow)
		* SMS Can be done through jailbreak or with an iCloud solution for IOS)
		* Files
		* Phone
		* Contacts
		* Add native client side OS desktop notifications for phone side notifications
	* Experimental Features
		* Third party application interaction


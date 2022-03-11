/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["axelera/loadjsonfile/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});

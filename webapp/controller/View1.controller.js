sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("axelera.loadjsonfile.controller.View1", {
            onInit: function () {
                let oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData("model/ProductsModel.json"); // ./model/ProductsModel.json
                this.getView().setModel(oModel, "products");
                console.clear();
                setTimeout(() => {
                    console.log(oModel.getData());
                }, 3000);
            }
        });
    });

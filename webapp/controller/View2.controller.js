sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("emc.hr.payroll.View2", {
        onInit:function () {
            var model = this.getOwnerComponent().getModel();
            console.log(model);
              
        },
        onBack:function () {
            var oAppCon= this.getView().getParent();
            oAppCon.to("idView1") 
        }
    } );
});
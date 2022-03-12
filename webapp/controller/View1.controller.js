sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("emc.hr.payroll.View1", {
        onInit:function () {
            
        },
        onNext:function () {
            // var
            var oAppCon= this.getView().getParent();
            oAppCon.to("idView2",{
                "hi":2
            })
        } 
    
    });
});
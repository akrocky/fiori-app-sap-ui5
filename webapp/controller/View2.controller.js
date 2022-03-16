sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("emc.hr.payroll.controller.View2", {
        onInit:function () {
           this.oRouter = this.getOwnerComponent().getRouter();
           // we forcefully pas this ponter to herculis 
           this.oRouter.getRoute("detail").attachPatternMatched(this.herculis,this);
              
        },
        herculis:function (oEvent) {
            
            var fruitId=oEvent.getParameter("arguments").fruitId;
            var sPath="/fruits/" + fruitId;   
            this.getView().bindElement(sPath); // binding element
        }, 
        onBack:function () {
            var oAppCon= this.getView().getParent();
            oAppCon.to("idView1") 
        }
    } );
});
sap.ui.define([
	"emc/hr/payroll/controller/BaseController",
    "sap/ui/core/Fragment"
], function(Controller,
	Fragment) {
	"use strict";

	return Controller.extend("emc.hr.payroll.controller.View2", {
        onInit:function () {
           this.oRouter = this.getOwnerComponent().getRouter();
           // we forcefully pas this ponter to herculis 
           this.oRouter.getRoute("detail").attachPatternMatched(this.herculis,this);
              
        },
        onLinkPress:function (oEvent) {
            var sText= oEvent.getSource().getText();
            sText='https://google.com?q='+sText;
            window.open(sText)
        }, 
        onF4Help:function () {
            // alert("this functionlity is under construction, roger copy that ")
         
            Fragment.load(
                {
                 name:"emc.hr.payroll.fragments.popup",
                 type:"XML",
                 id:"city",
                 Controller:this
                }  ).then(function (oPopup) {
                    oPopup.setTitle("Select City")
                    oPopup.open();
                })
 
        }, 
        onFilter:function () {
            alert("this functionlity is under construction, roger copy that ")
            Fragment.load(
                {
                 name:"emc.hr.payroll.fragments.popup",
                 type:"XML",
                 id:"supplier",
                 Controller:this
                }  ).then(function (oPopup) {
                    oPopup.setTitle("Select Supplier")
                    oPopup.open();
                })
        },
        herculis:function (oEvent) {
            
            // var fruitId=oEvent.getParameter("arguments").fruitId;
            // var sPath="/fruits/" + fruitId;  
            var sPath=this.extractPath(oEvent)   
            this.getView().bindElement(sPath); // binding element
        }, 
        onBack:function () {
            var oAppCon= this.getView().getParent();
            oAppCon.to("idView1") 
        }
    } );
});
sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(
	Controller,Filter,FilterOperator
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
        } ,
        onSearch:function (oEvent) {
            // what is the user type in search field
         var sSearch=   oEvent.getParameter("query")
         if (sSearch===""|| sSearch=== undefined) {
             sSearch=oEvent.getParameter("newValue");
         }
            ////  filter object
             var oFilter= new Filter("name",FilterOperator.Contains,sSearch)
             var oFilter2= new Filter("taste",FilterOperator.Contains,sSearch)
             var aFilter=[oFilter,oFilter2];
             var oMaster= new Filter({
                 filters:aFilter,
                 and: false
             })
             
             // get list object
             var oList= this.getView().byId("idList")
             //inject the filter to the list 
             oList.getBinding("items").filter(oMaster );
        },
        onITemClick:function(){
            //this is my current class object- which is our contrler
            this.onNext() 
        },
        onNavNext:function (oEvent) {
          this.onNext()  
        },
        onDelete:function (oEvent) {
            // fi  selected item
            var oSelected=oEvent.getParameter("listItem")
            //get list item
            var oList= oEvent.getSource();;
            // remove the item from the list
            oList.removeItem(oSelected)
        }
    
    });
});
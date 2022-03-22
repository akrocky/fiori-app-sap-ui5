sap.ui.define(["sap/ui/core/format/NumberFormat"], function(
	NumberFormat
) {
	"use strict";
    return {
        formatCurrencey:function (amount,currency) {
            var oCurrencyFormat = NumberFormat.getCurrencyInstance();
          return  oCurrencyFormat.format(amount,currency)
        }
    }
	 
});
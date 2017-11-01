"use strict";

use(["/libs/wcm/foundation/components/utils/AuthoringUtils.js"], function (AuthoringUtils) {	
	var CONST = {
        PROP_SYMBOL: "symbol",
        PROP_SUMMARY: "summary",
    }
    
    var stockplex = {};

	stockplex.symbol = properties.get(CONST.PROP_SYMBOL,"");
    stockplex.summary = properties.get(CONST.PROP_SUMMARY,"");
    
    //If no symbol or summary has been given, show a touch ui placeholder
	if(stockplex.symbol == "" && stockplex.summary == ""){
		if(AuthoringUtils.isTouch){
			//Set placeholder class for touch
			stockplex.cssClass = "cq-placeholder";
		} else { 
			//Set placeholder class for classic
			stockplex.cssClass = "cq-text-placeholder-ipe";
		}
	}
    
    return stockplex;
    
});
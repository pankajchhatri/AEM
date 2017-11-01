"use strict";

use(["/libs/wcm/foundation/components/utils/AuthoringUtils.js"], function (AuthoringUtils) {	
	var CONST = {
        PROP_SYMBOL: "symbol",
        PROP_SUMMARY: "summary",
    }
    
    var SHOW_PROP = {
        REQUESTDATE: "showRequestDate",
        REQUESTTIME: "showRequestTime",
        UPDOWN: "showUpDown",
        OPENPRICE: "showOpenPrice",
        RANGEHIGH: "showRangeHigh",
        RANGELOW: "showRangeLow",
        VOLUME: "showVolume",
    }
    
    var INFO_PROP = {
        CURRENTPRICE: "currentPrice",
        REQUESTDATE: "requestDate",
        REQUESTTIME: "requestTime",
        UPDOWN: "upDown",
        OPENPRICE: "openPrice",
        RANGEHIGH: "rangeHigh",
        RANGELOW: "rangeLow",
        VOLUME: "volume"
    }
    
    var NAME = {
        CURRENTPRICE: "Current Price",
        REQUESTDATE: "Request Date",
        REQUESTTIME: "Request Time",
        UPDOWN: "Up/Down",
        OPENPRICE: "Open Price",
        RANGEHIGH: "Range High",
        RANGELOW: "Range Low",
        VOLUME: "Volume"
    }
    
    var stockplex = {};
    stockplex.items = []; //each item holds the [Name, Value] to be displayed on the page

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

    //Get the current stock
    stockplex.currentPrice = properties.get(INFO_PROP.CURRENTPRICE, '100');

    //Add the appropriate properties to the item array to be displayed
    if(properties.get(SHOW_PROP.REQUESTDATE)){
      stockplex.items.push([NAME.REQUESTDATE, properties.get(INFO_PROP.REQUESTDATE, '01/01/2016')]);
    }
    if(properties.get(SHOW_PROP.REQUESTTIME)){
      stockplex.items.push([NAME.REQUESTTIME, properties.get(INFO_PROP.REQUESTTIME, '5:00PM')]);
    }
    if(properties.get(SHOW_PROP.UPDOWN)){
      stockplex.items.push([NAME.UPDOWN, properties.get(INFO_PROP.UPDOWN, 10)]);
    }
    if(properties.get(SHOW_PROP.OPENPRICE)){
      stockplex.items.push([NAME.OPENPRICE, properties.get(INFO_PROP.OPENPRICE, 90)]);
    }
    if(properties.get(SHOW_PROP.RANGEHIGH)){
      stockplex.items.push([NAME.RANGEHIGH, properties.get(INFO_PROP.RANGEHIGH, 105)]);
    }
    if(properties.get(SHOW_PROP.RANGELOW)){
      stockplex.items.push([NAME.RANGELOW, properties.get(INFO_PROP.RANGELOW, 90)]);
    }
    if(properties.get(SHOW_PROP.VOLUME)){
      stockplex.items.push([NAME.VOLUME, properties.get(INFO_PROP.VOLUME, 2712018)]);
    }
	
    //Get the download button boolean from the Designer
    stockplex.downloadButton = currentStyle.get("downloadButton", false);
    
    return stockplex;
    
});
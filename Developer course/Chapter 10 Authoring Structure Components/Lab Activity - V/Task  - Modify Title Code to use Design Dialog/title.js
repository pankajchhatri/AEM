"use strict";

use(function () {

    var CONST = {
        PROP_TITLE: "jcr:title",
        PROP_TAG_TYPE: "type"
    }
    
    var title = {};
    
    // The actual title content
    title.text = properties.get(CONST.PROP_TITLE)
            || pageProperties.get(CONST.PROP_TITLE)
            || currentPage.name;

    title.type = currentStyle.get(CONST.PROP_TAG_TYPE)
    		|| "h1";
    
    return title;
    
});
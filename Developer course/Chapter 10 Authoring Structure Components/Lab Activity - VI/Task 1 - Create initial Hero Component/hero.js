"use strict";
use(function() {
    var CONST = {
        PROP_TITLE: "jcr:title",
    }
    
    var hero = {}
    
    //Get the title text
    hero.text = properties.get(CONST.PROP_TITLE)
            || pageProperties.get(CONST.PROP_TITLE)
            || currentPage.name;
    
    return hero;
});
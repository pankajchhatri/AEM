"use strict";

use(function(){
	var CONST = {
        PROP_NO_RESULTS_TEXT: "noResultsText",
        PROP_SEARCH_BUTTON: "searchButtonText",
        PROP_PREV_TEXT: "previousText",
        PROP_NEXT_TEXT: "nextText"
    }

    var hits;
    var noResultsText = granite.resource.properties[CONST.PROP_NO_RESULTS_TEXT] || "No Results";
	var searchButtonText = granite.resource.properties[CONST.PROP_SEARCH_BUTTON] || "Search";
    var previousText = granite.resource.properties[CONST.PROP_PREV_TEXT] || "back";
    var nextText = granite.resource.properties[CONST.PROP_NEXT_TEXT] || "next";
    var prevPage;
    var nextPage;

	/* initialize CQ5 WCM Search */
    var search = new com.day.cq.wcm.foundation.Search(request);

	/* process search results */
    var result = search.getResult();

    /* handle no results */
    if (result == null || result.getHits() == null) {
		queryEmpty = currentPage.properties.noResultsText;

    /* handle result list */
    } else {
		hits = result.getHits();

        /* pagination */
        var resultPages = result.getResultPages();
        if (!resultPages.isEmpty()) {
            if (result.getPreviousPage() != null) {
                prevPage = result.getPreviousPage();
            }
            if (result.getNextPage() != null) {
                nextPage = result.getNextPage();
            }
   		}	
    }

    return{
		noResults: noResultsText,
        searchButton: searchButtonText,
        previousText: previousText,
        prevPage: prevPage,
        nextText: nextText,
        nextPage: nextPage,
        hits: hits,
        resultPages: resultPages
    };
});
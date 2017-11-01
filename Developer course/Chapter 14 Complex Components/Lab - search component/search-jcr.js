"use strict";

use(function(){
	var queryString = (request.getParameter("q") != null) ? request.getParameter("q") : "";
    var items = [];

	if (request.getParameter("q") != null) {
        var stmt = "select * from cq:Page where jcr:path like '/content/we-train/%' and contains(*, '" + request.getParameter("q") + "') order by jcr:score desc";
        var query = currentNode.getSession().getWorkspace().getQueryManager().createQuery(stmt, javax.jcr.query.Query.SQL);
        var results = query.execute();
        if (results.getNodes() != null && results.getNodes().hasNext()) {
            var it = results.getNodes();
            while (it.hasNext()) {
                var node = it.nextNode();
                var npath = node.getPath();
                var contentPage = pageManager.getContainingPage(resource.getResourceResolver().getResource(npath));
                items[items.length] = contentPage;
            }
        }
    }

    return{
        queryString: queryString,
        query: items
    };
});
// Server-side JavaScript for the topnav logic
use(function () {
    var items = [];
    var root = currentPage.getAbsoluteParent(2);

    //make sure that we always have a valid set of returned items
    //if navigation root is null, use the currentPage as the the navigation root
    if(root == null){
    	root = currentPage;
    }

    //Logging Message
    log.info("########[JS] Root page is: " + root.getTitle());
    
    var it = root.listChildren(new Packages.com.day.cq.wcm.api.PageFilter());
    while (it.hasNext()) {
        var page = it.next();
        items.push(page);
    }

    return {
        items: items,
        root: root
    };
});
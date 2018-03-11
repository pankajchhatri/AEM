package apps.training.components.content.site_topnav;

import java.util.*;
import java.util.Iterator;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageFilter;

import com.adobe.cq.sightly.WCMUsePojo;

public class TopNav extends WCMUsePojo{
    private List<Page> items = new ArrayList<Page>();
    private Page rootPage;

    // Initializes the navigation
    @Override
    public void activate() throws Exception {
        rootPage = getCurrentPage().getAbsoluteParent(2);

        if (rootPage == null) {
        	rootPage = getCurrentPage();
        }
        
        Iterator<Page> childPages = rootPage.listChildren(new PageFilter(getRequest()));
	   	while (childPages.hasNext()) {
			items.add(childPages.next());
	   	}
    }

    // Returns the navigation items
    public List<Page> getItems() {
        return items;
    }
    // Returns the navigation root
    public Page getRoot() {
        return rootPage;
    }
}

# myCRM
This is the template for myCRM 

Just a reminder, for the pages to work, only two files need to be included 'all.css' (in the head) and 'all.js' (bottom of the page).

You can include the files on your server or remotely with the following urls:

* https://bootstrap.ersnet.org/css/all.css
* https://bootstrap.ersnet.org/js/all.js

### Production / development mode colors

For those two modes switch the classes `crm-production` (red) and `crm-dev` (orange) in the sidebar:

```
    <div class="ers-left-sidebar crm-production">
        [...]
``` 

### Aside panel

It is usefull if you want to have a search component available while the rest of the page scrolls

What is mendatory for the `<aside>` element to work is the following code:

```
  <div class="ers-content ers-aside">
    <aside class="page-aside">
      <div class="ers-scroller nano">
        <div class="nano-content">
          <div class="content">
            [...]
          </div>
        </div>
      </div>
    </aside>
    <div class="main-content">
        [...]
```
The `ers-scroller nano`, `nano-content` and `content` classes allow for the content of the `<aside>` element to scroll independently if the content overflows the full height of the page.
This is useful when the page is not "full screen" and the content become too large for the available height.  

### Scrolling

You just need to add `#someId` in the url. Of course, the id needs to be present in the page... you can try this with the following ones `#accordion1` or `#accordion2`.
It is the same id used to identify the accordions thus a good candidates for scrolling. you can of course create links with the following code:

```
    <a href="#accordion1" class="btn btn-xs btn-space btn-primary">Save</a>
```  

This create a button shaped link. 
Of course we can add some easing for the transition to be more visible as now it is "instant".

### Main menu (metanav)

Can accept up to 4 levels of submenu. Here is, for inspiration, the loop in php to generate it:

```
    foreach ($items as $key => $item) {
        if($item->parent == null){
            $metanav['main'][$key] = $item;
            if($item->hasChildren()){
            	$item->attr(array('data-submenu' => 'submenu-'.($key+1)));
            	$metanav['submenu-'.($key+1)] = $item->children();
            }
            foreach ($item->children() as $subkey => $subitem) {		
            	if($subitem->hasChildren()){
            		$metanav['submenu-'.($key+1).'-'.($subkey+1)] = $subitem->children();
            		$subitem->attr(array('data-submenu' => 'submenu-'.($key+1).'-'.($subkey+1)));    			
            		foreach($subitem->children() as $subsubkey => $subsubitem){
            			if($subsubitem->hasChildren()){
            				$subsubitem->attr(array('data-submenu' => 'submenu-'.($key+1).'-'.($subkey+1).'-'.($subsubkey+1)));
            				$metanav['submenu-'.($key+1).'-'.($subkey+1).'-'.($subsubkey+1)] = $subsubitem->children();
            			}
            		}
            	}	
            }
        }
    }
```


import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.walmart.com/?&gclsrc=aw.ds&adid=22222222220220085369&wmlspartner=wmtlabs&wl0=e&wl1=g&wl2=c&wl3=678300215746&wl4=kwd-27665750&wl5=9029705&wl6=&wl7=&wl8=&veh=sem&gad_source=1&gclid=Cj0KCQiAsburBhCIARIsAExmsu48UsAEON9EmQz_GElq7U8eHcDZWjb7w4omolmV4LmQOWFDj03_bRQaApkREALw_wcB${path}`)
    }
}

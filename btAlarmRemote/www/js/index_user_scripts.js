(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
       $("#btnLogin").click(function(evt)  {
           $(":mobile-pagecontainer").pagecontainer("change", "main.html", { reverse: false});
       });
   }
}
 $(document).ready(register_event_handlers);
})();

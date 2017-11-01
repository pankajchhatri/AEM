(function (document, $, ns) {
    "use strict";
 
    $(document).on("click", ".cq-dialog-submit", function (e) {
        e.stopPropagation();
        e.preventDefault();
 
        var $form = $(this).closest("form.foundation-form"),
            symbolid = $form.find("[name='./symbol']").val(),
               message, clazz = "coral-Button ",
         patterns = {
             symboladd: /^([a-z][a-z][a-z][a-z])\.?$/i
        };
 
        if(symbolid != "" && !patterns.symboladd.test(symbolid) && (symbolid != null)) {
                ns.ui.helpers.prompt({
                title: Granite.I18n.get("Invalid Input"),
                message: "Please Enter a valid 4 Letter Stock Symbol",
                actions: [{
                    id: "CANCEL",
                    text: "CANCEL",
                    className: "coral-Button"
                }],
            callback: function (actionId) {
                if (actionId === "CANCEL") {
                }
            }
        });
 
        }else{
                 $form.submit();
        }
    });
})(document, Granite.$, Granite.author);
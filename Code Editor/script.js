ace.require("ace/ext/language_tools");

let editor_html = document.querySelector("#editor-html");
let editor_css = document.querySelector("#editor-css");
let editor_js = document.querySelector("#editor-js");

ace.edit(editor_html,{
    theme: "ace/theme/twilight",
    mode: "ace/mode/html",
})


ace.edit(editor_css,{
    theme: "ace/theme/twilight",
    mode: "ace/mode/css",
})


ace.edit(editor_js,{
    theme: "ace/theme/twilight",
    mode: "ace/mode/javascript",
})

ace.edit("editor-html").setOptions( {
    enableLiveAutocompletion: true,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    wrap: true,
})

ace.edit("editor-css").setOptions( {
    enableLiveAutocompletion: true,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    wrap: true,
})
ace.edit("editor-js").setOptions( {
    enableLiveAutocompletion: true,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    wrap: true,
})


function run(){
    let html = ace.edit("editor-html").getValue();
    let css = ace.edit("editor-css").getValue();
    let js = ace.edit("editor-js").getValue();
    let preview = document.getElementById("preview");

    preview.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    preview.contentWindow.eval(js);
}

// Filtering the error messages
var session = ace.edit("editor-html").getSession();
session.on("changeAnnotation", function () {
    var annotations = session.getAnnotations() || [], i = len = annotations.length;
    while (i--) {
        if (/doctype first\. Expected/.test(annotations[i].text)) {
            annotations.splice(i, 1);
        }
        else if (/Unexpected End of file\. Expected/.test(annotations[i].text)) {
            annotations.splice(i, 1);
        }
    }
    if (len > annotations.length) {
        session.setAnnotations(annotations);
    }
});
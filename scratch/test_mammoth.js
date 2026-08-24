const mammoth = require("mammoth");
const path = require("path");

const docPath = path.join(__dirname, "../../AI Powered Grant Matching.docx");

const options = {
    styleMap: [
        "p[style-name='Title'] => h1:fresh",
        "p[style-name='Heading 1'] => h2:fresh",
        "p[style-name='Heading 2'] => h3:fresh",
        "highlight => mark",
        "r[style-name='Highlight'] => mark"
    ]
};

mammoth.convertToHtml({path: docPath}, options)
    .then(function(result){
        var html = result.value; // The generated HTML
        var messages = result.messages; // Any messages, such as warnings during conversion
        console.log("HTML length:", html.length);
        console.log("Snippet:", html.substring(0, 1000));
        console.log("Contains <mark>?", html.includes("<mark>"));
        console.log("Contains <button>?", html.includes("<button>"));
        
        // Let's log the first few mark tags if they exist
        const markMatches = html.match(/<mark>(.*?)<\/mark>/g);
        if (markMatches) {
            console.log("Found marks:", markMatches.slice(0, 5));
        } else {
            console.log("No <mark> found.");
        }
    })
    .done();

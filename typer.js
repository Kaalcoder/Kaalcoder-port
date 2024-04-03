
document.addEventListener("DOMContentLoaded", function () {
    // Get text from HTML element
    const autoTyping = document.querySelector(".codewheel-att");
    const text = autoTyping.innerHTML.replace(/\s+/g, " ").trim();
    autoTyping.innerHTML = "";

    let index = 0;

    // Setup Typing Text Function
    const interval = setInterval(function () {
        autoTyping.innerHTML = text.substring(0, index++);
        if (index == text.length + 1) {
           
            clearInterval(interval);
            BlinkingCurser();

        } 
    }, 0);

    function BlinkingCursor() {
        // Blinking Cursor
        var cssCode =
        ".codewheel-att::after { animation: cursorBlink 1s ease-out infinite; }";
        const body   = document.body || document.getElementsByTagName("body")[0];
        const style = document.createElement("style");
        style.innerHTML = cssCode;
        // append css style after <body> tag
        body.after(style);
    }
});
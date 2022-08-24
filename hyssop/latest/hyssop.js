function listener() {
    document.getElementById('h-main').innerHTML = this.responseText;
}
globalThis.req = new XMLHttpRequest();
globalThis.req.addEventListener('load', listener);
globalThis.req.open("GET", 'main.html');
globalThis.req.send();

document.body.addEventListener('click', (e) => {
    if(e.target.tagName === "A" && e.target.getAttribute('h-ignore') != "true") {
        e.preventDefault();
        globalThis.req = new XMLHttpRequest();
        globalThis.req.addEventListener('load', listener);
        globalThis.req.open("GET", e.target.href);
        globalThis.req.send();
    }
})
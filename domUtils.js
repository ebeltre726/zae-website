export function createElementFromHTML(htmlString) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = htmlString.trim();
    console.log("Sanitized template:", wrapper.innerHTML);
    console.log("First element child:", wrapper.firstElementChild);
    return wrapper.firstElementChild;
}
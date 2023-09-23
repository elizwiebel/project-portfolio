export default function getScrollBarWidth(element) {
    const box = document.querySelector(element);
    const scrollbarWidth = box.offsetWidth - box .clientWidth;

    return scrollbarWidth = document.body.offsetWidth - document.body.clientWidth;
}
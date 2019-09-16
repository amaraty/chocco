const sections = $(".sections");
const display = $(".maincontent");
let inscroll = false;

const performTransition = sectionEq => {
    if (inscroll === false) {
        inscroll = true;
        const position = `${sectionEq * -100}%`;

        sections
            .eq(sectionEq)
            .addClass("active")
            .siblings()
            .removeClass("active");

        display.css({
            transform: `translateY(${position})`
        });

        setTimeout(() => {

            inscroll = false;

        }, 1000 + 300);
    }
};

const scrollViewport = direction => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "next" && nextSection.length) {
        performTransition(nextSection.index());
    }

    if (direction === "prev" && prevSection.length) {
        performTransition(prevSection.index());
    }
};

$(document).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY < 0) {
        scrollViewport("prev");
    }

    if (deltaY > 0) {
        scrollViewport("next");
    }
});

$(document).on("keydown", e => {
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagName === 'input' || tagName === 'textarea';

    if (userTypingInInputs === false) {
        switch(e.keyCode) {
        case 38: //prev
            scrollViewport("prev");
            break;
        case 40: //next
            scrollViewport("next");
            break;
        }
    }
})
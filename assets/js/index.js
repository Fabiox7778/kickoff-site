document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        const setAria = (isOpen) => {
            question.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        };
        const toggle = () => {
            const faqItem = question.closest('.faq-item') || question.parentElement;
            if (!faqItem) return;
            const nowOpen = !faqItem.classList.contains('open');
            faqItem.classList.toggle("open");
            setAria(nowOpen);
        };

        question.addEventListener("click", toggle);
        question.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle();
            }
        });
    });
});
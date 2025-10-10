document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        const toggle = () => {
            const faqItem = question.closest('.faq-item') || question.parentElement;
            if (faqItem) faqItem.classList.toggle("open");
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
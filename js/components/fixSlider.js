function fixSlider() {
    document.addEventListener("DOMContentLoaded", () => {
        const voice = document.querySelector(".voice__block");

        const resizeObserver = new ResizeObserver(() => {
            fixSliderHeight();
        });

        if(voice !== null) {
            resizeObserver.observe(voice);
        }

        function fixSliderHeight() {
            const textElements = document.querySelectorAll(".voice__block .voice__card-desc");
            let height = 0;

            textElements.forEach(textEl => {
                if(height < textEl.offsetHeight) {
                    height = textEl.offsetHeight;
                }
            });

            textElements.forEach(texEl => {
                texEl.style.height = height + "px";
            });
        }
    });
}

export { fixSlider };
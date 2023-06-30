function showOnScroll() {
    document.addEventListener("DOMContentLoaded", () => {
        const header = document.getElementById("header");
        const mainVisual = document.getElementById("main-visual");
        const footerBanner = document.getElementById("footer-banner");

        if (header == null) return;

        let mainVisualHeight = mainVisual.offsetHeight;
        let headerHeight = header.offsetHeight;

        let calScrollHeight = mainVisualHeight - headerHeight;

        if (scrollY > 350) {
            footerBanner.classList.remove("hide");
        } else {
            footerBanner.classList.add("hide");
        }

        document.addEventListener("scroll", () => {
            if (scrollY > calScrollHeight) {
                header.classList.add("show-bg");
            } else {
                header.classList.remove("show-bg");
            }

            if (scrollY > 350) {
              footerBanner.classList.remove("hide");
            } else {
              footerBanner.classList.add("hide");
            }
        });
    });
}

export { showOnScroll };

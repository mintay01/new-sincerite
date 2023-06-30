function fixHeader() {
    document.addEventListener("DOMContentLoaded", () => {
        const header = document.getElementById("header");
        const mainVisual = document.getElementById("main-visual");

        if(header ==  null) return;

        let mainVisualHeight = mainVisual.offsetHeight;
        let headerHeight = header.offsetHeight;

        let calScrollHeight = mainVisualHeight - headerHeight;

        document.addEventListener("scroll", () => {
            if(scrollY > calScrollHeight) {
                header.classList.add("show-bg");
            }else {
                header.classList.remove("show-bg");
            }
        });
    });
}

export { fixHeader };
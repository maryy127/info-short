document.addEventListener("DOMContentLoaded", () => {
    const lightsticks = document.querySelectorAll(".lightstick");

    lightsticks.forEach(lightstick => {
        lightstick.addEventListener("click", () => {
            const ults = lightstick.querySelector(".ults");
            const isVisible = ults.classList.contains("visible");

            // Hide all ults & remove glow effect first
            document.querySelectorAll(".ults").forEach(ult => ult.classList.remove("visible"));
            document.querySelectorAll(".lightstick").forEach(ls => ls.classList.remove("glow"));

            // If the clicked one was not visible before, show it
            if (!isVisible) {
                ults.classList.add("visible");
                lightstick.classList.add("glow");
            }
        });
    });
});

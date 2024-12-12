function searchContent() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const sections = document.querySelectorAll("main section");

    sections.forEach((section) => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query)) {
            section.classList.remove("hidden");
        } else {
            section.classList.add("hidden");
        }
    });
}
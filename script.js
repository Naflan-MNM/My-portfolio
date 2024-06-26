document.addEventListener("DOMContentLoaded", function() {
    // Get the links and content placeholders
    const educationLink = document.getElementById("education-link");
    const experienceLink = document.getElementById("experience-link");
    const dynamicContent = document.getElementById("dynamic-content");

    // Event listener for the Education link
    educationLink.addEventListener("click", function(event) {
        event.preventDefault();
        loadContent("education");
    });

    // Event listener for the Experience link
    experienceLink.addEventListener("click", function(event) {
        event.preventDefault();
        loadContent("experience");
    });

    // Function to load content based on the section
    function loadContent(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            dynamicContent.innerHTML = section.innerHTML;
        }
    }
});

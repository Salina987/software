// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the search inputs
    const searchInput = document.querySelector("input[placeholder='Search job']");
    const locationInput = document.querySelector("input[placeholder='Location']");
    const searchButton = document.querySelector(".search-bar button");

    // Get references to the job cards
    const jobCards = document.querySelectorAll(".job-card");

    // Function to filter job cards based on search inputs
    function filterJobs() {
        const searchTerm = searchInput.value.toLowerCase();
        const locationTerm = locationInput.value.toLowerCase();

        jobCards.forEach(function (card) {
            const jobTitle = card.querySelector("h5").textContent.toLowerCase();
            const jobLocation = card.querySelector("p i.fa-map-marker-alt").nextElementSibling.textContent.toLowerCase(); if (
                jobTitle.includes(searchTerm) &&
                jobLocation.includes(locationTerm)
            ) {
                card.style.display = "block"; // Show matching job card
            } else {
                card.style.display = "none"; // Hide non-matching job card
            }
        });
    }

    // Add event listeners to the search inputs and button
    searchButton.addEventListener("click", filterJobs);
    searchInput.addEventListener("input", filterJobs);
    locationInput.addEventListener("input", filterJobs);
});
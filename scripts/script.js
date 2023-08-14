document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class "description-heading"
    const headingElements = document.querySelectorAll('.description-heading');

    // Select all content blocks within the "content-description" section
    const contentBlocks = document.querySelectorAll('.content-description > .self-stretch');

    // Function to hide all content blocks
    function hideAllContentBlocks() {
        // Loop through each content block and add 'hidden' class to hide it
        contentBlocks.forEach(block => {
            block.classList.add('hidden');
        });
    }

    // Add event listeners to each heading element
    headingElements.forEach(heading => {
        heading.addEventListener('click', () => {
            hideAllContentBlocks(); // Hide all content blocks
            const target = heading.getAttribute('data-target');
            const correspondingBlock = document.querySelector(`[data-content="${target}"]`);
            correspondingBlock.classList.remove('hidden'); // Show the corresponding content block

            // Loop through each heading element and remove 'active' class from headings that don't match the target
            headingElements.forEach(h => {
                if (h.getAttribute('data-target') !== target) {
                    h.classList.remove('active');
                }
            });

            heading.classList.add('active'); // Add 'active' class to the clicked heading
        });

        // Add "active" class on page load for the "Description" heading
        if (heading.getAttribute('data-target') === 'description') {
            heading.classList.add('active');
        }
    });
});
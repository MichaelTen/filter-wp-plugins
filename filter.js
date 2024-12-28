document.querySelectorAll('.plugin-card').forEach(card => {
    const installsElement = card.querySelector('.column-downloaded'); // Adjusted selector
    if (installsElement) {
        const installsText = installsElement.textContent.trim(); // Use textContent to get the text
        const installs = parseInt(installsText.replace(/[^0-9]/g, ''), 10); // Extract the number
        if (installs < 100000) {
            card.style.display = 'none'; // Hide if installs < 100,000
        }
    }
});

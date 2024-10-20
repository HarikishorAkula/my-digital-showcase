document.addEventListener('DOMContentLoaded', function() {
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.visibility = 'visible'; // Show loading spinner

    window.addEventListener('load', function() {
        loadingSpinner.style.visibility = 'hidden'; // Hide loading spinner

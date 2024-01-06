// Here is about the search and anytime i search it should direct me to search.html and search for the event
document.getElementById('search-button').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-input').value;
    const encodedSearchQuery = encodeURIComponent(searchQuery);

    window.location.href = 'search.html?search=' + encodedSearchQuery;
});
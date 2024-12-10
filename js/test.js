const searchBox = document.getElementById('search-box');
const suggestions = document.getElementById('suggestions');

const searchSuggestions = [
    'Google', 'YouTube', 'Facebook', 'Amazon', 'Twitter', 'Instagram'
];

searchBox.addEventListener('input', (e) => {
    const input = e.target.value.toLowerCase();
    suggestions.innerHTML = '';
    if (input) {
        const filteredSuggestions = searchSuggestions.filter(suggestion => suggestion.toLowerCase().includes(input));
        suggestions.innerHTML = filteredSuggestions.map(suggestion => `<li>${suggestion}</li>`).join('');
    }
});

suggestions.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        searchBox.value = e.target.textContent;
        suggestions.innerHTML = '';
    }
});

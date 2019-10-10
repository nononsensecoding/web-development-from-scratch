var hideClassName = "hide";
var searchInputId = "search-textbox";
var searchSuggestionsId = "search-suggestions";
var searchSuggestions;
var searchInput;

onPageLoad();

function onPageLoad() {
  searchSuggestions = document.getElementById(searchSuggestionsId);
  searchInput = document.getElementById(searchInputId);

  addEventListeners();
}

function addEventListeners() {
  searchInput.addEventListener("click", showSearchSuggestions);
  window.addEventListener("click", handleWindowClick);
}

function showSearchSuggestions() {
  searchSuggestions.classList.remove(hideClassName);
}

function hideSearchSuggestions() {
  searchSuggestions.classList.add(hideClassName);
}

function handleWindowClick(event) {
  if (event.target.id !== searchInputId) {
    hideSearchSuggestions();
  }
}

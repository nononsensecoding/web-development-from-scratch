function showSearchSuggestions() {
  var searchSuggestions = document.getElementById("search-suggestions");
  searchSuggestions.classList.remove("hide");
}

function hideSearchSuggestions() {
  var searchSuggestions = document.getElementById("search-suggestions");
  searchSuggestions.classList.add("hide");
}

function handleWindowClick(event) {
  if (event.target.id !== "search-textbox") {
    hideSearchSuggestions();
  }
}

var searchTextbox = document.getElementById("search-textbox");

searchTextbox.addEventListener("click", showSearchSuggestions);

window.addEventListener("click", handleWindowClick);

const input = document.getElementById("searchInput");

function doSearch() {
  const query = input.value.trim();
  if (!query) return;
  input.value = "";
  window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    doSearch();
  }
});
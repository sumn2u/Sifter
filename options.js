let searchButton = document.getElementById("searchChromeBookmarks");
searchButton.addEventListener("click", () => {
  chrome.tabs.create({ url: chrome.runtime.getURL("localsearch.html") });
  window.close();
});
const keyboardText =
  navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? "Alt" : "Ctrl";
[...document.querySelectorAll(".key")].forEach(function (button) {
  button.innerHTML = keyboardText;
});

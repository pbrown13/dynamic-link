(function () {
  console.log("init")
  // Check if the page URL contains '/product/'
  if (!window.location.href.includes("/product/")) {
    console.warn(
      "The current page URL does not contain '/product/'. The link will not be generated."
    );
    return;
  }

  // Retrieve SKU dynamically from the page
  const skuElement = document.querySelector('span[itemprop="sku"]');
  const sku = skuElement ? skuElement.textContent : null;
  if (!sku) {
    console.error("SKU element not found. Cannot generate iframe link.");
    return;
  }
  

  const refUrl = encodeURIComponent(window.location.href);

  function generateUserId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = generateUserId();
    localStorage.setItem("userId", userId);
  }

  window.gtag("get", "G-DD9K9M9485", "session_id", function (sessionId) {
    if (sessionId) {
      const iframeLink = `https://web.jbweld.com/mapview?sku=${sku}&session_id=${sessionId}&user_id=${userId}&ref_url=${refUrl}`;
      const button = document.querySelector("#findRetailerButton");
      if (button) {
        button.href = iframeLink;
      } else {
        console.error("Button with ID 'findRetailerButton' not found.");
      }
    } else {
      console.error("Session ID could not be retrieved.");
    }
  });
})();

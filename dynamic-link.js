(function () {
  console.log("init");

  // Function to load Axios dynamically
  function loadAxios(callback) {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
    script.onload = callback;
    document.head.appendChild(script);
  }

  // Wait until the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", async () => {
    loadAxios(async function () {
      // Check if the page URL contains '/product/'
      if (!window.location.href.includes("/product/")) {
        console.warn(
          "The current page URL does not contain '/product/'. The link will not be generated."
        );
        return;
      }

      // Retrieve SKU dynamically from the page
      const skuElement = document.querySelector("p.sku");
      const sku = skuElement
        ? skuElement.textContent.replace("SKU: ", "")
        : null;

      if (!sku || sku === "8281") {
        console.error("SKU element not found or invalid. Cannot proceed.");
        return;
      }

      try {
        // Use axios to GET the link using the SKU
        const response = await axios.get(
          `https://jbw-app-1fb65422a0eb.herokuapp.com/catsy/${sku}`
        );

        if (response.status === 200 && response.data) {
          const dynamicLink = response.data;

          // Update the link on the <a> tag with class 'cta-download'
          const ctaDownloadLink = document.querySelector("a.cta-download");
          if (ctaDownloadLink) {
            if (dynamicLink) {
              ctaDownloadLink.href = dynamicLink;
              console.log(
                "CTA download link updated successfully:",
                dynamicLink
              );
            } else {
              console.warn(
                "No URL returned from the API. Link remains unchanged."
              );
            }
          } else {
            console.error("Anchor tag with class 'cta-download' not found.");
          }
        } else {
          console.error(
            "Failed to retrieve a valid response from the API.",
            response
          );
        }
      } catch (error) {
        console.error("Error fetching the dynamic link:", error);
      }
    });
  });
})();

(async function () {
  console.log("init");

  // Wait until the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", async () => {
    // Check if the page URL contains '/product/'
    if (!window.location.href.includes("/product/")) {
      console.warn(
        "The current page URL does not contain '/product/'. The link will not be generated."
      );
      return;
    }

    // Retrieve SKU dynamically from the page
    const skuElement = document.querySelector("p.sku");
    const sku = skuElement ? skuElement.textContent.replace("SKU: ", "") : null;
    // if (!sku) {
    //     console.error("SKU element not found or invalid. Cannot generate iframe link.");
    //     return;
    // }

    // Encode the current page URL
    const refUrl = encodeURIComponent(window.location.href);

    // Function to get city, state, and IP from ipinfo.io
    async function getUserLocation() {
      try {
        const response = await fetch(
          "https://ipinfo.io/json?token=31331af039813f"
        );
        if (response.ok) {
          const data = await response.json();
          return {
            location: `${data.city},${data.region}`,
            ip: data.ip,
          };
        } else {
          throw new Error("Failed to fetch location data.");
        }
      } catch (error) {
        console.error("Error fetching location from ipinfo.io:", error);
        return { location: "unknown", ip: "unknown" };
      }
    }

    // Generate user ID
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

    const userLocation = await getUserLocation();

    window.gtag("get", "G-DD9K9M9485", "session_id", function (sessionId) {
      if (sessionId) {
        const updatedHref = `https://web.jbweld.com/mapview?sku=${sku}&session_id=${sessionId}&user_id=${userId}&ref_url=${refUrl}&location=${encodeURIComponent(
          userLocation.location
        )}&ip=${encodeURIComponent(userLocation.ip)}`;
        console.log(updatedHref, "<- updated href");

        // Update the first button with the .cta class
        const ctaButton = document.querySelector(".cta");
        if (ctaButton) {
          ctaButton.href = updatedHref;
        } else {
          console.error("Button with class 'cta' not found.");
        }
      } else {
        console.error("Session ID could not be retrieved.");
      }
    });
  });
})();

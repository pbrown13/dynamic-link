(function () {
  console.log("test8");

  // Array of SKU data
  const skuData = [
    {
      sku: "2100",
      category: "repair+kitjbweld",
      url: "https://www.jbweld.com/product/windshield-saver",
    },
    {
      sku: "2110",
      category: "repair+kitjbweld",
      url: "https://www.jbweld.com/product/j-b-weld-tankweld",
    },
    {
      sku: "2120",
      category: "repair+kitjbweld",
      url: "https://www.jbweld.com/product/j-b-weld-radiatorweld",
    },
    {
      sku: "2130",
      category: "repair+kitjbweld",
      url: "https://www.jbweld.com/product/j-b-weld-leatherweld",
    },
    {
      sku: "24206",
      category: "threadlockerjbweld",
      url: "https://www.jbweld.com/product/perma-lock-blue-threadlocker",
    },
    {
      sku: "24213",
      category: "threadlockerjbweld",
      url: "https://www.jbweld.com/product/perma-lock-blue-threadlocker",
    },
    {
      sku: "24236",
      category: "threadlockerjbweld",
      url: "https://www.jbweld.com/product/perma-lock-blue-threadlocker",
    },
    {
      sku: "27106",
      category: "threadlockerjbweld",
      url: "https://www.jbweld.com/product/perma-lock-red-threadlocker",
    },
    {
      sku: "27113",
      category: "threadlockerjbweld",
      url: "https://www.jbweld.com/product/perma-lock-red-threadlocker",
    },
    {
      sku: "27136",
      category: "threadlockerjbweld",
      url: "https://www.jbweld.com/product/perma-lock-red-threadlocker",
    },
    {
      sku: "31310",
      category: "siliconejbweld",
      url: "https://www.jbweld.com/product/clear-silicone",
    },
    {
      sku: "31312",
      category: "siliconejbweld",
      url: "https://www.jbweld.com/product/white-silicone",
    },
    {
      sku: "31314",
      category: "siliconejbweld",
      url: "https://www.jbweld.com/product/hi-temp-red-silicone",
    },
    {
      sku: "31316",
      category: "siliconejbweld",
      url: "https://jbweld.com/product/blue-silicone",
    },
    {
      sku: "31319",
      category: "siliconejbweld",
      url: "https://www.jbweld.com/product/black-silicone",
    },
    {
      sku: "32325",
      category: "siliconejbweld",
      url: "https://www.jbweld.com/product/ultimate-copper-silicone-3oz",
    },
    {
      sku: "32327",
      category: "siliconejbweld",
      url: "https://www.jbweld.com/product/ultimate-grey-silicone",
    },
    {
      sku: "32329",
      category: "siliconejbweld",
      url: "https://www.jbweld.com/product/ultimate-black-silicone-3oz",
    },
    {
      sku: "33102",
      category: "super+gluejbweld",
      url: "https://www.jbweld.com/product/superweld-2g-4g",
    },
    {
      sku: "33106",
      category: "super+gluejbweld",
      url: "https://www.jbweld.com/product/j-b-weld-superweld-brush-on-6g",
    },
    {
      sku: "33120",
      category: "super+gluejbweld",
      url: "https://www.jbweld.com/product/superweld-2g-4g",
    },

    {
      sku: "33301",
      category: "super+gluejbweld",
      url: "https://www.jbweld.com/product/superweld-light-activated",
    },
    {
      sku: "33400",
      category: "super+gluejbweld",
      url: "https://www.jbweld.com/product/j-b-weld-superweld-extreme",
    },
    {
      sku: "33701",
      category: "specialtyjbweld",
      url: "https://www.jbweld.com/product/mirrorweld",
    },
    {
      sku: "37901",
      category: "muffler+repairjbweld",
      url: "https://www.jbweld.com/product/j-b-extremeheat",
    },
    {
      sku: "37903",
      category: "muffler+repairjbweld",
      url: "https://www.jbweld.com/product/exhaust-system-sealant",
    },
    {
      sku: "37906",
      category: "muffler+repairjbweld",
      url: "https://www.jbweld.com/product/muffler-cement-6-oz",
    },
    {
      sku: "37912",
      category: "muffler+repairjbweld",
      url: "https://order.jbweld.com/products/muffler-cement-6-oz",
    },
    {
      sku: "38236",
      category: "repair+castjbweld",
      url: "https://www.jbweld.com/product/fiberweld-permanent-repair-cast",
    },
    {
      sku: "38248",
      category: "repair+castjbweld",
      url: "https://www.jbweld.com/product/fiberweld-1-pipe-repair-cast",
    },
    {
      sku: "38260",
      category: "repair+castjbweld",
      url: "https://www.jbweld.com/product/fiberweld-2-pipe-repair-cast",
    },
    {
      sku: "38572",
      category: "repair+castjbweld",
      url: "https://www.jbweld.com/product/exhaustweld",
    },
    {
      sku: "39205",
      category: "muffler+repairjbweld",
      url: "https://www.jbweld.com/product/tiger-patch-kit",
    },
    {
      sku: "39206",
      category: "muffler+repairjbweld",
      url: "https://www.jbweld.com/product/tiger-patch",
    },
    {
      sku: "40001",
      category: "wood+restorejbweld",
      url: "https://www.jbweld.com/product/wood-restore-liquid-hardener",
    },
    {
      sku: "40003",
      category: "10p1v9cns4zijzsa78ssjt0r7",
      url: "https://www.jbweld.com/product/wood-restore-repair-putty",
    },
    {
      sku: "40006",
      category: "10p1v9cns4zijzsa78ssjt0r7",
      url: "https://www.jbweld.com/product/premium-epoxy-putty-kit",
    },
    {
      sku: "40007",
      category: "10p1v9cns4zijzsa78ssjt0r7",
      url: "https://www.jbweld.com/product/premium-epoxy-putty-kit",
    },
    {
      sku: "40052",
      category: "7ic3jieq7lxxqbo5i60zttol7",
      url: "(blank)",
    },
    {
      sku: "40054",
      category: "7ic3jieq7lxxqbo5i60zttol7",
      url: "https://www.jbweld.com/product/multi-purpose-putty-gallon",
    },
    {
      sku: "40122",
      category: "7ic3jieq7lxxqbo5i60zttol7",
      url: "https://www.jbweld.com/product/fiberglass-resin-quart",
    },
    {
      sku: "40128",
      category: "polyester putty & resin",
      url: "https://www.jbweld.com/product/fiberglass-cloth-8-sq-ft",
    },
    {
      sku: "40129",
      category: "polyester putty & resin",
      url: "https://www.jbweld.com/product/fiberglass-mat-8-sq-ft",
    },
    {
      sku: "40252",
      category: "polyester putty & resin",
      url: "https://www.jbweld.com/product/kwikbond-15-quart",
    },
    {
      sku: "40254",
      category: "7ic3jieq7lxxqbo5i60zttol7",
      url: "https://www.jbweld.com/product/kwikbond-15-gallon",
    },
    {
      sku: "40262",
      category: "7ic3jieq7lxxqbo5i60zttol7",
      url: "(blank)",
    },
    {
      sku: "40272",
      category: "polyester putty & resin",
      url: "https://www.jbweld.com/product/fiberglass-short-strand-filler",
    },
    {
      sku: "40404",
      category: "7ic3jieq7lxxqbo5i60zttol7",
      url: "https://www.jbweld.com/product/fiberglass-resin-gallon",
    },
    {
      sku: "50099",
      category: "syringejbweld",
      url: "https://www.jbweld.com/product/static-mixers",
    },
    {
      sku: "50101",
      category: "syringejbweld",
      url: "https://www.jbweld.com/product/minuteweld-syringe",
    },
    {
      sku: "50112",
      category: "syringejbweld",
      url: "https://www.jbweld.com/product/clearweld-syringe",
    },
    {
      sku: "50114",
      category: "f18mqiwmfkar88z81j7c9g0j",
      url: "https://www.jbweld.com/product/clearweld-syringe",
    },
    {
      sku: "50114H",
      category: "syringejbweld",
      url: "https://www.jbweld.com/product/clearweld-syringe",
    },
    {
      sku: "50132",
      category: "syringejbweld",
      url: "https://www.jbweld.com/product/plasticweld-syringe",
    },
    {
      sku: "50133",
      category: "syringejbweld",
      url: "https://www.jbweld.com/product/plastic-bonder-syringe",
    },
    {
      sku: "50134",
      category: "syringejbweld",
      url: "https://order.jbweld.com/products/bumperweld-syringe",
    },
    {
      sku: "50138",
      category: "f18mqiwmfkar88z81j7c9g0j",
      url: "https://www.jbweld.com/product/autoweld-syringe",
    },
    {
      sku: "50139",
      category: "syringejbweld",
      url: "https://www.jbweld.com/product/j-b-plastic-bonder-syringe",
    },
    {
      sku: "50151",
      category: "syringejbweld",
      url: "https://www.jbweld.com/product/woodweld-syringe",
    },
    {
      sku: "50165",
      category: "syringejbweld",
      url: "https://www.jbweld.com/product/j-b-weld-syringe",
    },
    {
      sku: "50172",
      category: "syringejbweld",
      url: "https://www.jbweld.com/product/marineweld-syringe",
    },
    {
      sku: "50176",
      category: "syringejbweld",
      url: "https://www.jbweld.com/product/kwikweld-syringe",
    },
    {
      sku: "50178",
      category: "f18mqiwmfkar88z81j7c9g0j",
      url: "https://www.jbweld.com/product/seamweld-syringe",
    },
    {
      sku: "50197",
      category: "f18mqiwmfkar88z81j7c9g0j",
      url: "https://www.jbweld.com/product/high-heat-syringe",
    },
    {
      sku: "50240",
      category: "liquid+bottle+epoxyjbweld",
      url: "https://www.jbweld.com/product/clearweld-pro-size",
    },
    {
      sku: "8212",
      category: "twin+tubejbweld",
      url: "https://order.jbweld.com/products/clearweld-twin-tube",
    },
    {
      sku: "8217",
      category: "putty+stickjbweld",
      url: "https://www.jbweld.com/product/tankweld",
    },
    {
      sku: "8237",
      category: "putty+stickjbweld",
      url: "https://www.jbweld.com/product/plasticweld-epoxy-putty",
    },
    {
      sku: "8257",
      category: "putty+stickjbweld",
      url: "https://www.jbweld.com/product/kwikwood-epoxy-putty-1oz",
    },
    {
      sku: "8258",
      category: "putty+stickjbweld",
      url: "https://www.jbweld.com/product/kwikwood-epoxy-putty-2oz",
    },
    {
      sku: "8265S",
      category: "twin+tubejbweld",
      url: "https://www.jbweld.com/product/j-b-weld-twin-tube",
    },
    {
      sku: "8267",
      category: "putty+stickjbweld",
      url: "https://www.jbweld.com/product/steelstik-epoxy-putty-stick",
    },
    {
      sku: "8271",
      category: "twin+tubejbweld",
      url: "https://www.jbweld.com/product/j-b-kwik-professional-size",
    },
    {
      sku: "8272",
      category: "twin+tubejbweld",
      url: "https://www.jbweld.com/product/marineweld-twin-tube",
    },
    {
      sku: "8276",
      category: "twin+tubejbweld",
      url: "https://www.jbweld.com/product/kwikweld-twin-tube",
    },
    {
      sku: "8277",
      category: "putty+stickjbweld",
      url: "https://www.jbweld.com/product/waterweld-epoxy-putty",
    },
    {
      sku: "8281",
      category: "twin+tubejbweld",
      url: "https://www.jbweld.com/product/j-b-weld-professional-size",
    },
    {
      sku: "8297",
      category: "putty+stickjbweld",
      url: "https://www.jbweld.com/product/highheat-epoxy-putty",
    },
  ];

  // Function to check if a SKU exists in the skuData array
  function skuExists(sku) {
    return skuData.some(item => item.sku === sku);
  }

  // Function to get the SKU data object if it exists
  function getSkuData(sku) {
    return skuData.find(item => item.sku === sku);
  }

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

      if (!sku) {
        console.error("SKU element not found or invalid. Cannot proceed.");
        return;
      }

      // Check if SKU is '50240' and modify it to '50240H' for Bazaarvoice
      let modifiedSku = sku;
      if (sku === '50240') {
        modifiedSku = '50240H';
        console.log("Modified special SKU to:", modifiedSku);
      }

      // Check if the SKU exists in our data array
      const skuInArray = skuExists(sku);
      console.log(`SKU ${sku} exists in data array: ${skuInArray}`);
      
      // Get the SKU data if it exists
      const currentSkuData = getSkuData(sku);
      
      try {
        // Check if the URL has the rr=true query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const hasReviewParam = urlParams.get('rr') === 'true';
        console.log("Has review parameter:", hasReviewParam);
        
        // Check if current URL matches the SKU's URL from our data
        const currentUrl = window.location.href.split('?')[0]; // Remove any query parameters
        const urlMatchesSku = currentSkuData && currentSkuData.url && currentUrl.includes(currentSkuData.url);
        console.log("Current URL:", currentUrl);
        console.log("SKU URL from data:", currentSkuData ? currentSkuData.url : "No data");
        console.log("URL matches SKU:", urlMatchesSku);
        
        // Requirement 1: Show popup if rr=true param is there and SKU validation passes
        if (hasReviewParam && skuInArray && urlMatchesSku) {
          console.log("Attempting to trigger Bazaarvoice review");
          // Check if Bazaarvoice is loaded
          console.log("Bazaarvoice object exists:", !!window.$BV);
          if (window.$BV) {
            try {
              window.$BV.ui('rr', 'submit_review', {productId: modifiedSku});
              console.log("Bazaarvoice review submission triggered for SKU:", modifiedSku);
            } catch (bvError) {
              console.error("Error triggering Bazaarvoice review:", bvError);
            }
          } else {
            console.warn("Bazaarvoice ($BV) not found on the page");
            // Try to wait for Bazaarvoice to load
            setTimeout(function() {
              if (window.$BV) {
                try {
                  window.$BV.ui('rr', 'submit_review', {productId: modifiedSku});
                  console.log("Bazaarvoice review submission triggered after delay for SKU:", modifiedSku);
                } catch (bvError) {
                  console.error("Error triggering Bazaarvoice review after delay:", bvError);
                }
              } else {
                console.error("Bazaarvoice still not available after delay");
              }
            }, 2000); // Wait 2 seconds
          }
        }
        
        // Requirement 2: Add button after the "Success Stories" heading
        if (skuInArray && urlMatchesSku) {
          // First find the product embed section
          const productEmbedSection = document.querySelector('.layout-jbw-product-embed');
          console.log("Product embed section found:", !!productEmbedSection);
          
          if (productEmbedSection) {
            // Look for the "Success Stories" heading INSIDE the product embed section
            const successStoriesHeading = productEmbedSection.querySelector('h2.section-title strong');
            console.log("Success Stories heading found inside product embed section:", !!successStoriesHeading);
            
            if (successStoriesHeading && successStoriesHeading.textContent.includes("Success Stories")) {
              console.log("Adding LEAVE A REVIEW button after Success Stories heading");
              // Create the "LEAVE A REVIEW" button
              const reviewButton = document.createElement('a');
              reviewButton.className = 'c-quantity-button btn';
              reviewButton.textContent = 'LEAVE A REVIEW';
              reviewButton.href = window.location.href.split('?')[0] + '?rr=true'; // Always use clean URL
              reviewButton.style.marginTop = '20px';
              reviewButton.style.marginBottom = '20px';
              reviewButton.style.display = 'inline-block';
              
              // Insert the button after the h2 that contains the Success Stories heading
              const h2Element = successStoriesHeading.closest('h2.section-title');
              if (h2Element) {
                h2Element.insertAdjacentElement('afterend', reviewButton);
                console.log("Added 'LEAVE A REVIEW' button after Success Stories heading");
              } else {
                console.error("Could not find parent h2 element for Success Stories heading");
                // Fallback to adding at the beginning of the product embed section
                productEmbedSection.insertAdjacentElement('afterbegin', reviewButton);
                console.log("Added 'LEAVE A REVIEW' button at the beginning of product embed section (fallback)");
              }
            } else {
              console.log("Success Stories heading not found, adding button at beginning of product embed section");
              // Add at the beginning of the product embed section
              const reviewButton = document.createElement('a');
              reviewButton.className = 'c-quantity-button btn';
              reviewButton.textContent = 'LEAVE A REVIEW';
              reviewButton.href = window.location.href.split('?')[0] + '?rr=true';
              reviewButton.style.marginBottom = '20px';
              reviewButton.style.display = 'inline-block';
              
              productEmbedSection.insertAdjacentElement('afterbegin', reviewButton);
              console.log("Added 'LEAVE A REVIEW' button at beginning of product embed section");
            }
          } else {
            console.error("Product embed section not found, cannot add button");
          }
        } else {
          console.log("Not adding button. Conditions:", {
            "skuInArray": skuInArray,
            "urlMatchesSku": urlMatchesSku
          });
        }

        // Use axios to GET the link using the SKU (not the modified one)
        const response = await axios.get(
          `https://jbw-app-1fb65422a0eb.herokuapp.com/catsy/${sku}`
        );

        if (response.status === 200 && typeof response.data === "string") {
          const dynamicLink = response.data;
          console.log("Dynamic link:", dynamicLink);
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

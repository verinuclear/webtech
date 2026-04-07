$(document).ready(function () {

    $.ajax({
        url: "https://dummyjson.com/products?limit=4",
        method: "GET",
        dataType: "json",

        success: function (data) {
            // Hide the loading message
            $("#loading-msg").hide();

            // Clear the grid
            $("#featured-deals-grid").empty();

            // 2. DOM MANIPULATION (build and inject one card per product)
            data.products.forEach(function (product) {
                var card = `
                    <div class="product-card">
                        <img src="${product.thumbnail}" alt="${product.title}">
                        <div class="product-info">
                            <h4>${product.title}</h4>
                            <p class="price">$${product.price.toFixed(2)}</p>
                            <button class="add-to-cart">Add to Cart</button>
                            <button class="quick-view-btn"
                                data-title="${product.title}"
                                data-price="${product.price.toFixed(2)}"
                                data-desc="${product.description.replace(/"/g, '&quot;')}"
                                data-image="${product.thumbnail}"
                                data-rating="${product.rating}"
                                data-count="${product.stock}">
                                Quick View
                            </button>
                        </div>
                    </div>`;

                $("#featured-deals-grid").append(card);
            });
        },

        error: function () {
            $("#loading-msg").text("Failed to load deals. Please try again later.");
        }
    });


    // Open modal when any Quick View button is clicked
    $(document).on("click", ".quick-view-btn", function () {
        var btn = $(this);

        $("#modal-title").text(btn.data("title"));
        $("#modal-price").text("$" + btn.data("price"));
        $("#modal-desc").text(btn.data("desc"));
        $("#modal-img").attr("src", btn.data("image")).attr("alt", btn.data("title"));
        $("#modal-rating").text(btn.data("rating") + " / 5");
        $("#modal-count").text("(" + btn.data("count") + " in stock)");

        $("#quick-view-modal").addClass("active");
    });

    // Close modal on × button
    $("#modal-close").on("click", function () {
        $("#quick-view-modal").removeClass("active");
    });

    // Close modal on overlay click
    $("#quick-view-modal").on("click", function (e) {
        if ($(e.target).is("#quick-view-modal")) {
            $(this).removeClass("active");
        }
    });

    // Close modal on Escape key
    $(document).on("keydown", function (e) {
        if (e.key === "Escape") {
            $("#quick-view-modal").removeClass("active");
        }
    });

});
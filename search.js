
const allProducts = {
    'basmati-rice': {
        id: 'basmati-rice',
        title: 'Premium Basmati Rice',
        category: 'rice',
        keywords: ['basmati', 'rice', 'long grain', 'aromatic']
    },
    'brown-rice': {
        id: 'brown-rice',
        title: 'Organic Brown Rice',
        category: 'rice',
        keywords: ['brown', 'rice', 'whole grain', 'fiber']
    },
    'jasmine-rice': {
        id: 'jasmine-rice',
        title: 'Jasmine Rice',
        category: 'rice',
        keywords: ['jasmine', 'rice', 'fragrant', 'asian']
    },
    'wild-rice': {
        id: 'wild-rice',
        title: 'Wild Rice',
        category: 'rice',
        keywords: ['wild', 'rice', 'nutty', 'protein']
    },
    'red-rice': {
        id: 'red-rice',
        title: 'Red Rice',
        category: 'rice',
        keywords: ['red', 'rice', 'antioxidant', 'iron']
    },
    'sella-rice': {
        id: 'sella-rice',
        title: 'Golden Sella Rice',
        category: 'rice',
        keywords: ['sella', 'rice', 'parboiled', 'golden']
    },
    'black-rice': {
        id: 'black-rice',
        title: 'Black Rice (Forbidden Rice)',
        category: 'rice',
        keywords: ['black', 'rice', 'forbidden', 'antioxidant']
    },
    'turmeric-powder': {
        id: 'turmeric-powder',
        title: 'Organic Turmeric Powder (Haldi)',
        category: 'spices',
        keywords: ['turmeric', 'haldi', 'spice', 'curcumin']
    },
    'red-chili-powder': {
        id: 'red-chili-powder',
        title: 'Red Chili Powder (Lal Mirch)',
        category: 'spices',
        keywords: ['chili', 'mirch', 'spice', 'red']
    },
    
    'garam-masala': {
        id: 'garam-masala',
        title: 'Garam Masala Blend',
        category: 'spices',
        keywords: ['garam masala', 'blend', 'spice', 'aromatic']
    },
    'organic-tomato-ketchup': {
        id: 'organic-tomato-ketchup',
        title: 'Organic Tomato Ketchup',
        category: 'spices', // Classified under spices/condiments
        keywords: ['ketchup', 'tomato', 'organic', 'sauce']
    },
    'hot-chilli-sauce': {
        id: 'hot-chilli-sauce',
        title: 'Fiery Hot Chilli Sauce',
        category: 'spices', // Classified under spices/condiments
        keywords: ['chilli sauce', 'hot', 'fiery', 'sauce']
    },
    'premium-soy-sauce': {
        id: 'premium-soy-sauce',
        title: 'Premium Soy Sauce',
        category: 'spices', // Classified under spices/condiments
        keywords: ['soy sauce', 'premium', 'umami', 'asian']
    },
    'toor-dal': {
        id: 'toor-dal',
        title: 'Organic Toor Dal (Arhar Dal)',
        category: 'pulses',
        keywords: ['toor dal', 'arhar', 'lentils', 'pulse']
    },
    'yellow-moong-dal': {
        id: 'yellow-moong-dal',
        title: 'Yellow Moong Dal',
        category: 'pulses',
        keywords: ['moong dal', 'yellow', 'lentils', 'pulse']
    },
    'chana-dal': {
        id: 'chana-dal',
        title: 'Chana Dal (Split Chickpeas)',
        category: 'pulses',
        keywords: ['chana dal', 'chickpeas', 'split', 'pulse']
    },
    'masoor-dal': {
        id: 'masoor-dal',
        title: 'Masoor Dal (Red Lentils)',
        category: 'pulses',
        keywords: ['masoor dal', 'red lentils', 'pulse']
    },
    
    'mustard-oil': {
        id: 'mustard-oil',
        title: 'Cold Pressed Mustard Oil (Sarson Ka Tel)',
        category: 'oils',
        keywords: ['mustard oil', 'sarson', 'cold pressed', 'cooking oil']
    },
    'coconut-oil': {
        id: 'coconut-oil',
        title: 'Virgin Coconut Oil (Nariyal Ka Tel)',
        category: 'oils',
        keywords: ['coconut oil', 'nariyal', 'virgin', 'cooking oil']
    },
    'olive-oil': {
        id: 'olive-oil',
        title: 'Extra Virgin Olive Oil',
        category: 'oils',
        keywords: ['olive oil', 'extra virgin', 'healthy oil']
    },
    
    'whole-wheat-flour': {
        id: 'whole-wheat-flour',
        title: 'Organic Whole Wheat Flour (Atta)',
        category: 'wheat',
        keywords: ['whole wheat', 'flour', 'atta', 'organic']
    },
    'all-purpose-flour': {
        id: 'all-purpose-flour',
        title: 'All Purpose Flour (Maida)',
        category: 'wheat',
        keywords: ['all purpose', 'flour', 'maida', 'baking']
    },
    'semolina': {
        id: 'semolina',
        title: 'Semolina (Suji)',
        category: 'wheat',
        keywords: ['semolina', 'suji', 'flour', 'halwa']
    },
    'quinoa': {
        id: 'quinoa',
        title: 'Organic Quinoa',
        category: 'cereals',
        keywords: ['quinoa', 'organic', 'superfood', 'gluten-free']
    },
    'rolled-oats': {
        id: 'rolled-oats',
        title: 'Rolled Oats',
        category: 'cereals',
        keywords: ['oats', 'rolled', 'breakfast', 'cereal']
    },
    'pearl-barley': {
        id: 'pearl-barley',
        title: 'Pearl Barley',
        category: 'cereals',
        keywords: ['barley', 'pearl', 'cereal', 'soup']
    },
    'mixed-millet': {
        id: 'mixed-millet',
        title: 'Mixed Millet',
        category: 'cereals',
        keywords: ['millet', 'mixed', 'gluten-free', 'cereal']
    },
    'premium-almonds': {
        id: 'premium-almonds',
        title: 'Premium Almonds (Badam)',
        category: 'nuts',
        keywords: ['almonds', 'badam', 'nuts', 'dry fruit']
    },
    'kashmir-walnuts': {
        id: 'kashmir-walnuts',
        title: 'Kashmir Walnuts (Akhrot)',
        category: 'nuts',
        keywords: ['walnuts', 'akhrot', 'kashmir', 'nuts']
    },
    
    'premium-cashews': {
        id: 'premium-cashews',
        title: 'Premium Cashews (Kaju)',
        category: 'nuts',
        keywords: ['cashews', 'kaju', 'nuts']
    },
    'mango-pulp': {
        id: 'mango-pulp',
        title: 'Premium Mango Pulp (Aam Ka Pulp)',
        category: 'fruits',
        keywords: ['mango', 'pulp', 'aam', 'fruit']
    },
    'guava-pulp': {
        id: 'guava-pulp',
        title: 'Fresh Guava Pulp (Amrood Ka Pulp)',
        category: 'fruits',
        keywords: ['guava', 'pulp', 'amrood', 'fruit']
    },
    'apple-pulp': {
        id: 'apple-pulp',
        title: 'Organic Apple Pulp (Seb Ka Pulp)',
        category: 'fruits',
        keywords: ['apple', 'pulp', 'seb', 'fruit', 'organic']
    },
    'organic-cotton-seeds': {
        id: 'organic-cotton-seeds',
        title: 'Organic Cotton Seeds (Kapas Ke Beej)',
        category: 'agro',
        keywords: ['cotton seeds', 'kapas', 'agro', 'organic']
    },
    'premium-wheat-seeds': {
        id: 'premium-wheat-seeds',
        title: 'Premium Wheat Seeds (Gandum Ke Beej)',
        category: 'agro',
        keywords: ['wheat seeds', 'gandum', 'agro', 'premium']
    },
    'organic-compost-fertilizer': {
        id: 'organic-compost-fertilizer',
        title: 'Organic Compost Fertilizer (Jaivi Khad)',
        category: 'agro',
        keywords: ['compost', 'fertilizer', 'jaivi khad', 'organic']
    },
    
    'pure-wildflower-honey': {
        id: 'pure-wildflower-honey',
        title: 'Pure Wildflower Honey (Shahad)',
        category: 'sweeteners',
        keywords: ['honey', 'shahad', 'wildflower', 'sweetener', 'pure']
    },
    'organic-jaggery': {
        id: 'organic-jaggery',
        title: 'Organic Jaggery (Gur)',
        category: 'sweeteners',
        keywords: ['jaggery', 'gur', 'organic', 'sweetener']
    }
};

// Define available categories for direct navigation
const productCategories = {
    'rice': 'Rice & Rice Products',
    'spices': 'Spices & Condiments',
    'pulses': 'Pulses & Lentils',
    'oils': 'Cooking Oils',
    'wheat': 'Wheat & Flour',
    'cereals': 'Nutritious Cereals',
    'nuts': 'Nuts & Seeds',
    'fruits': 'Fruit Pulps',
    'agro': 'Agro Products',
    'sweeteners': 'Natural Sweeteners'
};


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchForm = searchInput.closest('form'); // Get the form containing the search input
    let searchSuggestionsContainer = document.getElementById('search-suggestions');

    // Create the search suggestions container if it doesn't exist
    if (!searchSuggestionsContainer) {
        searchSuggestionsContainer = document.createElement('div');
        searchSuggestionsContainer.id = 'search-suggestions';
        // Add styling for the suggestions container
        searchSuggestionsContainer.style.cssText = `
            position: absolute;
            top: 100%; /* Position below the search bar */
            left: 0;
            right: 0;
            background-color: var(--card-dark); /* Use your dark mode card background */
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 1000; /* Ensure it's above other content */
            max-height: 300px;
            overflow-y: auto;
            display: none; /* Hidden by default */
            padding: 10px;
            margin-top: 5px; /* Small gap between search bar and suggestions */
        `;
        // Insert it right after the search form
        searchForm.parentNode.insertBefore(searchSuggestionsContainer, searchForm.nextSibling);
        // Make sure the parent of the search form is relative for absolute positioning of suggestions
        searchForm.parentNode.style.position = 'relative';
    }


    // Handle input in the search bar
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length > 0) {
            showSuggestions(query);
        } else {
            hideSuggestions();
        }
    });

    // Handle clicks outside the search suggestions to hide them
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchSuggestionsContainer.contains(event.target)) {
            hideSuggestions();
        }
    });

    // Prevent form submission from reloading the page when a suggestion is clicked
    searchForm.addEventListener('submit', function(event) {
        const query = searchInput.value.trim();
        // If a suggestion was selected (or if it's a category match), prevent default submit
        // Otherwise, allow default form submission for general searches (which products.html handles)
        const matchedCategory = Object.keys(productCategories).find(catKey => catKey === query || productCategories[catKey] === query);
        const matchedProduct = Object.values(allProducts).find(p => p.title === query);

        if (matchedCategory || matchedProduct) {
            event.preventDefault();
            if (matchedProduct) {
                // If it's a direct product match, navigate to its detail page
                handleProductClick(matchedProduct.id);
            } else if (matchedCategory) {
                // If it's a direct category match, navigate to products.html and filter
                handleCategoryClick(matchedCategory);
            }
        }
        // If no direct product or category match, allow the form to submit to products.html
        // The products.html page's populateProducts function will handle filtering by query parameter
    });


    /**
     * Shows search suggestions based on the user's query.
     * @param {string} query The user's search query.
     */
    function showSuggestions(query) {
        const suggestions = [];
        const lowerCaseQuery = query.toLowerCase(); // For keyword matching (internal logic)

        // 1. Check for exact product title match (case-sensitive)
        for (const productId in allProducts) {
            const product = allProducts[productId];
            if (product.title === query) {
                suggestions.push({ type: 'product', id: product.id, name: product.title });
            }
        }

        // 2. Check for exact category name match (case-sensitive)
        for (const categoryKey in productCategories) {
            if (productCategories[categoryKey] === query || categoryKey === query) {
                // Prevent duplicate if a product title is same as category display name
                if (!suggestions.some(s => s.name === productCategories[categoryKey])) {
                     suggestions.push({ type: 'category', id: categoryKey, name: productCategories[categoryKey] });
                }
            }
        }

        // 3. Add products whose titles or keywords contain the query (case-sensitive)
        for (const productId in allProducts) {
            const product = allProducts[productId];
            // If already added as exact title match, skip
            if (suggestions.some(s => s.type === 'product' && s.id === product.id)) {
                continue;
            }

            // Check if query is in product title (case-sensitive)
            if (product.title.includes(query)) {
                suggestions.push({ type: 'product', id: product.id, name: product.title });
                continue; // Move to next product after finding a title match
            }
            
            // Check if query is in product keywords (case-sensitive)
            if (product.keywords && product.keywords.some(keyword => keyword.includes(query))) {
                suggestions.push({ type: 'product', id: product.id, name: product.title });
            }
        }

        // 4. Add categories whose display names contain the query (case-sensitive)
        for (const categoryKey in productCategories) {
            const categoryName = productCategories[categoryKey];
            // If already added as exact match, skip
            if (suggestions.some(s => s.type === 'category' && s.id === categoryKey)) {
                continue;
            }
            // If query is in category display name (case-sensitive)
            if (categoryName.includes(query)) {
                suggestions.push({ type: 'category', id: categoryKey, name: categoryName });
            }
        }
        
        renderSuggestions(suggestions);
    }

    /**
     * Renders the given suggestions in the suggestions container.
     * @param {Array<Object>} suggestions An array of suggestion objects ({type, id, name}).
     */
    function renderSuggestions(suggestions) {
        searchSuggestionsContainer.innerHTML = '';
        if (suggestions.length === 0) {
            hideSuggestions();
            return;
        }

        const suggestionList = document.createElement('ul');
        suggestionList.style.cssText = `
            list-style: none;
            padding: 0;
            margin: 0;
        `;

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.className = 'search-suggestion-item';
            listItem.style.cssText = `
                padding: 10px 15px;
                cursor: pointer;
                border-bottom: 1px solid #333; /* Darker border for dark mode */
                color: var(--text-light); /* Light text for suggestions */
                transition: background-color 0.2s ease;
            `;
            listItem.textContent = suggestion.name;

            // Hover effect
            listItem.addEventListener('mouseenter', () => {
                listItem.style.backgroundColor = '#333'; // Slightly lighter dark background on hover
            });
            listItem.addEventListener('mouseleave', () => {
                listItem.style.backgroundColor = 'transparent';
            });

            // Click handler for suggestions
            listItem.addEventListener('click', function() {
                searchInput.value = suggestion.name; // Populate search bar with selected suggestion
                hideSuggestions(); // Hide suggestions after selection

                if (suggestion.type === 'product') {
                    handleProductClick(suggestion.id);
                } else if (suggestion.type === 'category') {
                    handleCategoryClick(suggestion.id);
                }
            });
            suggestionList.appendChild(listItem);
        });

        searchSuggestionsContainer.appendChild(suggestionList);
        searchSuggestionsContainer.style.display = 'block';
    }

    /**
     * Hides the search suggestions container.
     */
    function hideSuggestions() {
        searchSuggestionsContainer.style.display = 'none';
    }

    /**
     * Handles navigation to a product detail page.
     * @param {string} productId The ID of the product to view.
     */
    function handleProductClick(productId) {
        localStorage.setItem('selectedProduct', productId);
        window.location.href = 'product-detail.html';
    }

    /**
     * Handles navigation to the products page with a specific category filter.
     * @param {string} categoryId The ID of the category to filter by.
     */
    function handleCategoryClick(categoryId) {
        // Navigate to products.html and pass the category as a query parameter
        // The products.html page will need to read this parameter and filter accordingly.
        window.location.href = `products.html?category=${categoryId}`;
    }

    // Handle initial search query from URL on products.html (if applicable)
    // This part should be in products.html script block, but adding here for completeness
    // and as an example of how search.js can expose its data/logic if needed.
    // However, for the user's request, this part will typically be consumed by products.html itself.
    // For this demonstration, we'll keep it within search.js to show its intended interaction.
    if (window.location.pathname.includes('products.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('query');
        const categoryFilter = urlParams.get('category');

        if (searchQuery) {
            // Find product or category that exactly matches the search query (case-sensitive)
            const exactProductMatch = Object.values(allProducts).find(p => p.title === searchQuery);
            const exactCategoryMatchKey = Object.keys(productCategories).find(catKey => productCategories[catKey] === searchQuery);

            if (exactProductMatch) {
                // If it's an exact product title match, ideally we'd show only that product
                // For this scenario, we'll filter by its category first, then if only one product, highlight it.
                if (typeof populateProducts === 'function') {
                    populateProducts(exactProductMatch.category); // Filter by category
                    // Optional: Add logic to scroll to or highlight the specific product if only one is shown
                }
            } else if (exactCategoryMatchKey) {
                // If it's an exact category match, filter by category
                if (typeof populateProducts === 'function') {
                    populateProducts(exactCategoryMatchKey);
                    // Also update the active filter button
                    const activeBtn = document.querySelector(`.filter-btn[onclick*="filterProducts('${exactCategoryMatchKey}')"]`);
                    if (activeBtn) {
                        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                        activeBtn.classList.add('active');
                    }
                }
            } else {
                // If it's a general search query, filter products based on title or keywords
                if (typeof populateProducts === 'function') {
                    // This function will need to be modified in products.html to accept a search query
                    // For now, it will just show all products and the user needs to refine.
                    // A more advanced approach would be to update populateProducts in products.html
                    // to filter by query directly.
                    populateProductsBySearchQuery(searchQuery);
                    // Reset filter buttons if a direct query was made
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                }
            }
            // Populate the search input with the query
            searchInput.value = searchQuery;
        } else if (categoryFilter) {
            // If only a category filter is present, filter by category
            if (typeof populateProducts === 'function') {
                populateProducts(categoryFilter);
                // Also update the active filter button
                const activeBtn = document.querySelector(`.filter-btn[onclick*="filterProducts('${categoryFilter}')"]`);
                if (activeBtn) {
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    activeBtn.classList.add('active');
                }
            }
        }
    }

    /**
     * This function should exist in products.html to dynamically filter products
     * based on a general search query that doesn't directly map to a product ID or category.
     * We define a placeholder here for clarity of interaction.
     * @param {string} query The search query.
     */
    function populateProductsBySearchQuery(query) {
        const productsGrid = document.getElementById('products-grid');
        productsGrid.innerHTML = ''; // Clear existing products
        const lowerCaseQuery = query.toLowerCase(); // For case-insensitive keyword search within products

        let foundProducts = false;

        Object.keys(allProducts).forEach(productId => {
            const product = allProducts[productId];
            // Check if query is in product title (case-sensitive as per user request)
            const titleMatches = product.title.includes(query);
            // Check if query is in keywords (case-sensitive as per user request)
            const keywordMatches = product.keywords && product.keywords.some(keyword => keyword.includes(query));

            if (titleMatches || keywordMatches) {
                foundProducts = true;
                const productCardHTML = `
                    <div class="col-lg-4 col-md-6 product-item" data-category="${product.category}" data-product-id="${productId}">
                        <div class="product-card">
                            <img src="https://placehold.co/400x280/FFD700/000000?text=${product.title.replace(/\s/g, '%20')}" alt="${product.title}" class="product-image">
                            <div class="product-info">
                                <h3 class="product-title">${product.title}</h3>
                                <p class="product-description">Discover the amazing qualities of ${product.title}.</p> <!-- Placeholder description -->
                                <div class="product-rating">
                                    <div class="stars">
                                        ${getStarsHTML(product.rating || 4.5)} <!-- Using a default rating if not available -->
                                    </div>
                                    <span class="rating-text">(${product.rating || 4.5}) ${product.reviews || 0} reviews</span>
                                </div>
                                <div class="product-price">PKR ${product.variants ? product.variants[0].price : 'N/A'}</div>
                                <div class="product-controls">
                                    <button class="add-to-cart-btn" onclick="openProductOptionsModal('${productId}')">
                                        <i class="fas fa-cart-plus"></i> Add to Cart
                                    </button>
                                </div>
                                <button class="view-details-btn" onclick="viewProduct('${productId}')">View Details</button>
                            </div>
                        </div>
                    </div>
                `;
                productsGrid.insertAdjacentHTML('beforeend', productCardHTML);
            }
        });

        if (!foundProducts) {
            productsGrid.innerHTML = '<p class="text-center w-100 mt-5" style="color: #ccc;">No products found matching your search.</p>';
        }

        // Re-observe product cards for animation after populating if needed in products.html
        if (typeof observeProductCards === 'function') {
             observeProductCards();
        }
    }

    // Helper function to get stars HTML (copied from products.html for self-containment if this were standalone)
    function getStarsHTML(rating) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            const starClass = i <= Math.floor(rating) ? 'fas fa-star' : (i - 0.5 <= rating ? 'fas fa-star-half-alt' : 'far fa-star');
            starsHTML += `<i class="${starClass}"></i>`;
        }
        return starsHTML;
    }
});

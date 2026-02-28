// KARMA E-Commerce Application
(function() {
    'use strict';

    // ============================================
    // State
    // ============================================
    const state = {
        cart: JSON.parse(localStorage.getItem('karma_cart')) || [],
        currentFilter: 'all',
        selectedProduct: null,
        selectedSize: null,
        selectedColor: null
    };

    // ============================================
    // DOM Elements
    // ============================================
    const elements = {
        loader: document.getElementById('loader'),
        header: document.getElementById('header'),
        menuToggle: document.getElementById('menuToggle'),
        mobileMenu: document.getElementById('mobileMenu'),
        nav: document.getElementById('nav'),
        cartToggle: document.getElementById('cartToggle'),
        cartCount: document.getElementById('cartCount'),
        cartDrawer: document.getElementById('cartDrawer'),
        cartClose: document.getElementById('cartClose'),
        cartItems: document.getElementById('cartItems'),
        cartTotal: document.getElementById('cartTotal'),
        checkoutBtn: document.getElementById('checkoutBtn'),
        searchToggle: document.getElementById('searchToggle'),
        searchModal: document.getElementById('searchModal'),
        searchClose: document.getElementById('searchClose'),
        searchInput: document.getElementById('searchInput'),
        searchResults: document.getElementById('searchResults'),
        productsGrid: document.getElementById('productsGrid'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        productModal: document.getElementById('productModal'),
        modalImage: document.getElementById('modalImage'),
        modalCategory: document.getElementById('modalCategory'),
        modalTitle: document.getElementById('modalTitle'),
        modalPrice: document.getElementById('modalPrice'),
        modalDescription: document.getElementById('modalDescription'),
        sizeButtons: document.getElementById('sizeButtons'),
        colorButtons: document.getElementById('colorButtons'),
        addToCartBtn: document.getElementById('addToCartBtn'),
        newsletterForm: document.getElementById('newsletterForm'),
        toast: document.getElementById('toast')
    };

    // ============================================
    // Initialize
    // ============================================
    function init() {
        // Hide loader
        setTimeout(() => {
            elements.loader.classList.add('hidden');
        }, 1800);

        // Render products
        renderProducts();

        // Update cart UI
        updateCartUI();

        // Bind events
        bindEvents();

        // Initialize scroll effects
        initScrollEffects();
    }

    // ============================================
    // Events
    // ============================================
    function bindEvents() {
        // Mobile menu
        elements.menuToggle.addEventListener('click', toggleMobileMenu);

        // Close mobile menu on link click
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Cart
        elements.cartToggle.addEventListener('click', openCart);
        elements.cartClose.addEventListener('click', closeCart);

        // Search
        elements.searchToggle.addEventListener('click', openSearch);
        elements.searchClose.addEventListener('click', closeSearch);
        elements.searchInput.addEventListener('input', handleSearch);

        // Filters
        elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => handleFilter(btn));
        });

        // Product modal
        elements.productModal.querySelector('.modal-overlay').addEventListener('click', closeProductModal);
        elements.productModal.querySelector('.modal-close').addEventListener('click', closeProductModal);
        elements.addToCartBtn.addEventListener('click', handleAddToCart);

        // Newsletter
        elements.newsletterForm.addEventListener('submit', handleNewsletter);

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeProductModal();
                closeCart();
                closeSearch();
                closeMobileMenu();
            }
        });
    }

    // ============================================
    // Scroll Effects
    // ============================================
    function initScrollEffects() {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Header background
            if (currentScroll > 100) {
                elements.header.classList.add('scrolled');
            } else {
                elements.header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });

        // Intersection Observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.product-card, .lookbook-item').forEach(el => {
            observer.observe(el);
        });
    }

    // ============================================
    // Mobile Menu
    // ============================================
    function toggleMobileMenu() {
        elements.mobileMenu.classList.toggle('active');
        elements.menuToggle.classList.toggle('active');
        document.body.style.overflow = elements.mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMobileMenu() {
        elements.mobileMenu.classList.remove('active');
        elements.menuToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ============================================
    // Products
    // ============================================
    function renderProducts(filter = 'all') {
        const filteredProducts = filter === 'all'
            ? PRODUCTS
            : PRODUCTS.filter(p => p.category === filter);

        elements.productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${product.new ? '<span class="product-badge">New</span>' : ''}
                    ${product.limited ? '<span class="product-badge" style="background: #c97b6b;">Limited</span>' : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">$${product.price}</p>
                </div>
            </div>
        `).join('');

        // Add click handlers
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                const productId = parseInt(card.dataset.productId);
                openProductModal(productId);
            });
        });
    }

    function handleFilter(btn) {
        const filter = btn.dataset.filter;
        state.currentFilter = filter;

        elements.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        renderProducts(filter);
    }

    // ============================================
    // Product Modal
    // ============================================
    function openProductModal(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        state.selectedProduct = product;
        state.selectedSize = product.sizes[0];
        state.selectedColor = product.colors[0];

        elements.modalImage.src = product.image;
        elements.modalImage.alt = product.name;
        elements.modalCategory.textContent = product.type;
        elements.modalTitle.textContent = product.name;
        elements.modalPrice.textContent = `$${product.price}`;
        elements.modalDescription.textContent = product.description;

        // Render sizes
        elements.sizeButtons.innerHTML = product.sizes.map((size, i) => `
            <button class="size-btn ${i === 0 ? 'active' : ''}" data-size="${size}">${size}</button>
        `).join('');

        // Render colors
        elements.colorButtons.innerHTML = product.colors.map((color, i) => `
            <button class="color-btn ${i === 0 ? 'active' : ''}" data-color="${color}">${color}</button>
        `).join('');

        // Bind size/color selection
        elements.sizeButtons.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                elements.sizeButtons.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.selectedSize = btn.dataset.size;
            });
        });

        elements.colorButtons.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                elements.colorButtons.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.selectedColor = btn.dataset.color;
            });
        });

        elements.productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
        elements.productModal.classList.remove('active');
        document.body.style.overflow = '';
        state.selectedProduct = null;
    }

    // ============================================
    // Cart
    // ============================================
    function openCart() {
        elements.cartDrawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        elements.cartDrawer.classList.remove('active');
        document.body.style.overflow = '';
    }

    function handleAddToCart() {
        if (!state.selectedProduct) return;

        const item = {
            id: `${state.selectedProduct.id}-${state.selectedSize}-${state.selectedColor}`,
            productId: state.selectedProduct.id,
            name: state.selectedProduct.name,
            price: state.selectedProduct.price,
            size: state.selectedSize,
            color: state.selectedColor,
            image: state.selectedProduct.image,
            quantity: 1
        };

        const existingIndex = state.cart.findIndex(i => i.id === item.id);

        if (existingIndex > -1) {
            state.cart[existingIndex].quantity++;
        } else {
            state.cart.push(item);
        }

        saveCart();
        updateCartUI();
        closeProductModal();
        showToast('Added to cart');

        setTimeout(() => openCart(), 300);
    }

    function removeFromCart(itemId) {
        state.cart = state.cart.filter(item => item.id !== itemId);
        saveCart();
        updateCartUI();
    }

    function updateCartUI() {
        const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        elements.cartCount.textContent = totalItems;

        if (state.cart.length === 0) {
            elements.cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        } else {
            elements.cartItems.innerHTML = state.cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <p class="cart-item-variant">${item.size} / ${item.color}</p>
                        <p class="cart-item-price">$${item.price} x ${item.quantity}</p>
                        <button class="cart-item-remove" data-item-id="${item.id}">Remove</button>
                    </div>
                </div>
            `).join('');

            // Bind remove buttons
            elements.cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', () => removeFromCart(btn.dataset.itemId));
            });
        }

        elements.cartTotal.textContent = `$${totalPrice}`;
    }

    function saveCart() {
        localStorage.setItem('karma_cart', JSON.stringify(state.cart));
    }

    // ============================================
    // Search
    // ============================================
    function openSearch() {
        elements.searchModal.classList.add('active');
        elements.searchInput.focus();
        document.body.style.overflow = 'hidden';
    }

    function closeSearch() {
        elements.searchModal.classList.remove('active');
        elements.searchInput.value = '';
        elements.searchResults.innerHTML = '';
        document.body.style.overflow = '';
    }

    function handleSearch(e) {
        const query = e.target.value.toLowerCase().trim();

        if (query.length < 2) {
            elements.searchResults.innerHTML = '';
            return;
        }

        const results = PRODUCTS.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            elements.searchResults.innerHTML = '<p style="opacity: 0.5;">No products found</p>';
        } else {
            elements.searchResults.innerHTML = results.map(p => `
                <div class="search-result-item" data-product-id="${p.id}" style="display: flex; gap: 20px; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1); cursor: pointer;">
                    <div style="width: 60px; height: 80px; background: #141414;">
                        <img src="${p.image}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div>
                        <h4 style="font-size: 14px; margin-bottom: 4px;">${p.name}</h4>
                        <p style="font-size: 13px; opacity: 0.6;">$${p.price}</p>
                    </div>
                </div>
            `).join('');

            elements.searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    closeSearch();
                    openProductModal(parseInt(item.dataset.productId));
                });
            });
        }
    }

    // ============================================
    // Newsletter
    // ============================================
    function handleNewsletter(e) {
        e.preventDefault();
        const email = e.target.querySelector('input').value;

        // Simulate API call
        showToast('Thanks for subscribing!');
        e.target.reset();
    }

    // ============================================
    // Toast
    // ============================================
    function showToast(message) {
        elements.toast.querySelector('.toast-message').textContent = message;
        elements.toast.classList.add('active');

        setTimeout(() => {
            elements.toast.classList.remove('active');
        }, 3000);
    }

    // ============================================
    // Start
    // ============================================
    document.addEventListener('DOMContentLoaded', init);

})();

// ============================================
// Lookbook Hover-to-Video
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const lookbookItems = document.querySelectorAll('.lookbook-item');
    
    lookbookItems.forEach(function(item) {
        const video = item.querySelector('.lookbook-hover-video');
        if (!video) return;
        
        item.addEventListener('mouseenter', function() {
            video.currentTime = 0;
            video.play().catch(function() {});
            item.classList.add('is-playing');
        });
        
        item.addEventListener('mouseleave', function() {
            video.pause();
            video.currentTime = 0;
            item.classList.remove('is-playing');
        });
        
        // Mobile: tap to play/pause
        item.addEventListener('touchstart', function(e) {
            if (item.classList.contains('is-playing')) {
                video.pause();
                item.classList.remove('is-playing');
            } else {
                video.currentTime = 0;
                video.play().catch(function() {});
                item.classList.add('is-playing');
            }
        }, { passive: true });
    });
});

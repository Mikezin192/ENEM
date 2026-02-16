class DomCache {
    constructor() {
        this.cache = {};
    }

    // Get element by selector and cache it
    getElement(selector) {
        if (this.cache[selector]) {
            return this.cache[selector];
        }
        const element = document.querySelector(selector);
        this.cache[selector] = element;
        return element;
    }

    // Clear cache for a specific selector
    clearCache(selector) {
        delete this.cache[selector];
    }

    // Clear the entire cache
    clearAllCache() {
        this.cache = {};
    }
}
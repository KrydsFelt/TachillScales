(() => {
    const THRESHOLD = 0.12;

    function init() {
        const els = document.querySelectorAll('[data-animate]');
        if (!els.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = el.dataset.delay || 0;
                    setTimeout(() => el.classList.add('anim-visible'), delay);
                    observer.unobserve(el);
                }
            });
        }, { threshold: THRESHOLD });

        els.forEach(el => observer.observe(el));
    }

    // Run on initial load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Re-run after Blazor navigation (enhanced navigation)
    document.addEventListener('enhancedload', init);

    // Fallback: re-observe on any DOM mutation (Blazor re-renders)
    const mutationObserver = new MutationObserver(() => {
        const unobserved = document.querySelectorAll('[data-animate]:not(.anim-observed)');
        if (!unobserved.length) return;

        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = el.dataset.delay || 0;
                    setTimeout(() => el.classList.add('anim-visible'), delay);
                    io.unobserve(el);
                }
            });
        }, { threshold: THRESHOLD });

        unobserved.forEach(el => {
            el.classList.add('anim-observed');
            io.observe(el);
        });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
})();

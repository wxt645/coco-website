/* =========================================================
   寻梦环游记 · Coco  ——  共享脚本（花瓣动画 + 滚动渐入）
   ========================================================= */
(function () {
    // 万寿菊花瓣飘落
    var petalLayer = document.querySelector('.petal-layer');
    if (petalLayer) {
        setInterval(function () {
            var petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.animationDuration = (Math.random() * 5 + 6) + 's';
            var size = Math.random() * 10 + 8;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.opacity = Math.random() * 0.5 + 0.3;
            petalLayer.appendChild(petal);
            setTimeout(function () { petal.remove(); }, 13000);
        }, 600);
    }

    // 卡片滚动渐入
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
    });
})();

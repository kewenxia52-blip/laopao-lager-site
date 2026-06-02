/**
 * 老炮拉格 · 京鲜酿造 全局脚本
 * 含：移动端汉堡菜单、滚动导航阴影、滚动揭示动画、页面速度埋点
 */
(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {

    // ===== 1. 移动端汉堡菜单 =====
    const nav = document.getElementById('navbar');
    if (!nav) return;
    const navLinks = nav.querySelector('.nav-links');
    if (!navLinks) return;

    // 创建汉堡按钮
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', '菜单');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    nav.insertBefore(hamburger, navLinks);

    hamburger.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('nav-open');
      document.body.classList.toggle('menu-open');
    });

    // 点击菜单项后关闭
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('nav-open');
        document.body.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // 点击页面其他区域关闭菜单
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && navLinks.classList.contains('nav-open')) {
        navLinks.classList.remove('nav-open');
        document.body.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // ===== 2. 滚动导航阴影 =====
    window.addEventListener('scroll', function() {
      if (window.scrollY > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

    // ===== 3. 滚动揭示动画 =====
    var reveals = document.querySelectorAll('.reveal');
    if (reveals.length && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      reveals.forEach(function(el) { observer.observe(el); });
    } else if (reveals.length) {
      // Fallback: 直接显示
      reveals.forEach(function(el) { el.classList.add('visible'); });
    }

    // ===== 4. 图片懒加载增强 =====
    if ('loading' in HTMLImageElement.prototype) return; // 原生支持，不用 polyfill
    var lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if (!lazyImages.length || !('IntersectionObserver' in window)) return;
    var lazyObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          img.removeAttribute('loading');
          lazyObserver.unobserve(img);
        }
      });
    });
    lazyImages.forEach(function(img) { lazyObserver.observe(img); });
  });
})();

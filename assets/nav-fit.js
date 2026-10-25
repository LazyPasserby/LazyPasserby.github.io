/* 顶栏兜底：一行实在放不下时，把「联系我」按钮藏起来（邮箱在「关于我」页里仍然有）。
   触发条件是真实的溢出，不改任何内容，只是少显示一个按钮。 */
(function () {
  function fit() {
    var row = document.querySelector('.nav-row');
    if (!row) return;
    row.classList.remove('tight');
    /* 逐个子元素累加宽度，比整行的 scrollWidth 更灵敏
       （overflow 时 scrollWidth 反而不长） */
    var kids = [].slice.call(row.children);
    var need = 0;
    kids.forEach(function (el) {
      var st = getComputedStyle(el);
      if (st.display === 'none') return;
      need += el.getBoundingClientRect().width;
    });
    var gap = parseFloat(getComputedStyle(row).columnGap) || 0;
    need += gap * Math.max(0, kids.length - 1);
    if (need > row.clientWidth + 2) row.classList.add('tight');
  }
  window.addEventListener('load', fit);
  window.addEventListener('resize', fit);
  fit();
})();
/* 顶栏兜底：一行实在放不下时，把「联系我」按钮藏起来（邮箱在「关于我」页里仍然有）。
   触发条件是真实的溢出，不改任何内容，只是少显示一个按钮。 */
(function () {
  function fit() {
    var row = document.querySelector('.nav-row');
    if (!row) return;
    row.classList.remove('tight');
    if (row.scrollWidth > row.clientWidth + 2) row.classList.add('tight');
  }
  window.addEventListener('load', fit);
  window.addEventListener('resize', fit);
  fit();
})();


(function () {
  const TARGET_TEXT = 'Kontaktiere uns';
  const NEW_TEXT = 'Kontaktiere mich';

  function replaceButtonText() {
    document.querySelectorAll('button').forEach(btn => {
      // 精确匹配文本，避免误伤
      if (btn.textContent && btn.textContent.trim() === TARGET_TEXT) {
        btn.textContent = NEW_TEXT;
      }
    });
  }

  // 页面加载完成后先跑一次
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replaceButtonText);
  } else {
    replaceButtonText();
  }

  // 监听 OpenWidget 后续动态渲染
  const observer = new MutationObserver(() => {
    replaceButtonText();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();


document.querySelectorAll('.service-menu').forEach(menu => {
  menu.addEventListener('keydown', event => {
    if (event.key === 'Escape') { menu.open = false; menu.querySelector('summary').focus(); }
  });
  document.addEventListener('click', event => { if (!menu.contains(event.target)) menu.open = false; });
});
const copyButton = document.querySelector('.copy-message');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const text = document.querySelector('.message-template').textContent.trim();
    const status = document.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = 'Đã sao chép. Mở Zalo, dán và điền thông tin của bạn.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.querySelector('.message-template'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Đã chọn mẫu tin. Dùng lệnh Sao chép của trình duyệt.';
    }
  });
}

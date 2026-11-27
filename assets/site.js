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

const menuButton=document.querySelector('.menu-toggle');
const mobileNav=document.querySelector('.navigation');
function closeMainMenu(){mobileNav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');}
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));mobileNav.classList.toggle('is-open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuButton?.getAttribute('aria-expanded')==='true'){closeMainMenu();menuButton.focus();}});

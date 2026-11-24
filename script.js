const btn = document.getElementById('theme-toggle');
const root = document.documentElement;

// نقرأ الاختيار المحفوظ من آخر زيارة
let saved = null;
try {
  saved = localStorage.getItem('theme');
} catch (e) {}

if (saved === 'dark') {
  root.setAttribute('data-theme', 'dark');
  btn.textContent = '☀️';
}

btn.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';

  if (isDark) {
    root.removeAttribute('data-theme');
    btn.textContent = '🌙';
  } else {
    root.setAttribute('data-theme', 'dark');
    btn.textContent = '☀️';
  }

  try {
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  } catch (e) {}
});
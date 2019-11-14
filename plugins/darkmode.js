export default function() {
  const el = document.body
  if (window.localStorage.getItem('auth.dark_mode') === '1') {
    el.classList.add('dark-mode')
  } else {
    el.classList.remove('dark-mode')
  }
}

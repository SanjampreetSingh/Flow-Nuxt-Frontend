/* eslint-disable */
export default function() {
    const el = document.body

    //  If browser does not support the `prefers-color-scheme` media query.
    if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
        if (window.localStorage.getItem('auth.dark_mode') === '1') {
            el.classList.add('dark-mode')
        } else {
            el.classList.remove('dark-mode')
        }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    //If browser support the `prefers-color-scheme` media query.
    {
        if (window.localStorage.getItem('auth.dark_mode') === '1') {
            el.classList.add('dark-mode')
        } else if (window.localStorage.getItem('auth.dark_mode') === '0') {
            el.classList.remove('dark-mode')
        } else {
            el.classList.add('dark-mode')
        }
    } else {
        el.classList.remove('dark-mode')
    }
}

// This.darkmode pending
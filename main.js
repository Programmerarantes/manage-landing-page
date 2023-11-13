const primaryHeader = document.querySelector('.primary-header')
const navTogggle = document.querySelector('.mobile-nav-toggle')
const primaryNav = document.querySelector('.primary-navigation')

navTogggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible') 
    ? navTogggle.setAttribute('aria-expaned', false) 
    : navTogggle.setAttribute('aria-expaned', true)
    primaryNav.toggleAttribute('data-visible')
    primaryHeader.toggleAttribute('data-overlay')
})
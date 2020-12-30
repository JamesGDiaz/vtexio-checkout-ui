// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.

console.log('Template by FG')

import './scripts/checkout6-custom/header'
import './scripts/checkout6-custom/footer'
import './scripts/checkout6-custom/steps'
import './scripts/checkout6-custom/verification-checkboxes'


$(window).on('load', function () {
  const waitForReact = setInterval(() => {
    if (window.React && window.ReactDOM) {
      clearInterval(waitForReact)
      $(window).trigger('reactReady')
    }
  }, 25)
})

$(window).on('load', function () {
  const waitForVtexJs = setInterval(() => {
    if (window.vtexjs) {
      clearInterval(waitForVtexJs)
      $(window).trigger('vtexjsReady')
    }
  }, 25)
})

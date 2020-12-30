'use strict'
import Steps from './components/react/Steps.jsx'

$(window).on('reactReady', function () {
  const e = React.createElement
  const domContainer = document.querySelector('#checkout-custom-content-top-1')
  ReactDOM.render(e(Steps), domContainer)
})

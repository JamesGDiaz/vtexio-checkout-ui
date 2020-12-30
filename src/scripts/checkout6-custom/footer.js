'use strict'
import Footer from './components/react/Footer.jsx'

$(window).on('reactReady', function () {
  const e = React.createElement
  const domContainer = document.querySelector('.checkout.footer')
  ReactDOM.render(e(Footer), domContainer)
})

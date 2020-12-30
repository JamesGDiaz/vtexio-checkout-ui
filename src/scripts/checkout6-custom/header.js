'use strict'
import Header from './components/react/Header.jsx'

$(window).on('reactReady', function () {
  const e = React.createElement
  const domContainer = document.querySelector('.checkout.header')
  ReactDOM.render(e(Header), domContainer)
})

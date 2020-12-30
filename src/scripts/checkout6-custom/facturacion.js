'use strict'
import Facturacion from './components/react/Facturacion/Facturacion.jsx'

$(window).on('reactReady', function () {
  const e = React.createElement
  const domContainer = document.getElementById('checkout-custom-content-bottom-1')
  ReactDOM.render(e(Facturacion), domContainer)
})

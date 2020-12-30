import React, { Component } from 'react'
import classNames from 'classnames'

export default class Steps extends Component {
  constructor() {
    super()
    this.state = { hash: window.location.hash }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ hash: window.location.hash })
    })
  }

  highlightStep(step) {
    const currentStep = this.state.hash.replace('#/', '')
    if (step.indexOf(currentStep) > -1) {
      return true
    }
  }

  render() {
    return (
      <div className="custom-component step-indicator-container">
        <div className={classNames('step-indicator', { highlight: this.highlightStep(['cart']) })}>
          <span>1 - </span>
          <span>Carrito de Compra</span>
        </div>
        <div
          className={classNames('step-indicator', {
            highlight: this.highlightStep(['profile', 'shipping', 'payment']),
          })}
        >
          <span>2 - </span>
          <span>Identificación, Envío y Pago</span>
        </div>
        <div className={classNames('step-indicator', { highlight: this.highlightStep(['confirm']) })}>
          <span>3 - </span>
          <span>Confirmación</span>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="logo">
          <a href="/" title="Home">
            <img src="https://vtex.com/wp-content/themes/VTEXTheme/v2/images/base/vtex.svg" alt="Logo"/>
            <p>
              <strong>Vtex Checkout Template</strong>
            </p>
          </a>
        </div>
        <div style={{ flexGrow: 1 }}></div>
        <div className="other">
           
        </div>
      </>
    )
  }
}

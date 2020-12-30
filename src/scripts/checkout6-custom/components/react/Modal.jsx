import React from 'react'
import classNames from 'classnames'

export default function Modal({ handleClose, isOpen, children, title }) {
  return (
    <div className={isOpen ? 'modal display-block' : 'modal display-none'}>
      <section className="modal-main">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={handleClose}>close</button>
        </div>
        {children}
      </section>
    </div>
  )
}

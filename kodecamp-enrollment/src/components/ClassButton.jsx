import React, { Component } from 'react'

class ClassButton extends Component {
  render() {
    const { title, onClick, className = '' } = this.props
    return (
      <button className={`btn ${className}`} onClick={onClick}>
        {title}
      </button>
    )
  }
}
export default ClassButton

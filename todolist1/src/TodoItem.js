import React, { Component } from 'react'

export default class TodoItem extends Component {

  render() {
    const { content, index, deleteItem } = this.props
    return (
      <li onClick={() => deleteItem(index)}>
        {content}
      </li>
    )
  }
}

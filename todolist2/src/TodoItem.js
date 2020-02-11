import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class TodoItem extends Component {

  render() {
    const { content } = this.props
    return (
      <li onClick={this.handleClick}>
        {content}
      </li>
    )
  }

  handleClick = () => {
    const { index, deleteItem } = this.props
    deleteItem(index)
  }
}

//限定父元素传过来的值的类型
TodoItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {

}

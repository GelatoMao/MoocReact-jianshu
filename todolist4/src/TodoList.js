import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'


export default class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    //store里面的数据只要发生改变，就调用里面函数
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <div style={{ marginTop: 10, marginLeft: 10 }}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: 300, marginRight: 10 }}
            onChange={(e) => this.handleInputChange(e)}
          />
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{ marginTop: 10, width: 300 }}
          bordered
          dataSource={this.state.list} //页面渲染的内容
          renderItem={(item, index) => (
            // <List.Item onClick={(index) => this.handleItemDelete(index)}>{item}</List.Item>
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>
          )}
        />
      </div>

    )
  }

  handleInputChange = (e) => {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    //一旦store接收到了action,会自动把reducer和action传递给reducer
    store.dispatch(action)
  }

  handleBtnClick = () => {
    const action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action)
  }

  handleItemDelete = (index) => {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action)
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }
}

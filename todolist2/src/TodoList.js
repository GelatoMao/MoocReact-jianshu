import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

//TodoList类继承React.Component类 
export default class TodoList extends Component {

  constructor(props) {
    //将父类的构造函数调用一次
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment >
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            //onChange={e => this.handleInputChange(e)}
            onChange={this.handleInputChange}
            //构建了一个ref引用，这个引用叫this.input,它指向input对应的dom结点
            ref={(input) => { this.input = input }}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            //让UI组件更加简洁
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    )
  }

  getTodoItem = () => {
    //注意这边有return
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  // handleInputChange = e => {
  //用e.target获取到事件对应的元素，也就是dom结点  也可以用ref 但是不建议使用ref
  //     const value = e.target.value
  //     this.setState(() => ({
  //         inputValue: value
  //     }))
  // }

  handleInputChange = () => {
    this.setState(() => ({
      //使用ref
      inputValue: this.input.value
    }))
  }

  handleBtnClick = () => {
    //prevState=this.state
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete = index => {
    //immutable
    //state不允许我们做任何改变 不能直接改变state,如果要改可以拷贝一份
    this.setState((prevState) => {
      //拷贝一份list
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
}

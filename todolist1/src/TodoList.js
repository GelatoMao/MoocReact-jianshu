import React, { Component, Fragment } from 'react'
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
      //Fragment充当占位符
      <Fragment >
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            //2个e都要加
            onChange={(e) => this.handleInputChange(e)}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => this.handleItemDelete(index)}
                  dangerouslySetInnerHTML={{ __html: item }}
                >
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete = index => {
    //immutable
    //state不允许我们做任何改变 不能直接改变state,如果要改可以拷贝一份
    //拷贝一份list
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

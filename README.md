# react-commentAp
react-小书实战例子


* componentWillMount 类比vue的created

* componentDidMount 可以获取dom元素，相当于vue 的 mounted

* 高阶组件： 是一个函数，接受一个组件作为参数，返回一个新组件

  * 可以将重复逻辑抽象出来，类比vue 的mixins

  * 组件之间通过props传递数据

* prop-types库做类型验证: 在子组件里声明

  ```
  import PropTypes from 'prop-types'

  ...
  // static 静态方法，只能通过类调用，不能通过实例调用
  static propTypes = {
    comment:  PropTypes.array
              PropTypes.bool
              PropTypes.func
              PropTypes.number
              PropTypes.object
              PropTypes.string
              PropTypes.node
              PropTypes.element
              ...
  }
  ...
  ```
   * isRequired关键字来强制组件某个参数必须传入
  
* props.children: 获取传给组件的嵌套的jsx结构

* 默认props： defaultProps

  ```
  static defaultProps = {
    comment: []
  }
  ```
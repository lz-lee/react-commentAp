import React, {Component} from 'react'

export default (WrapperComponent, name) => {
  class lodaData extends Component {
    constructor() {
      super()
      this.state = {
        data: null
      }
    }

    componentWillMount() {
      let data = sessionStorage.getItem(name)
      try {
        this.setState({data: JSON.parse(data)})
      } catch(e) {
        this.setState({data})
      }
    }

    saveData = (data) => {
      try {
        sessionStorage.setItem(name, JSON.stringify(data))
      } catch(e) {
        sessionStorage.setItem(name, `${data}`)
      }
    }

    render() {
      return (
        <WrapperComponent 
          data={this.state.data}
          saveData={this.saveData}
          // 传递其他参数
          {...this.props}/>
      )
    }
  }
  return lodaData
}
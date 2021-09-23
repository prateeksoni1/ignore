import { Component } from "react";

class App2 extends Component {

  state = {
    val1: true,
    val2: 123
  }

  // componentWillUnmount() {

  // }

  componentDidMount() {

  }

  handleClick = () => {
    this.setState({
      val1: false
    })
  }

  render() {
    return <h1>ok</h1>
  }
}
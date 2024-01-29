import Display from "./components/Display/Display";
import Navigation from "./components/Navigation/Navigation";
import './App.css';
import { Component } from "react";
import ScrollButton from "./components/ScrollButton/ScrollButton";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      navState: 'Posts',
      data: [],
      sc: true
    }
  }

// новое состояние
// вывести инфу из респонс
// кнопка для скрытия и расскрытия навбара

  changeNavState = (title) => {
    fetch(`https://jsonplaceholder.typicode.com/${title}`)
      .then(response => response.json())
      .then(data => this.setState({
      navState: title,
      data
    }))
    .catch(e => {
      this.setState({
        navState: 'posts',
        data: [],
        sc: true
      })
    })
  }

  componentDidMount() {
    this.changeNavState('posts');
  }

  render() {
    return (
      <div className="container">
        <Navigation changeNav={this.changeNavState} scBut={this.state}/>
        <ScrollButton changeSc={this.changeNavState} scBut={this.state} title={this.state.navState}/>
        <Display heading={this.state} />
      </div>
    );
  }
}
  
export default App;

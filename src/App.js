import Display from "./components/Display/Display";
import Navigation from "./components/Navigation/Navigation";
import './app.css';
import { Component } from "react";
import ScrollButton from "./components/ScrollButton/ScrollButton";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      navState: 'Posts',
      data: []
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
        data: []
      })
    })
  }

  componentDidMount() {
    this.changeNavState('posts');
  }

  render() {
    return (
      <div className="container">
        <Navigation key={this.title} changeNav={this.changeNavState}/>
        <ScrollButton />
        <Display heading={this.state}/>
      </div>
    );
  }
}
  

export default App;

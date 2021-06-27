import React from 'react'
import ReactDOM from 'react-dom'

import './Tabs.css'
import Precautions from './Precautions/Precautions'
import Symptoms from './Symptoms/Symptoms'

const Component = React.Component;

const TAB_DATA = [
  ["Precautions", <Precautions/>],
  ["Symptoms", <Symptoms />],
  // ["Post-Covid", "Post Covid Here"],
];

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }
  
  clickHandler = (e) => {
    this.setState({
      active: parseInt(e.currentTarget.attributes.num.value)
    })
  }
  
  render() {
    let content = "";
    const tabs = TAB_DATA.map(([label, text], i) => {
      content = this.state.active === i ? text : content;  
      return <li 
               className={this.state.active === i ? "tab active" : "tab" } 
               key={label} 
               num={i}
               onClick={this.clickHandler}>
        {label}
      </li>;
    });
    
    return ( 
      <section className="tabs">
        <menu>
          <ul>
            {tabs}
          </ul>
        </menu>
        <div class="content-container">
          {content}
        </div>
      </section>);
  }
}

const App = () => {
  return (
        <Tabs />
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
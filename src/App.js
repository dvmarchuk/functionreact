import React, {Component} from 'react';
import Clock from './components/Clock';

class App extends Component {
  state = {
    clocks: []
  };

  setClock = (e) =>{
      e.preventDefault()
      let offset = +e.target[0].value; //why the +?
      let clock = {
          id: new Date().getTime(),
          offset
      };
      this.state.clocks.push(clock)
      this.setState(this.state);

  }


  render() {
      let {clocks} = this.state;
      return(
        <div>
          <form onSubmit={this.setClock}>
            <input type="number" min={0}/>
            <button>make clock</button>
          </form>
            <h2>world clocks</h2>
            <div>{
                clocks.map(value => <Clock key={value.id} data={value}/>)
            }</div>
        </div>
    )
  }


}

export default App;

/*
deleteClock = (id) => {
  let {clocks} = this.state;
  console.log(clocks);
  let filterClocks = clocks.filter(clock => clock.id !== id);
  clocks = filterClocks;
  this.setState({clocks});

};

setClock = (e) => {
  e.preventDefault();
  let offset = +e.target[0].value;
  console.log(offset);
  let clock = {
    id: new Date().getTime(),
    offset
  };
  this.state.clocks.push(clock);
  this.setState(this.state);

};

render()
{
  let {clocks} = this.state;
  return (
      <div>

        <form onSubmit={this.setClock}>
          <input type="number" min={0}/>
          <button>set clock</button>
        </form>
        <div>
          <h2>world clocks</h2>
          <div>
            {
              clocks.map(clock => <ClockComponent
                  data={clock}
                  key={clock.id}
                  deleteClock={this.deleteClock}

              />)
            }

          </div>

        </div>

      </div>
  );
}*/
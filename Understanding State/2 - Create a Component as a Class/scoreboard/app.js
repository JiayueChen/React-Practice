/*const players = [
  {
    name: "Guil",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
];*/

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
    console.log(props.removePlayer)
    return (
        <div className="player">
              <span className="player-name">
                    <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>✖</button>
                    { props.name }
              </span>

            <Counter />
        </div>
      );
}

class Counter extends React.Component {
    
    
    /*constructor() {
        super()
        this.state = {
          score: 0  
        };
    }*/
    
    
    /* babel create constructor for us */
    state = {
        score: 0
    };

    /*
    incrementScore() {
        this.setState({
            score: this.state.score + 1
        });
    }
    */
    // METHOD 3: error method
    /*incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    }*/

    // callback functions
    /*incrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score + 1
            };
        });
    }*/
    
    // omit return, wrapping body of the function in ()
    incrementScore = () => {
        this.setState( prevState => ({
            score: prevState.score + 1
        }));
    }
    
    // decrement score
    /*decrementScore() {
        this.setState({
            score: this.state.score - 1
        });
    }*/
        
    // callback functions more reliable
    /*decrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score - 1
            };
        });
    }*/
    
    // omit return, wrapping body of the function in ()
    decrementScore = () => {
        this.setState( prevState => ({
            score: prevState.score - 1
        }));
    }
    
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
                <span className="counter-score">{ this.state.score }</span>
                
                {/* METHOD 1:  this refer to the counter component instance */}
                {/* <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button> */}
                
                {/* METHOD 2: error method don't need to bind */}
                {/* <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button> */}
                
                {/* METHOD 3: no () after incrementScore */}
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    } 
    
  
}

class App extends React.Component {
//    player state
    state = {
        players: [
            {
                name: "Guil",
                id: 1
            },
            {
                name: "Treasure",
                id: 2
            },
            {
                name: "Ashley",
                id: 3
            },
            {
                name: "James",
                id: 4
            }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter( p => p.id !== id)
            };
        });
    }
    
    render() {
        return (
            <div className="scoreboard">
                <Header 
                title="Scoreboard" 
                totalPlayers={this.state.players.length} 
                />

                {/* Players list */}
                {this.state.players.map( player =>
                <Player 
                  name={player.name}
                  id={player.id}
                  key={player.id.toString()}
                  removePlayer={this.handleRemovePlayer}        
                />
                )}
            </div>
        );
    }
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
const Header = () => 

{/* if you only have return function, you can remove {} and return */}
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);
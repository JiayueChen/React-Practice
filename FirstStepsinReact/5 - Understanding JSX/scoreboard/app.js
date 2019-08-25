/*const title = <h1>My first React Element!</h1>;

const desc = <p>I just learned how to create a React node and render it into the DOM.</p>;


const header = (
    <header>
        <h1>My first React Element!</h1>
        <p>I just learned how to create a React node and render it into the DOM.</p>
    </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);

console.log(title);*/


// more dynamic
const title = 'first React Element!';
const desc = 'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const name = 'Guil';

const header = (
    <header>
       {/* this is a comment */}
        <h1 id={ myTitleID }>{ name }'s { title }</h1>
        <p className="main-desc">{ desc }</p>
        <input value= { 10*20 }/>
    </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);


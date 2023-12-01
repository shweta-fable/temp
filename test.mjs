 import React from 'https://cdn.skypack.dev/react';
  import ReactDOM from 'https://cdn.skypack.dev/react-dom';

  function App() {
    const [count, setCount] = React.useState(0);

    const clicked = () => {
      setCount(count + 1)
    }

    return (
      <div className='container'>
        <div>Testing</div>
        <button onClick={clicked}>Clicked me times {count}</button>
      </div>
    );
  }

  ReactDOM.render(<App />, document.body);

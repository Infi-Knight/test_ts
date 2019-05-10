import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Button } from 'baseui/button';

const engine = new Styletron();

class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button>hey!</Button>
      </React.Fragment>
    );
  }
}

function App() {
  return (
    <StyletronProvider value={engine}>
      <Example />
    </StyletronProvider>
  );
}
export default App;

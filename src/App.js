import React from 'react';

// Context Providers
import {
  BookContextProvider
} from './contexts';

// Components
import {
  Navbar,
} from './components';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;

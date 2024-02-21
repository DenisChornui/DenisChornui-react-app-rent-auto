import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '.redux/store';
// import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <Provider store={store}>
        <BrowserRouter basename="/react-app-rent-auto">
          {/* <GlobalStyle /> */}
          <App />
        </BrowserRouter>
      </Provider>
      
    
  </React.StrictMode>
);

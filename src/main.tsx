import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
let persistor = persistStore(store)


const rootElement: HTMLElement | null = document.getElementById('root'); //əgər rootElement dəyişəni null deyilsə, yəni getElementById funksiyası HTMLElement qaytarıbsa, createRoot funksiyası düzgün çağırılacaq.
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  );
}



import './App.css';
import Subscribers from './components/Subscribers';
import { Provider } from 'react-redux'; // 리덕스를 리액트에서 사용하기 위해
import store from './redux/store'; //store 파일 import
import Display from './components/Display';
import Views from './components/Views';
function App() {
  return (
    // Provider를 이용해 리덕스 스토어 연결하기
    <Provider store={store}>
      <div className='App'>
        <Subscribers />
        <Views />
        <Display />
      </div>
    </Provider>
  );
}

export default App;

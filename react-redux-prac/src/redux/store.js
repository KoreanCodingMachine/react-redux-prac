import { createStore } from 'redux';

import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;

//reducer가 두개 이상일 경우 combineReducer를 통해 하나로 합칠 필요가 있다.

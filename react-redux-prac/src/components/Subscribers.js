import React from 'react';
import { connect } from 'react-redux'; // redux파일 컴포넌트로 가져오기
import { addSubscriber } from '../redux/index'; // index는 생략이 가능하다.

const Subscribers = ({ count, addSubscriber }) => {
  // console.log(props) -> {countxxx: 370, addSubscriber: ƒ}
  return (
    <div className='items'>
      <h2>구독자 수:{count}</h2>
      <button
        onClick={() => {
          addSubscriber();
        }}
      >
        구독하기!
      </button>
    </div>
  );
};

//store의 state 컴포넌트로 가져오기
const mapStateToProps = ({ subscribers }) => {
  // console.log(state); // {count: 370} -> reducer의 반환값
  // console.log(state.count); // 370
  return {
    count: subscribers.count, // countxxx:props로 컴포넌트에 props로전달
  };
};

//action을 import해서 불러온 후
//dispatchimport { addSubscriber } from './../redux/subscribers/actions';
//dispatch(action)을 이용해서 action을 발생시킨다.
const mapDispatchToProps = (dispatch) => {
  return {
    addSubscriber: () => dispatch(addSubscriber()), // addSubscriber()이라는 함수를 컴포넌트에 props로 전달
  };
};

//mapDispatchToProps를 객체로 매핑시키는 방법
// const mapDispatchToProps = {
//   addSubscriber: addSubscriber, // property와 value값이 같으면 생략할 수 있음
//   addSubscriber // 위 구문과 동치
// };

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers); // connect()로 리덕스와 연결

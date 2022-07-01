import React, { useState } from 'react';
import { connect } from 'react-redux'; // redux파일 컴포넌트로 가져오기
import { addView } from '../redux/index';

const Views = ({ count, addView }) => {
  // console.log(props) -> {countxxx: 370, addSubscriber: ƒ}

  const [number, setNumber] = useState(1);
  return (
    <div className='items'>
      <h2>조회 수:{count}</h2>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          addView(number);
        }}
      >
        조회하기!
      </button>
    </div>
  );
};

//store의 state 컴포넌트로 가져오기
const mapStateToProps = ({ views }) => {
  // console.log(state); // {count: 370} -> reducer의 반환값
  // console.log(state.count); // 370
  return {
    count: views.count, // countxxx:props로 컴포넌트에 props로전달
  };
};

//action을 import해서 불러온 후
//dispatchimport { addSubscriber } from './../redux/subscribers/actions';
//dispatch(action)을 이용해서 action을 발생시킨다.
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addView: () => dispatch(addView()), // addSubscriber()이라는 함수를 컴포넌트에 props로 전달
//   };
// };

// mapDispatchToProps를 객체로 매핑시키는 방법
const mapDispatchToProps = {
  // addSubscriber: addSubscriber, // property와 value값이 같으면 생략할 수 있음
  addView: (number) => addView(number),
};

export default connect(mapStateToProps, mapDispatchToProps)(Views); // connect()로 리덕스와 연결

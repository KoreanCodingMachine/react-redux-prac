import React from 'react';
import { connect } from 'react-redux';

const Display = (props) => {
  return (
    <div>
      <p>구독자 수 : {props.count}</p>
    </div>
  );
};

// store의 state를 컴포넌트로 가져와서
// 해당 컴포넌트의 props로 넘겨준다.
const mapStateToProps = ({ subscribers }) => {
  // console.log(state); // {count: 370} -> reducer의 반환값
  // console.log(state.count); // 370
  return {
    count: subscribers.count, // countxxx:props로 컴포넌트에 props로전달
  };
};

export default connect(mapStateToProps)(Display);

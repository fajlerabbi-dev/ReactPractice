import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Banner = (props) => {

  // const userName = useRef();
  // const userPassword = useRef();

  // const submitForm = () => {
  //   alert(userName.current.value);
  //   alert(userPassword.current.value);
  // };


  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodo(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  console.log(todo);

  return (
    <div className='home-banner'>

      {/* <div className='user-information'>
        <input type='text' placeholder='Type user name' ref={userName} />{' '}
        <input
          type='password'
          placeholder='Enter your password'
          ref={userPassword}
        />{' '}
        <button onClick={submitForm}> Submit </button>{' '}
      </div> */}
    </div>
  );
};

export default Banner;

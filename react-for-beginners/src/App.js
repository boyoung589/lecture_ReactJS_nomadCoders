import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { func } from 'prop-types';

/*
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);

  const onChange = (e) => {
    setKeyword(e.target.value);
  }
  useEffect(()=>{
    console.log("I run only once.")
  }, []);
  useEffect(()=>{
    console.log( "I run when 'keyword' changes.")
  }, [keyword]);
  useEffect(()=>{
    console.log( "I run when 'counter' changes.")
  }, [counter]);
  useEffect(()=>{
    console.log("I run when keyword and counter change.")
  }, [keyword, counter])
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange}
        type= 'text' 
        placeholder='Search here...'
      />
      <h1 className={styles.title}>Welcome back!{counter}</h1>
      <Button text={"Continue"}/>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
*/
function Hello(){
  
  // const byeFn = () => {
  //   /* 
  //    Hello component가 없어질 때 실행됨(CleanUp function)
  //    => 활용법: component가 없어질 때 분석 결과를 보내고 싶다=>분석 api 보내기
  //    =>      : component가 없어질 때 event listener을 지우거나 console.log 보여주고 싶을 때 
  //   */
  //    console.log("bye :(")
  // }
  // const hiFn = () => {
  //   console.log("created :D");
  //   return byeFn;
  // }
  // useEffect(hiFn, []);

  useEffect(function(){
    console.log("hi :)");
    return () => console.log("bye :(")
  }, [])
  
  return(
    <div>
      <h1>Hello</h1>
    </div>
  )
}

function App(){
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => {return !prev});
  }

  return (
  <div>
    {showing ? <Hello /> : null}
    <button onClick={onClick}>{showing ? "HIDE" : "SHOW"}</button>
  </div>)
}

export default App;

function Counter(){
  const[count,setCount]=useState(0);
  return(
  <div> 
    <h2>count: {count} </h2>
    <button onClick={()=> setCount(count+1)}>Increment</button>
  </div>
  );
}
Counter();
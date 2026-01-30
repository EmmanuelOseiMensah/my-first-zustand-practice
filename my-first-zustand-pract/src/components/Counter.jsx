import useStore from '../Store/useStore';

function Counter() {

     const count = useStore((state)=>state.count);
     const increment = useStore ((state)=>state.increment);
     const decrement = useStore ((state)=> state.decrement );
     const reset = useStore((state)=>state.reset);
return (
     <div>
       <h1>Count {count}</h1>
       <button onClick={increment}>+1</button>
       <button onClick={decrement}>-1</button>
       <button onClick={reset}>0</button>
     </div>
)

}

export default Counter;
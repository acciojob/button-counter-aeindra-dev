import { useState } from "react"

const Counter = () =>{
    const [count, setCount] = useState(0);
    return <div>
        <p>Button clicked {count} times</p>
        <button onClick={()=>{ setCount(prev=>prev+1)}}>Click me!</button>
    </div>
}

export default Counter
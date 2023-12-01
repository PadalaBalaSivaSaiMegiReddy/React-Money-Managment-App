import { useState } from "react";
import "./index.css";

const Turorial = () => {
    const [count, setCount] = useState(0);
    const arr=useState(9)
    console.log(arr);
    const increasePressed=()=>{
        setCount((prevCount)=>prevCount+1);
    }
    const decreasePressed=()=>{
        setCount((prevCount)=>prevCount-1);
    }

	return (
		<>
			<button onClick={decreasePressed}>-</button>
			<span>{count}</span>
			<button onClick={increasePressed}>+</button>
		</>
	);
};

export default Turorial;

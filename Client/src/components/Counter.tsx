import { useDispatch } from "react-redux";
import type { RootState } from "../state/store";
import { useSelector } from "react-redux";
import { increment } from "../state/slices/counterSlice";


const Counter = () =>{
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
    <div>
        <h3>{count}</h3>
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    </div>
    )
}

export default Counter;
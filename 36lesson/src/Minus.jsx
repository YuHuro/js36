import { useDispatch, useSelector } from "react-redux";

function Minus() {

    const dispatch = useDispatch()

    function minus(){
        dispatch({
            type: 'minus'
        })
    }

    return (
        <button onClick={minus}>-</button>
    );
}

export default Minus
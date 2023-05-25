import { useDispatch, useSelector } from "react-redux";

function Plus() {

    const dispatch = useDispatch()

    function plus(){
        dispatch({
            type: 'plus'
        })
    }

    return (
        <button onClick={plus}>+</button>
    );
}

export default Plus
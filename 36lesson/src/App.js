import { useDispatch, useSelector } from "react-redux";
import Reset from "./Reset";
import Minus from "./Minus";
import Plus from "./Plus";

function App() {

  const counter = useSelector(state => state)

  const dispatch = useDispatch()

  return (
    <div className="App">
      {counter}
      <div>
        <Plus/>
        <Minus/>
      </div>
      <Reset/>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {

  const [result , setResult] = useState("")

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult("")
  }

  const backSpace = () => {
    setResult(result.slice(0 , -1))
  }

  const calc = () => {
    try{
      setResult(eval(result).toString())
    }catch(err){
      setResult("Error ): ")
    }
  }

  return (
    <>
      <div className='container'>
        <div className='calculator'>
          <form>
            <div className='display'>
              <input type="text" value={result} />
            </div>
            <div>
              <input id='clear' type="button" value={"AC"} onClick={clear} />
              <input id="backspace" name={""} type="button" value={"C"} onClick={backSpace} />
              <input name={"."} type="button" value={"."} onClick={handleClick} />
              <input name={"/"} type="button" value={"/"} onClick={handleClick} />
            </div>
            <div>
              <input name={"7"} type="button" value={"7"} onClick={handleClick} />
              <input name={"8"} type="button" value={"8"} onClick={handleClick} />
              <input name={"9"} type="button" value={"9"} onClick={handleClick} />
              <input name={"*"} type="button" value={"*"} onClick={handleClick} />
            </div>
            <div>
              <input name={"4"} type="button" value={"4"} onClick={handleClick} />
              <input name={"5"} type="button" value={"5"} onClick={handleClick} />
              <input name={"6"} type="button" value={"6"} onClick={handleClick} />
              <input name={"-"} type="button" value={"-"} onClick={handleClick} />
            </div>
            <div>
              <input name={"1"} type="button" value={"1"} onClick={handleClick} />
              <input name={"2"} type="button" value={"2"} onClick={handleClick} />
              <input name={"3"} type="button" value={"3"}  onClick={handleClick}/>
              <input name={"+"} type="button" value={"+"} onClick={handleClick}/>
            </div>
            <div>
              <input name={"00"} type="button" value={"00"} onClick={handleClick} />
              <input name={"0"} type="button" value={"0"} onClick={handleClick} />
              <input type="button" value={"="} className='equal' onClick={calc} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

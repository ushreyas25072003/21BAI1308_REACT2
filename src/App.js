import "./style.css"
import {useState} from "react"


//////////////////////////////////////////////////////
//                 APP
//////////////////////////////////////////////////////

export default function App(){

  let[value,setValue]=useState('');

  function deletes(){
    let length=value.length;

    setValue(value.slice(0,length-1));

  }

  function allclear(){
    setValue('');
  }


  function output(){
    const result=eval(value);
    setValue(result);
  }

  return(
    <div className="container">
      <textarea className="outputscreen" value={value}></textarea>
        <div className="keyscontainer">

        <div className="row">
        <div className="key" onClick={allclear}>AC</div>
        <div className="key" onClick={deletes}>Del</div>
        <div className="key"  onClick={()=>setValue(value + '00')}>00</div>
        <div className="key lastbtn" onClick={deletes}>❌</div>
        </div>

        <div className="row">
          <div className="key" onClick={()=>setValue(value + '7')}>7</div>
          <div className="key"  onClick={()=>setValue(value + '8')}>8</div>
          <div className="key"  onClick={()=>setValue(value + '9')}>9</div>
          <div className="key lastbtn"  onClick={()=>setValue(value + '-')} >-</div>
        </div>

        <div className="row">
          <div className="key" onClick={()=>setValue(value + '4')}>4</div>
          <div className="key"  onClick={()=>setValue(value + '5')}>5</div>
          <div className="key"  onClick={()=>setValue(value + '6')}>6</div>
          <div className="key lastbtn" onClick={()=>setValue(value + '/')}>/</div>
        </div>

        <div className="row">
          <div className="key" onClick={()=>setValue(value + '1')}>1</div>
          <div className="key"  onClick={()=>setValue(value + '2')}>2</div>
          <div className="key"  onClick={()=>setValue(value + '3')}>3</div>
          <div className="key lastbtn" onClick={()=>setValue(value + '')}></div>
        </div>

        <div className="row">
          <div className="key" onClick={()=>setValue(value + '0')}>0</div>
          <div className="key"  onClick={()=>setValue(value + '.')}>.</div>
          <div className="key"  onClick={output}>=</div>
          <div className="key lastbtn" onClick={()=>setValue(value + '+')}>+</div>
        </div>


        </div>
    </div>
  )
}
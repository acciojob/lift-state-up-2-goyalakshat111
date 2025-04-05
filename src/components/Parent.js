import React,{useState} from 'react';
import Child from './Child';

const Parent = ()=>{

    const [val,setVal] = useState("");


    return(
        <div className='parent'>
            <h1>Parent Component</h1>
            <p>{val}</p>
            <Child 
            val = {val}
            setVal = {setVal}
            />
        </div>
    )
}

export default Parent;
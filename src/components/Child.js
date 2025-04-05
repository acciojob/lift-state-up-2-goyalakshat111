import React from 'react';

const Child = ({val,setVal})=>{

    function handleChange(e){
       setVal(e.target.value)
    }


    return(
        <div className='child'>
            <h1>Child Component</h1>
            <input type="text" name='text' value={val} onChange={handleChange}/>
        </div>
    )
}

export default Child;
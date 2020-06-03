import React from 'react';
import './Burger.css'
const Burger = (props) => {
    let test = [];

    let keys=Object.keys(props.ingredients)
    let values=Object.values(props.ingredients)
    let layer=<div className='layer'>Please add your ingredients</div>
    for (let i = 0; i < keys.length; i++) {
        for(let j=0;j<values[i];j++){
            let chileKey=i+'_'+j
            test.push(<div className={keys[i].toLowerCase()} key={chileKey}></div>)
        }
    }
    if (test.length!=0){
        layer=test
    }
    return (
        <div className='burger'>
            <div className='bread-top'></div> 
            {layer}
            <div className='bread-bottom'></div>
        </div>
    )
}
export default Burger;
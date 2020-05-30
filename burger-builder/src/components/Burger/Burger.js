import React from 'react';
import './Burger.css'
const Burger = (props) => {
    let test = [];

    let keys=Object.keys(props.ingredients)
    let values=Object.values(props.ingredients)
    let layer=<div className='layer'>Please add your ingredients</div>
    for (let i = 0; i < keys.length; i++) {
        for(let j=0;j<values[i];j++){
            // console.log(keys[0].toLowerCase())
            let chileKey=i+'_'+j
            test.push(<div className={keys[i].toLowerCase()} key={chileKey}></div>)
        }
    }
    if (test.length!=0){
        layer=test
    }
    // if(!props.menuClicked){

    // }
    // console.log(test)
    // let test=[<div className='bread-top'></div>,<div className='bread-top'></div>]
    return (
        <div className='burger'>
            <div className='bread-top'></div> 
            {layer}
            {/* <div className='cheese'>   </div>
            <div className='patty'>   </div>
            <div className='salad'>   </div> */}
            <div className='bread-bottom'></div>
        </div>
    )
}
export default Burger;
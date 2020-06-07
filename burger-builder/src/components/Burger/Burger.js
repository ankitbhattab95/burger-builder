import React from 'react';
import './Burger.css'
const Burger = (props) => {
    let test = [];
    let reorderedObject = { "cheese": 0, "patty": 0, "salad": 0 }
    for (let i in props.ingredients) {
        reorderedObject[i] = props.ingredients[i]
    }
    let layer = <div className='layer'>Please add your ingredients</div>
    for (let i = 0; i < Object.keys(reorderedObject).length; i++) {
        for (let j = 0; j < Object.values(reorderedObject)[i]; j++) {
            let chileKey = i + '_' + j
            test.push(<div className={Object.keys(reorderedObject)[i].toLowerCase()} key={chileKey}></div>)
        }
    }
    if (test.length !== 0) {
        layer = test
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
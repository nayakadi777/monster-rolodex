import React from 'react';
import {Card} from '../card/card.component'
import '../card-list/card-list.style.css'

export  const CardList =(props)=>{
    console.log(props);
    return (<div className="card-list">
        {props.monster.map((monst) => (<Card key={monst.id} monster={monst}/>))}
        </div>);
}
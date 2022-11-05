import React from 'react';
import './PriceList.css';
interface Props{
  name:string,
  count:number,
  price:number,
  key:string,
  onDelete:React.MouseEventHandler;
}

const PriceList:React.FC<Props> = (props) => {
  let block = 'price-item';
  if(props.price === 0 ) {
    block = block + ' none'
  }
  return (
    <div className={block}>
      <span>{props.name}</span>
      <strong>x {props.count}</strong>
      <span className='price-text'>{props.price} KGS</span>
      <button className="btn" onClick={props.onDelete}>X</button>
    </div>
  );
};

export default PriceList;
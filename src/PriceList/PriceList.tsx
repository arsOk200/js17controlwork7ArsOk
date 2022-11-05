import React from 'react';
import './PriceList.css';
interface Props{
  name:string,
  count:number,
  price:number,
  key:string,
  // onDelete:React.MouseEventHandler;
}

const PriceList:React.FC<Props> = (props) => {
  return (
    <div className="price-item">
      <span>{props.name}</span>
      <strong>x {props.count}</strong>
      <span>{props.price} KGS</span>
      <button className="btn">X</button>
    </div>
  );
};

export default PriceList;
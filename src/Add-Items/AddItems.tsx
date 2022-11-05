import React from 'react';
import './AddItems.css';

interface Props {
  name:string;
  price:number;
  image:string;
  key:string;
  onAdd:React.MouseEventHandler;
}

const AddItems:React.FC<Props> = (props) => {
  return (
    <div className="addItem" onClick={props.onAdd}>
      <div className="item-wrapper">
        <img src={props.image} alt={props.name} className="img"/>
          <p className="item-text">{props.name}</p>
      </div>
      <div className="item-wrapper">
        <span>Price:</span>
        <strong>{props.price}KGS</strong>
      </div>
    </div>
  );
};

export default AddItems;
import React from 'react';
import './TotalPrice.css';

interface Props {
  total:number;
}

const TotalPrice:React.FC<Props> = (props) => {
  if(props.total === 0 ) {
    return (
      <div>
        <strong>You did not add some food</strong>
        <p>add something</p>
        <p>just click some foods</p>
      </div>
    )
  } else{
    return (
      <div className="total-price">
        <span>Total:</span>
        <strong>{props.total}</strong>
      </div>
    );
  }
  };

export default TotalPrice;
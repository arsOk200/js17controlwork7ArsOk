import React, {useState} from 'react';
import './App.css';
import BottleImg from './assets/Bottle.png';
import CupImg from  './assets/Cup.png';
import BurgerImg from './assets/burger.png';
import PizzaImg from './assets/pizza.png';
import ChickenImg from './assets/chicken.png';
import AddItems from "./Add-Items/AddItems";
import PriceList from "./PriceList/PriceList";

function App() {

  // const [food, setFood] = useState([]);

  const [foodCount, setFoodCount] = useState([
    {name:'Coffee', price:0, id:'1',count:0},
    {name:'Tea', price:0, id:'2',count:0},
    {name:'Cola', price:0, id:'3',count:0},
    {name:'Burger', price:0, id:'4',count:0},
    {name:'Pizza', price:0, id:'5',count:0},
    {name:'Chicken', price:0, id:'6',count:0},
  ]);

  const FOODEXAMPLE: foodExample[] = [
    {name:'Coffee', image:CupImg , price:40, id:'1'},
    {name:'Tea',image:CupImg, price:50, id:'2'},
    {name:'Cola',image:BottleImg, price:55, id:'3'},
    {name:'Burger',image:BurgerImg, price:100, id:'4'},
    {name:'Pizza',image:PizzaImg, price:90, id:'5'},
    {name:'Chicken',image:ChickenImg, price:150, id:'6'},
  ];

  const onAdd = (id:string) => {
    setFoodCount(prev => prev.map(item => {
      return item.id ===id ? {
        ...item,
        count: item.count +1 ,
        price: FOODEXAMPLE[parseInt(id)-1].price + item.price,
      }:item;
    }));
    // setFood( prev => prev.map(item => {
    //   return item.id !== id ? {
    //     ...item,
    //     foodCount[parseInt(id)-1],
    //   }:item;
    // }));
  };

  return (
    <div className="App">
        <div className="constructor">
          <div className="addList">
            {FOODEXAMPLE.map((item) =>
              <AddItems
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.id}
                onAdd={()=> onAdd(item.id)}
              />
            )}
          </div>

          <div className="priceList">
            {foodCount.map((item) =>
            <PriceList
              price={item.price}
              name={item.name}
              key={item.id}
              count={item.count}
            />)}
          </div>
        </div>
    </div>
  );
}

export default App;

import React, { createContext, useState } from 'react'
import Carousel from './Carousel'
import Card from './Card'
import Data from '../../Data'


const Array=createContext();


const Home = () => {

  const [cartArray, setCartArray] = useState([]);

  const handleClick = (curEle) => {
    setCartArray
    (oldItems => {
      return [...oldItems, curEle]
    })

    console.log(cartArray);
  }

  return (
    <>
      <Carousel />
      <Array.Provider value={"pawan"}>
        <div className="cards-container">
          {
            Data.map((curEle) => {
              return (
                <Card key={curEle.id} curEle={curEle} handleClick={handleClick} />
              )
            })
          }
        </div>
      </Array.Provider>
    </>
  )
}

export default Home;
export {Array};

import React, { useState, useEffect } from "react";
import axiosWithAuth from '../axios/axioxWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = ()=> {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
 
   const getColor = () => {
      axiosWithAuth()
      .get("http://localhost:5000/api/colors")
      .then(res => {
        setColorList(res.data);

      })
      .catch(err => 
        console.log(err)
      )    
   }
   useEffect(() => {
     getColor();
   }, [])
      


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';



function App(){
  
  
  const [count,setCount]=useState([])
  const url='https://assignment-machstatz.herokuapp.com/planet'
  const [product,setProduct]=useState(null)
  useEffect(()=>{
    axios.get(url)
    .then(response=>{
      
      setProduct(response.data)
      
      console.log(response.data.name)
    })
  },[url])



  if(product){
    return(
      
      <div>
        
    
            <table className="table" width="1000px" border="1px">
                <thead>
                    <tr>
                        <td><h3>Planets</h3></td>
                        <td> <h3>Add to Favourites</h3> </td>
                        
                        
                    </tr>
                </thead>

                <tbody>
                { product.map((item,k)=>{
                    return(
                      
                        <tr>
                        <td>{item.name}  </td>
                        <td >  <button  onClick={()=>
                        
                        
                        
                        setCount([...count,<br/>,item.name])
                        
                        
                        
                        }>Fav</button>

                        
                          
                        </td>
                    

                    
                        
                    
                        </tr>
                        
                        
                    )
                })}


                </tbody>


            </table>

        
        
          <h3 className="p">Favourites</h3>
                    <ul>
                      <li className="q" >
              
                        {count}
                      </li>
                    </ul>
      </div>
    )
  }

  return(
    <div>
      
    </div>
  )

}
  
export default App;

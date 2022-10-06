import React, { useEffect, useState } from "react";
import moment from "moment";

import './User.css'


let Users = ()=> {
    const [user, setUser] = useState([]) 
    const [date, setDate] = useState(Date.now()) 
    console.log(date)


    useEffect(()=>{
        fetchUser();
    }, []);

    let fetchUser = async ()=> {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then ((response)=> response.json())
        
        .then ((data)=> {
            setUser(data)
            // console.log(data);
        }) 
        .catch(error =>{                      
            throw new Error(error);
        })

    }

    return(
        <div id="card1"key={user.id}>
           <div id="box">
            <img src='https://media.istockphoto.com/photos/portrait-of-afro-young-woman-with-short-blonde-hair-picture-id1347138559?b=1&k=20&m=1347138559&s=170667a&w=0&h=qwqgpcHoOBW4wv-joEd7ZDKttFQy9Zeg7XB78iyU8yo='alt="pic"/>
                  
                  <p><span>FirstName:</span> {user.firstname} Caroline</p> 
                  <p><span> LastName:</span> {user.lastname} Mugo </p>
                  <p><span>Age :</span> {user.age} 22 </p>
                  <p><span>Email : </span>{user.email} mugonycaroline@gmail.com</p>
                  <p><span>PhoneNumber:</span> {user.phonenumber} 0729284253</p>
                  </div>
            {
                user.map((user)=>
                
                <div id="card2"key={user.id}>
                     <div id="box2">
                    
                    
                      <p><span>Title:</span> {user.title} Caroline</p> 
                  <p><span> Body:</span> {user.body} Mugo </p>

                  {

                  }
                  <p><span>Date :</span>{moment(date).format('MM/DD/YYYY')}</p>
                  </div>

                    {
                        
                    }
                    
                   </div>  
                
                ) }
                

        </div>


    );
}


 
export default Users;

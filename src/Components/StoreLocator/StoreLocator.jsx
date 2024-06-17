import React from 'react'
import "../StoreLocator/Store.css"
export default function StoreLocator() {

    const countries=[
    "Benin", "Chile", "China", "Congo", "Egypt", "Gabon", "Ghana", "Haiti", 
    "India", "Italy", "Japan", "Kenya", "Korea", "Kuwait", "Laos", "Libya", 
    "Macau", "Malta", "Nauru", "Nepal", "Niger", "Palau", "Peru", "Qatar", 
    "Samoa", "Spain", "Sudan", "Syria", "Tonga", "Yemen", "Angola", "Brunei", 
    "Cyprus", "France", "Gambia", "Guyana", "Jordan", "Latvia", "Mexico", 
    "Monaco", "Norway", "Panama", "Poland", "Serbia", "Sweden", "Turkey",
    "Belize", "Burma", "Chad", "Fiji", "Honduras", "Israel", "Kiribati", 
    "Moldova", "Nauru", "Niger", "Palau", "Rwanda", "Sudan", "Taiwan", 
    "Tuvalu", "Uganda", "Zambia",
    "Bhutan", "Brazil", "Canada", "Chad", "Chile", "Egypt", "Fiji", "Greece", 
    "Guinea", "Haiti", "Italy", "Japan", "Kenya", "Libya", "Malta", "Nepal", 
    "Niger", "Panama", "Poland", "Russia", "Spain", "Sudan", "Syria", "Tonga", 
    "Tuvalu", "Uganda", "Yemen", "Zambia"
    ];
  return (
    <div className='All-co'>
        <div  className='countrie'>
            <div className='All-countries'>
            <h1 >Locate Us</h1>
            <h3>La Pinoz has 600+ restaurent across india</h3>
            <h3>Order online  from the location nearest to you</h3>
            <ul>
             {countries.map((country,index)=>(
                <li key={index}>{country}</li>
             ))}
            </ul>
            </div>
            <img src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/map_new.svg" alt='Loading...'className='img-coun'></img>
        </div>
      
          <div className='green'>
      </div>
    </div>
    
  )
}

import { useState } from 'react'; 
import './App.css';

import TopBar from './comps/TopBar';
import {Routes,Route} from 'react-router-dom'; 

import Landingpage from './comps/landingpage';

import GenreCards from './comps/genre';
import { Genredata } from './comps/Genredata';


// const ifHome =()=>{
//   if (sessionStorage.getItem('leavehomepage')){
//     return (<></>); 
//   }
//   else{
//     return (
//       <>
//         <Landingpage cat="pets"/>
//       </>); 
//   }
// }

function App() {
  const [pgstate,setpgstate]=useState(0); 
  return (
    <div className="App">
      <TopBar/>
      {/* <Cart /> */}
      <Routes>
      
      {
        Genredata.map((el)=>{
          return(
            <Route path= {`/genre/${el}`} element={<Landingpage cat={el}/>} />
          ); 
        })
      }
      </Routes>
      
      {/* tag for header bar will go here */}
      {/* Navbar tag will go here */}
      {/* Browse genres goes here along with searchbar */}

    </div>
    
  );
}

export default App;

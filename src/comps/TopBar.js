import React, {useState,useEffect,useRef} from 'react';
import './TopBar.css'; 
import './Cart.css';
import { GoSearch, GoThreeBars } from 'react-icons/go'; 
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Genredata } from './Genredata';
import useOutsideClick from './useOutsideClick'; //custom hook for handling sidebar 

import GenreCards from './genre';
import Landingpage from './landingpage';

import axios from 'axios';

function TopBar(props) {
    const [sdBar,setsdBar]=useState(false);
    const ref = useRef(); 
    useEffect(()=>{
        sessionStorage.clear(); 
        sessionStorage.setItem('leavehomepage',false);
        let blnkArr=[]; 

        sessionStorage.setItem('itemlist',JSON.stringify(blnkArr)); 
    },[]); //to clear sessionStorage when page renders
    useOutsideClick(ref,()=>{
        setsdBar(false); 
    }); 
    const getItems = ()=>{
        let i=0,cartArrfromStorage=[]; 
        cartArrfromStorage=JSON.parse(sessionStorage.getItem(`itemlist`)) ; 
        let finArr=[]; 
        cartArrfromStorage.map((el,index)=>{
            finArr[index]=JSON.parse(el); 
        })
        return finArr; 
    }
    const [cartItems,setCartItems]=useState([]); 
    const [cartOpen,setcartOpen]=useState(false); 
    useEffect(()=>{
        let arr=getItems(); 
        let nullvalue=arr.shift(); 

        setCartItems(arr); 
        console.log(arr);  
        
    },[cartOpen]);
    return (
        <>
        <div className='navbar'>
            <ul>
                <li id='sidebar-icon'><GoThreeBars onClick={(evt)=>{
                    setsdBar(true);
                    // console.log(evt); 
                    // console.log(evt.offsetY); 
                    }} /></li>
                <li id='title'><div><b>The Book Adda</b></div></li>
                <li id='cart' onClick={()=>setcartOpen((prevState)=>{return !prevState;})}>Cart</li>
                <li id='search-icon'><GoSearch id='searchicon'/></li>
            </ul>
        
            
        </div>
        <div className={sdBar?'Sdbar open':'Sdbar'} >
        <div className='close-icon'><AiOutlineClose id='closeicon' onClick={()=>{setsdBar(false)}} /></div>
        <ul className='sdbar-list'>
            
            <li className='sdbar-subtitle'>Genres: </li>
            {
                
                Genredata.map((el,index)=>{
                    return (<li key={index}><Link to={`/genre/${el}`} onClick={()=>sessionStorage.setItem('leavehomepage',true)}>{el}</Link></li>)
                })
            }
        </ul>
    </div>
    <div className={cartOpen?'cart open':'cart'}>
            <div className='cart-top'>
                <h1>{cartItems.length -1} items in Cart</h1>
                <div className='cart-close-icon'><AiOutlineClose onClick={()=>{setcartOpen(false)}} /></div>
            </div>
            <div className="cart-items">
                <ul>
                {
                   
                    cartItems.map((el,index)=>{
                        if (index!=0){
                            let bkname=el.volumeInfo.title; 
                            let sp=el.price; 
                            return (<li key={`cartItem${index}`}>{bkname} costs {sp} </li>); 
                        }
                        
                    })
                    
                }
                </ul>
            </div>
            
        </div>
    </>
    );
}



export default TopBar;
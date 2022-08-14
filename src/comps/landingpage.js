import React,{useState,useEffect} from 'react';
import Card from './Card';
import './landingpage.css'; 
import axios from 'axios'; 

function Landingpage(props) {
    const [bookData,setData]=useState([]); 
    let cate=props.cat; 
    let searchtrm=props.search; 
    
    useEffect(()=>{
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchtrm}+subject:${cate}&key=AIzaSyB3Cyazp3d62CzdQme6Bpgxia_Dv9vxcaE&maxResults=20&langRestrict=en`).then(res=>{
        console.log(res.data.items); 
        //console.log(bookData); 
        setData(res.data.items); 
        //console.log(bookData[0].volumeInfo); 
        }).catch(err=>console.log(err));  
    },[props.cat]); 
    //fillarr never runs again because empty array never actually changes after 'onMount'
    
    
    return (
        <>
            <h1>{cate}</h1>
            <div className='bsbCardrow'>
                <Card book={bookData} />
                
            </div>
        </>
        
    );
}


export default Landingpage;
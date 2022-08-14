import React,{useEffect,useState} from 'react';
import './genreCards.css'; 
import { MdAddShoppingCart } from 'react-icons/md'


function Card(props) {
    const [cartItem,setascartItem]=useState(); 
    let title,imglink,cat,auth,bookArrCopy,cost,book; 
    book=props.book; 
    bookArrCopy=book; 
    useEffect(()=>{
        let items=[]; 
        items=JSON.parse(sessionStorage.getItem(`itemlist`)) ; 
        let totnum=items.push(cartItem); 
        sessionStorage.setItem(`itemlist`,JSON.stringify(items)); 
        //console.log(sessionStorage.getItem(`itemlist`)); 
    },[cartItem]);  
    function handleClick(ev){
        let obj=JSON.parse(ev.target.id); 
        console.log(obj.volumeInfo.title); 
        setascartItem(JSON.stringify(obj)); 
        let butt=ev.target; 
        butt.innerText="Added to Cart"; 
        
    }
    return (
        <>
            {
                book.map((el,index)=>{
                    //bookArrCopy[index].price=Math.floor((Math.random)*1000); 
                    //console.log(bookArrCopy[index]); 
                    cost=(el.volumeInfo.pageCount>1?el.volumeInfo.pageCount:500+Math.floor(Math.random()*1000)); 
                    book[index].price=cost; 
                    title=el.volumeInfo.title; 
                    auth=el.volumeInfo.authors; 
                    cat=el.volumeInfo.categories; 
                    imglink=el.volumeInfo.imageLinks.thumbnail; 
                    return(
                        <div className="bsbCard" key={`${title}-${cat}`}>
                            <div className="bsbCardtitle"><p align="center"><b>{title}</b></p></div>
                            <br/>
                            <img src={imglink} alt="cf"/>
                            <br/><article><em>{cat}</em><br/>{auth}<br/>&#8377;{cost}</article>
                            <div className="bsbCardbutton">
                                <button id={JSON.stringify(el)} onClick={(ev)=>{
                                    // let obj={bookName:title,
                                    // sp:cost}
                                    // setascartItem(JSON.stringify(obj)); 
                                    // console.log(`${title} clicked.`); 
                                    handleClick(ev); 

                                }}>Add to Cart</button>
                            </div>
                        </div>
                    ); 
                })
            }
            
        </>
    );
}



export default Card;
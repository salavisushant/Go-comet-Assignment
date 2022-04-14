import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ("./details.css")

export const ProductDetails = () => {
    let { id } = useParams();
    const [list, setList] = useState({});

    useEffect(() => {
        getProduct()
    },[])


    const getProduct = async () => {
        let res = await fetch(`https://go-comet-backend.herokuapp.com/product/${id}`);
        let data = await res.json();
        console.log(data);
        setList(data);
    }

    return (
        <div className="detailDiv">
            <div className="picDiv">
                <img className="picImg" src={list.images} alt="" />
                <img className="picImg" src={list.images} alt="" />
                <img className="picImg" src={list.images} alt="" />
                <img className="picImg" src={list.images} alt="" />
              
            </div>
            <div className="infoDiv">
                <p>{list.brand}</p>
                <p>{list.category}</p>
                <div className="ratingFlex"><p>{list.ratings}</p> <p>{ list.count}</p></div>
            </div>
        </div>
    )
}
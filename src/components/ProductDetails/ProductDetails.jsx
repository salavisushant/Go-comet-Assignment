import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ("./details.css")

export const ProductDetails = () => {
    let { id } = useParams();
    const [list, setList] = useState({});
    const [listimage,setListimage] = useState([])

    useEffect(() => {
        getProduct()
    },[])


    const getProduct = async () => {
        let res = await fetch(`https://go-comet-backend.herokuapp.com/product/${id}`);
        let data = await res.json();
        console.log(data);
        setList(data);
        setListimage(data.images);
    }

    return (
        <div className="detailDiv">
            <div className="picDiv">
                {
                    listimage.map((e) => (
                         <img className="picImg" src={e} alt="" />
                    ))
                }
            </div>
            <div className="infoDiv">
                <p style={{fontSize:"2.5vw",fontWeight:"600"}}>{list.brand}</p>
                <p style={{fontSize:"1.7vw",color:"#b8bbc4",lineHeight:"1%"}}>{list.title}</p>
                <div className="ratingFlex"><p style={{fontSize:"1.4vw",fontWeight:"700",marginLeft: "3%"}}>{list.ratings}<span><img style={{marginTop:"-4px"}} src="https://img.icons8.com/ios-glyphs/5em/1ABC9C/star--v1.png" alt=""/></span></p> <p style={{marginLeft:"3%",fontSize:"1.4vw",color:"#777985"}}>|{ list.count} Ratings</p></div>
                <hr />
                <div style={{ display: 'flex' }}><p style={{ fontSize: "2vw", fontWeight: "700" }}>{"Rs. " + list.price}</p><p style={{ marginLeft: "2%", textDecoration: "line-through", fontSize: "2vw",color:"#777985" }}>{"Rs." + list.off_price}</p><p style={{ marginLeft: "4%", fontSize: "2vw", color: "#FF905A",fontWeight:"700" }}>({list.discount} %OFF)</p></div>
                    <p style={{color: "#03A685",fontWeight:"700",lineHeight: "1%"}}>inclusive of all taxes</p>
                    <div style={{ display: "flex" }}><p style={{ fontWeight: "700" }}>SELECT SIZE</p><p style={{ marginLeft: "5%", color: "#FF4D88", fontWeight: "500" }}>SIZE CHART</p></div>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "50%", height: "50px" }}>
                  <div style={{ display: "flex"}}>  <div className="sizeDiv1"><p>S</p></div><div className="sizeDiv"><p>M</p></div><div className="sizeDiv"><p>L</p></div><div className="sizeDiv"><p>XL</p></div><div className="sizeDiv"><p>XXL</p></div></div></div>
                <br />
                <div style={{display: 'flex'}}><button className="btnBag"><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/bag-front-view.png" alt=""/><span>ADD TO BAG</span></button><button className="btnWish"><img src="https://img.icons8.com/ios-glyphs/30/ff3f6c/like--v1.png" alt=""/><span>WISHLIST</span></button></div>
                <hr/>
                <p className="prodDes">PRODUCT DESCRIPTION <img src="https://img.icons8.com/ios/30/000000/document--v1.png" alt="" /></p>
                <p className="desCri">{ list.description }</p>
                <hr />
                <p className="prodDes"> RATINGS <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/30/000000/external-stars-weather-dreamstale-lineal-dreamstale.png" alt=""/></p>
                <div className="rateDiv">
                    <div></div>
                    <div></div>
                </div>
            </div>
         
        </div>
    )
}
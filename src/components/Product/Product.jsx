import "./product.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const Product = () => {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(0)

    useEffect(() => {
        getData()
    },[page])


    const getData = async () => {
        let res = await fetch(`https://go-comet-backend.herokuapp.com/product?page=${page}&size=20`);
        let data = await res.json();
        console.log(data.product);
        setProduct(data.product)
    }


    return (
        <div className="mainDiv">
            <div style={{marginLeft:"2%",lineHeight:"30%"}}>
                <p style={{fontSize:"18px"}}>Home</p>
                <p style={{fontSize:"18px",fontWeight:"700"}}>Myntra Fashion Store<span style={{color:"grey",fontWeight:"400"}}>-1245 items</span></p>
            </div>
            <div className="prodctDiv">
                <div className="leftDiv">

                </div>
                <div className="rightDiv">
                    {
                        product.map((e) => (
                              <Link style={{textDecoration:"none",color:"black"}} to={`/${e._id}`}><div className="mainBox" key={e._id}>
                              <img className="prodImg" src={e.images} alt="" />
                                <p style={{fontSize:"15px",fontWeight:"700"}}>{e.brand}</p>
                                <p style={{lineHeight: "1%",color:"#323136",fontSize:"15px"}}>{e.category}</p>
                                <div style={{ display: 'flex' }}><p style={{ fontSize: "15px", fontWeight: "700" }}>{"Rs. " + e.price}</p><p style={{ marginLeft: "2%", textDecoration: "line-through", fontSize: "13px" }}>{"Rs." + e.off_price}</p><p style={{ marginLeft: "4%", fontSize: "13px", color: "#FF905A" }}>({e.discount} %OFF)</p></div>
                                <div className="overlay"></div>
                                  <div class="button"><Link className="link"style={{textDecoration:"none"}} to="/wishlist"><img style={{marginTop:"-5px",}}  src="https://img.icons8.com/material-outlined/24/000000/like--v1.png" alt=""/><span style={{ marginLeft: "2%", fontSize: "16px"}}>WISHLIST</span></Link></div>
                            </div>
                            </Link>
                        ))
                    }

                </div>
            </div>
            
       </div>
   )
}
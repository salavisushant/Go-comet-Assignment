import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css"
import { Link } from 'react-router-dom';



export const Home = () => {

    return (
        <div style={{marginTop:"5%"}}>
               <Carousel>
               <Carousel.Item interval={2000}>
               <img
                    className="d-block w-100"
                   src="https://user-images.githubusercontent.com/87421852/163519455-757ad941-95eb-40c7-a611-38e151303802.png"
                    alt="First slide"
               />
               </Carousel.Item>
               <Carousel.Item interval={2000}>
               <img
                    className="d-block w-100"
                    src="https://user-images.githubusercontent.com/87421852/163519429-b33e86ba-b170-4746-b1f5-7023955489dc.png"
                    alt="Second slide"
               />
               </Carousel.Item>
               <Carousel.Item interval={2000}>
               <img
                    className="d-block w-100"
                    src="https://user-images.githubusercontent.com/87421852/163519444-33555558-f055-4260-94aa-40f175a838c5.png"
                    alt="Third slide"
               />
               </Carousel.Item>
               </Carousel>
            <img style={{width:"100%"}} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/0aee0d7a-a9ba-4881-aafc-21f6b5c3e4691642158269057-Desktop_Bank-Offer.jpg" alt="" />
            <img style={{ width: "95%", marginLeft: "2.5%", height: "200px" }} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/8/0e3e9a29-fe72-4f07-baad-13c10c974bf01649412087262-03_Crazy-Deals.jpg" alt="" />
            <img style={{width: "95%", marginLeft: "2.5%", height: "150px" }} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/8/8f2fb9d9-b814-4c1d-8fb7-419a111319081649412087270-04_Budget-Buys.jpg" alt="" />
            <div className="set">
                <div>
                   <Link to="/Products"> <img style={{width:'100%',}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/e6d2213f-2797-4b11-aa72-0ab85f912ab91641702713591-USPA-_UCB.jpg" alt="" /></Link>
                </div>
                <div>
                     <Link to="/Products">< img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/982eb1ae-0f43-4ec9-88cf-2c3ccaf0cc9b1641702713015-Louis_Philippe-_Arrow.jpg" alt="" /></Link>
                </div>
                <div>
                    <Link to="/Products"> <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/bc56d434-5411-45e7-a2d5-7809771e58b41641966742688-Red_Tape-_Provogue.jpg" alt="" /></Link>
               </div>
                <div>
                   <Link to="/Products"> <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/c7fd80c5-dc04-4c20-a0c0-9eda118a2d4e1641966742758-Roadster-_Mast_-_Harbour.jpg" alt="" /></Link>
               </div>
                <div>
                     <Link to="/Products"><img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/4c3abcb4-1d49-4103-b428-e4924bfd937e1642129866295-2.jpg" alt="" /></Link>
                </div>  
            </div>

            <br></br>
            <img style={{width: "95%", marginLeft: "2.5%", height: "140px"}} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/8/613031a4-f642-4429-a4d5-cf47675e64ce1649412087283-06_Summer-Crushes.jpg" alt="" />
            <div className="set">
                <div>
                   <Link to="/Products"> <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/5b7a32cd-715f-4d39-b8ab-cfb8a96426251641884921511-RTF-Winterwear_Wrogn_USPA.jpg" alt="" /></Link>
                </div>
                <div>
                     <Link to="/Products"> < img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/9677a355-d48f-44ca-a037-fa94400161cc1641884921466-RTF-Winterwear_Roadster.jpg" alt="" /></Link>
                </div>
                <div>
                    <Link to="/Products" > <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/6b4c7e8d-d78d-4232-80b5-f49b2c7ebdb61641884921424-RTF-Winterwear_M_H_Here_NoW.jpg" alt="" /></Link>
               </div>
                <div>
                   <Link to="/Products"> <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/a1f85afb-7ecc-4488-b589-a17f4c768dbc1641884921410-RTF-Winterwear_H_M.jpg" alt="" /></Link>
               </div>
                <div>
                    <Link to="/Products"> <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/e270b9c7-75c4-47da-81e9-2d862d3fad6b1641884921459-RTF-Winterwear_Puma_HRXm.jpg" alt="" /></Link>
                </div>
               
              </div>
              <br></br>
            <img style={{width: "95%", marginLeft: "2.5%", height: "120px"}} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/8/e0219fb0-d008-45af-a59f-236dd7782f9c1649412087276-05_Hot-Brands.jpg" alt="" />
            <div className="set">
                <div>
                    <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/e29cd784-b6ee-4e2e-9807-d631c5d062cb1642011117202-Libas_HP-Top-Tile.jpg" alt="" />
                </div>
                <div>
                     < img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/c46aecf8-af8b-438e-8e0a-82a4c2671c651642011117216-Vishudh_HP-Top-Tile.jpg" alt="" />
                </div>
                <div>
                     <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/901bb1a2-6d87-44b0-af68-33e3949dfedf1642057411431-levis.jpg" alt="" />
               </div>
                <div>
                    <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/0f5b184b-4228-49e8-b5b9-5f66944ff8c81642057411413-fm.jpg" alt="" />
               </div>
                <div>
                     <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/35a1bbe4-c633-4844-87f3-d86c325fcc3f1642057411421-highlander.jpg" alt="" />
                </div>
                <div>
                    <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/ce6a4f0f-d21c-4cb4-92cd-ceff11d539901642050725137-Loreal.jpg" alt="" />
                </div>
                <div>
                     < img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/49d665a9-daf6-4bf4-9534-803cf18731b61642052041267-Lakme_HP-Tile_Jan-15_Revised.jpg" alt="" />
                </div>
                <div>
                     <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/6da9d88e-fea2-4dd3-8036-b1d2b690b3c31642057411378-addias.jpg" alt="" />
               </div>
                <div>
                    <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/41894ee0-a61d-4bf9-a8b7-8562b088f5c41642008846967-Sassafras-Top-Tile.jpg" alt="" />
               </div>
                <div>
                     <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/0b6d70ea-809b-4a83-88fa-edfac575418f1642070092339-image_jpeg1610275137.jpg" alt="" />
                </div>
                               <div>
                    <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/72647bad-dd76-447d-9eab-b5254cb989631642069093033-boat-home.jpg" alt="" />
                </div>
                <div>
                     < img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/322b2df8-3962-46df-8584-2b3c7266489a1642059032671-Hp-tiles.jpg" alt="" />
                </div>
                <div>
                     <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/a020270d-e6e6-478e-8543-f558d5451be91642070092355-image_jpeg771926449.jpg" alt="" />
               </div>
                <div>
                    <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/42edad3e-03c5-492c-af5f-3b9fa2dafb391641904807658-max-1.jpg" alt="" />
               </div>
                <div>
                     <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/01decb45-54d3-4d8a-8042-f7f58dfbc78f1642064707706-ck.jpg" alt="" />
                </div> 
              </div>
          
        </div>
    )
}
import React from 'react';
import { useNavigate } from 'react-router-dom';
import loadstyle from '../pages/Loadpage.module.css';
import frontimg from "../assets/front.jpg";
import { Piechart } from '../chart/Piechart';

const App = () => {
    const Navigate = useNavigate();
    return (
        <div>
            <nav className={loadstyle.nav}>
            
         
                <div ><i class="fa fa-ravelry" aria-hidden="true" style={{fontSize:"0.8cm",color:"white"}}><b style={{marginLeft:"10px"}}>ITEM CATALOG</b></i></div>
                <button className={loadstyle.link} onClick={() => window.location.href = "/nav"}>HOME</button>
                <button className={loadstyle.link} onClick={() => window.location.href = "/add"}>ADD ITEMS</button>
                <button className={loadstyle.link} onClick={() => window.location.href = "/furnitures"}>FURNITURES</button>
                <button className={loadstyle.link} onClick={() => window.location.href = "/electronics"}>ELECTRONICS</button>
                <button className={loadstyle.link} onClick={() => window.location.href = "/fashion"}>FASHION</button>
                <button className={loadstyle.buttons} onClick={() => {
                    localStorage.removeItem('user');
                    Navigate('/login')
                }}
                >Logout</button>
            </nav>
            <div className={loadstyle.res}>

                <div class="card bg-dark text-white">
                    <img style={{ width: "100%", height: "auto" }} src={frontimg} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                        <h5 class="card-title">DATA PERCENTAGE</h5>
                        <p class="card-text" style={{ width: "50%", height: "auto" }}>{<Piechart />}</p>
                        <p class="card-text"></p>
                    </div>
                </div>
                <div style={{ width: "100%", height: "auto", backgroundColor: "rgb(59, 84, 105)",color:"#e4e0e0",textAlign:"center" }}>
                    <h5>ABOUT</h5>
                    <ul style={{textAlign:'center',fontFamily:"monospace"}}>
                        <li>Contact Us</li>
                        <li>Aout us</li>
                        <li>carees</li>
                        <li>Corporate Information</li>

                    </ul>

                    <i class="fa fa-vimeo" aria-hidden="true"></i>
                    <i class="fa fa-instagram" aria-hidden="true" style={{marginLeft:"10px"}}></i>
                    <i class="fa fa-youtube" aria-hidden="true" style={{marginLeft:"10px"}}></i>
                    <i class="fa fa-facebook" aria-hidden="true"  style={{marginLeft:"10px"}}></i>
                </div>
            </div>
        </div>
    );
};

export default App;

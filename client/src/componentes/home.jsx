import React from "react";
import '../estilos/home.css'
import img from '../img/astro logo 2.0 (sin fondo).png'

export default function Home(){

    return(
        <div>
        <header className="header">
            {/* <div className="head">
                <img className="logo" src={img} width={130} alt="blank"/>
            </div> */}
            
                <h1 className="h1">Astro Gamer</h1>
            
              
        </header>
        <div className="conteiner">
            <div className="div1">
                <img className="img" width={300} src="https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-7930450.jpg" alt="blank" />
                <h3>Pc Armada Gamer Amd Ryzen 5 </h3>
                <h2>$96.999</h2>
            </div>
            <div className="div1">
                <img className="img" width={300} src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-gtx-1660-6gb-gigabyte-oc-nv-0.jpg" alt="blank" />
                <h3>Placa de video Nvidia 4GB</h3>
                <h2>$75.999</h2>
            </div>
            <div className="div1">
                <img className="img" width={300} src="https://compucordoba.com.ar/img/Public/1078-producto-auriculares-msi-immerse-gh50-pc-consolas-11-9692.jpg" alt="blank" />
                <h3>Auriculares gamer Redragon Zeus X</h3>
                <h2>$15.500</h2>
            </div>
        </div>
        <div>

        </div>
    </div>
)
}
import React from "react";
import '../styles/home.css'


export default function Home(){

    return(
    <div>
        <header className="header">
            <h1 className="h1">Astro Gamer</h1>
        </header>
            <div className="conteiner">
                <h2>Categories</h2>
                    <div className="div1">
                        <h2 className="h2">Pc</h2>
                        <img className="img" src="https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-7930450.jpg" alt="blank"/>        
                    </div>
                    <div className="div1">
                        <h2 className="h2">Components</h2>
                        <img className="img" src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-gtx-1660-6gb-gigabyte-oc-nv-0.jpg" alt="blank" />
                    </div>
                    <div className="div1">
                        <h2 className="h2">Peripheral</h2>
                        <img className="img"  src="https://compucordoba.com.ar/img/Public/1078-producto-auriculares-msi-immerse-gh50-pc-consolas-11-9692.jpg" alt="blank"/>
                    </div> 
            </div>
    </div>
)
}
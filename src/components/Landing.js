import React, { Component } from 'react'
import "./Landing.css"

export default class Landing extends Component {
    render() {
        return (
            <div>
                <div className="valign-wrapper image-container header-img">
                    <div className="white50 container">
                        <h1 className="center-align opacity100">bq Eventos Magicos</h1>
                    </div>
                </div>

                <div className="row container">

                    <div className="col s4 center-align">
                        <h5 >El mejor entretenimiento</h5>
                        <i className="fas fa-guitar large padding-top"></i>
                        <p>Encuentra las mejores obras de teatros, los mejores conciertos y las mejores conferencias, en un solo lugar</p>
                    </div>
                    <div className="col s4 center-align">
                        <h5 >Invita a tus amigos</h5>
                        <i className="fas fa-users large padding-top"></i>
                        <p>Conectate con tus amigos. Invitalos a ser parte de tu proximo evento magico!.</p>
                    </div>
                    <div className="col s4 center-align">
                        <h5 >Mantente al tanto</h5>
                        <i className="far fa-newspaper large padding-top"></i>
                        <p>Enterate de los ultimos eventos y de las ultimas noticias de tus artistas favoritos. Todo en el mismo sitio. </p>
                    </div>
                </div>
                
            </div>
        )
    }
}

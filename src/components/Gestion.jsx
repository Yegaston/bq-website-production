import React, { Component } from 'react'

import db from '../providers/firestore-provider'


export default class Gestion extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    }
    this.fetchEvents = this.fetchEvents.bind(this)
  }

  fetchEvents() {
    db.collection("eventos").get()
      .then((querySnapshot) => {
        this.setState({
          events: querySnapshot.docs.map(doc => {
            return {
              id: doc.id,
              Dia: doc.data().Dia,
              asistentes: doc.data().asistentes,
              boleterias: doc.data().boleterias,
              descrip: doc.data().descrip,
              foto: doc.data().foto,
              hora: doc.data().hora,
              lugar: doc.data().lugar,
              organizador: doc.data().organizador,
              tags: doc.data().tags,
              tipoDeEntradas: doc.data().tipoDeEntradas,
              title: doc.data().title,
            }
          })
        })
        console.log(this.state.events)
      })
      .catch(err => console.log(err));
  }

  componentWillMount() {
    this.fetchEvents();
  }

  render() {
    return (
      <div>
        {this.state.events.map(event => {
          return (
            <div>
              <div className="row">
                <div className="col s12 m7">
                  <div className="card">
                    <div className="card-image">
                      <img src={event.foto} alt="" />
                    </div>
                    <div className="card-content">
                      <p className="card-title">{event.title}</p>
                      <p>{event.descrip}</p>
                      <p>Lugar: {event.lugar} a las {event.hora} el dia {event.Dia}</p>
                    </div>
                    <div className="card-action ">
                      <button className="margin-vertical waves-effect waves-light btn">Delete</button>
                      <button className="margin-vertical waves-effect waves-light btn ">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

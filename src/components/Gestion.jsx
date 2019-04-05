import React, { Component } from 'react'
import EditEvent from './EditEvent';

import db from '../providers/firestore-provider'


export default class Gestion extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      title: '',
      descripcion: '',
      dia: '',
      hora: '',
      lugar: '',
      id: '',
    }

    this.fetchEvents = this.fetchEvents.bind(this);

    this.deleteEvents = this.deleteEvents.bind(this);

    this.inputHandler = this.inputHandler.bind(this)

    this.updateEvent = this.updateEvent.bind(this)

    this.getEventId = this.getEventId.bind(this);
  }

  inputHandler(e) {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })

  }

  getEventId(event) {

    this.setState({
      id: event.id,
      title: event.title,
      descripcion: event.descrip,
      dia: event.Dia,
      hora: event.hora,
      lugar: event.lugar,
      id: event.id,
    })

    console.log(this.state.id);
  }

  updateEvent(e) {
    e.preventDefault();
    console.log(this.state.title, this.state.descripcion, this.state.dia, this.state.hora, this.state.lugar)

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

  deleteEvents(id) {
    // e.preventDefault
    console.log(id)

    db.collection("eventos").doc(id).delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.fetchEvents();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  componentWillMount() {
    this.fetchEvents();
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          {this.state.events.map(event => {
            return (
              <div key={event.id}>
                <div className="row">
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
                      <button className="margin-vertical waves-effect waves-light btn" onClick={() => this.deleteEvents(event.id)}>Delete</button>
                      <button className="margin-vertical waves-effect waves-light btn" onClick={() => this.getEventId(event)}>Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <p className="card-title">Editar Evento</p>
              <div className="container">

                <input type="text" placeholder="Title" name="title" onChange={this.inputHandler} value={this.state.title} />

                <input type="text" placeholder="Descripcion" onChange={this.inputHandler} value={this.state.descripcion} name="descripcion" />

                <input type="text" placeholder="dia" value={this.state.dia} name="dia" onChange={this.inputHandler} />

                <input type="text" placeholder="hora" name="hora" value={this.state.hora} onChange={this.inputHandler} />

                <input type="text" placeholder="lugar" name="lugar" value={this.state.lugar} onChange={this.inputHandler} />

                <button onClick={this.updateEvent}>Actualizar</button>

                <p>(Se editara la tarea ID = {this.state.id})</p>


              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

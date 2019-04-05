import React, { Component } from 'react'
import bd from '../providers/firestore-provider';

import M from 'materialize-css';

export default class eventUpload extends Component {
  constructor() {
    super();
    this.state = {
      evento: '',
      org: '',
      desc: '',
      foto: '',
      tags: ['tag1', 'rock'],
      lugar: '',
      dia: '',
      hora: '',
      asistentes: 0,
      tipoDeEntradas: [],
      boleterias: [],
    }

    this.inputHandler = this.inputHandler.bind(this);
    this.sendHandler = this.sendHandler.bind(this);
  }

  inputHandler(e) {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  async sendHandler() {
    console.log(this.state.evento + this.state.org + this.state.desc, this.state.foto, this.state.lugar, this.state.dia, this.state.hora, this.state.asistentes, this.state.tipoDeEntradas, this.state.boleterias);

    try {
      await bd.collection("eventos").add({
        title: this.state.evento,
        organizador: this.state.org,
        descrip: this.state.desc,
        foto: this.state.foto,
        tags: this.state.tags,
        lugar: this.state.lugar,
        Dia: this.state.dia,
        hora: this.state.hora,
        asistentes: this.state.asistentes,
        tipoDeEntrada: [this.state.tipoDeEntradas],
        boleterias: [this.state.boleterias]
      })

      M.toast({ html: 'Evento agregado' });

      this.setState({
        evento: '',
        org: '',
        desc: '',
        foto: '',
        tags: ['tag1', 'rock'],
        lugar: '',
        dia: '',
        hora: '',
        asistentes: 0,
        tipoDeEntradas: '',
        boleterias: '',
      })
    }

    catch (err) {
      console.log(err);
      M.toast({ html: err });
    }
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="input-field col s12">
            <input name="evento" type="text" onChange={this.inputHandler} />
            <label htmlFor="evento">Evento</label>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="input-field col s12">
              <input name="org" type="text" onChange={this.inputHandler} />
              <label htmlFor="org">Organizador</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input name="desc" type="text" onChange={this.inputHandler} />
              <label htmlFor="desc">Descripcion</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input name="foto" type="text" onChange={this.inputHandler} />
              <label htmlFor="foto">Foto</label>
            </div>
          </div>


          <div className="row">
            <div className="input-field col s8">
              <input name="lugar" type="text" onChange={this.inputHandler} />
              <label htmlFor="lugar">Lugar</label>
            </div>
            <div className="input-field col s4">
              <input name="dia" type="text" onChange={this.inputHandler} />
              <label htmlFor="dia">Dia</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input name="hora" type="text" onChange={this.inputHandler} />
              <label htmlFor="hora">Hora</label>
            </div>
            <div className="input-field col s6">
              <input name="tipoDeEntradas" type="text" onChange={this.inputHandler} />
              <label htmlFor="tipoDeEntradas">Tipo de entrada</label>
            </div>
          </div>



          <div className="row">
            <div className="input-field col s8">
              <input name="boleterias" type="text" onChange={this.inputHandler} />
              <label htmlFor="boleterias">Boleterias</label>
              <button onClick={this.sendHandler} name="gEnviar" className="col s4 btn waves-effect waves-light">Enviar
            <i className="material-icons right">send</i>
              </button>
            </div>
          </div>


        </div>

      </div>

    )
  }
}

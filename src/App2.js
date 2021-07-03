import React, { Component } from "react";
import axios from "axios";
import FormInput from "./components/FormInput";
import Boton from "./components/Boton";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombrePerfilWeb: "",
      armedForces: false,
      business: false,
      charitable: false,
      permitidos: "",
      sitiosPermitidos: "",
    };
  }

  handlePerfilNameChange = (event) => {
    this.setState({
      nombrePerfilWeb: event.target.value,
    });
  };

  handleCheckboxChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleInputChange = (event) => {
    this.setState({
      permitidos: event.target.value,
    });
  };

  handleButton = (event) => {
    const valor = this.state.permitidos;
    const anterior = this.state.sitiosPermitidos;
    const value = anterior !== "" ? valor + "," + anterior : valor;
    //console.log(value);
    this.setState({
      sitiosPermitidos: value,
  
    });
    document.getElementById("permitidos").value=""
  };

  handleSubmit = (event) => {
   
  
    const data = {
      NombrePerfil: this.state.nombrePerfilWeb,
      ArmedForces: this.state.armedForces,
      Bussines: this.state.business,
      Charitable: this.state.charitable,
      sitesPermited: this.state.sitiosPermitidos,
    };

    const url = "http://localhost:4000";

    axios({
      method: "post",
      url: url,
      data,
    })
    .then((response) => {
      alert(response.data)
      this.setState({
        nombrePerfilWeb: "",
        armedForces: false,
        business: false,
        charitable: false,
        permitidos: "",
        sitiosPermitidos: "",
      });
    }, (error) => {
      alert('Ha ocurrido un error')
      
    });

    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h3 className="mb-5">Perfil de Filtrado Web</h3>
          <div className="d-flex align-items-center">
            <label>Nombre del Perfil</label>
            <input
              className="form-control ms-2"
              type="text"
              value={this.state.nombrePerfilWeb}
              onChange={this.handlePerfilNameChange}
              required
            />
          </div>
          <label className="mt-3">General Interest - Business</label>
          <FormInput
            name="armedForces"
            status={this.state.armedForces}
            texto="Armed"
            onchange={this.handleCheckboxChange}
          />
          <FormInput
            name="business"
            status={this.state.business}
            texto="Business"
            onchange={this.handleCheckboxChange}
          />
          <FormInput
            name="charitable"
            status={this.state.charitable}
            texto="Charitable"
            onchange={this.handleCheckboxChange}
          />
          <label className="mt-4">SITIOS ESPECIFICOS A PERMITIR</label>
          <div className="d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              onChange={this.handleInputChange}
              name="permitidos"
              id="permitidos"
            ></input>
            <button 
              id="plus"
              type="button"
              className="btn btn-primary ms-2"
              onClick={this.handleButton}
            >
            +
            </button>
          </div>

          <textarea
            className="form-control w-75 mt-2"
            rows="5"
            name="sitiosPermitidos"
            value={this.state.sitiosPermitidos}
          ></textarea>

          <Boton
            clase="mt-3 btn btn-outline-primary"
            texto="Registrar"
            tipo="submit"
          />
        </form>
      </div>
    );
  }
}

export default App;

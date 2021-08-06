import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TipoInterface: "",
      Alias: "",
      Internet: "SI",
      TipoIP: "MANUAL",
      DireccionIP: "",
      Mascara: "",
      Gateway: "",
      Vlan: "",
      id: "610ca5db0a831b20c80247d2", //id cliente
      WanSaved: "",
      LanSaved: "",
      LanAlias: "",
      LanDireccionIP: "",
      LanMascara: "",
      LanVlan: "",
      DHCP: "",
      DHCPFrom: "",
      DHCPTo: "",
      LanServidorDNS1: "",
      LanServidorDNS2: "",
    };
  }

  componentDidMount() {
    const url = "http://localhost:4000";
    const params = { id: this.state.id };

    axios({
      method: "get",
      url,
      params,
    }).then(
      (response) => {
        this.setState({ 
          WanSaved: response.data.Wan,
          LanSaved: response.data.Lan
        });
      },
      (error) => {
        alert("Ha ocurrido un error");
        console.log(error);
      }
    );
  }

  handleTipoInterface = (event) => {
    this.setState({ TipoInterface: event.target.value });
  };

  handleAlias = (event) => {
    this.setState({
      Alias: event.target.value,
    });
  };

  handleInternet = (event) => {
    this.setState({
      Internet: event.target.value,
    });
  };

  handleTipoIP = (event) => {
    this.setState({
      TipoIP: event.target.value,
    });
  };

  handleDireccionIP = (event) => {
    this.setState({
      DireccionIP: event.target.value,
    });
  };

  handleMascara = (event) => {
    this.setState({
      Mascara: event.target.value,
    });
  };

  handleGateway = (event) => {
    this.setState({
      Gateway: event.target.value,
    });
  };

  handleVlan = (event) => {
    this.setState({
      Vlan: event.target.value,
    });
  };

  handleLanAlias = (event) => {
    this.setState({
      LanAlias: event.target.value,
    });
  };

  handleLanDireccionIP = (event) => {
    this.setState({
      LanDireccionIP: event.target.value,
    });
  };

  handleLanMascara = (event) => {
    this.setState({
      LanMascara: event.target.value,
    });
  };

  handleLanVlan = (event) => {
    this.setState({
      LanVlan: event.target.value,
    });
  };

  handleDHCP = (event) => {
    this.setState({
      DHCP: event.target.value,
    });
  };

  handleDHCPFrom = (event) => {
    this.setState({
      DHCPFrom: event.target.value,
    });
  };

  handleDHCPTo = (event) => {
    this.setState({
      DHCPTo: event.target.value,
    });
  };

  handleLanServidorDNS1 = (event) => {
    this.setState({
      LanServidorDNS1: event.target.value,
    });
  };

  handleLanServidorDNS2 = (event) => {
    this.setState({
      LanServidorDNS2: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const data = {
      TipoInterface: this.state.TipoInterface.trim(),
      Alias: this.state.Alias.trim(),
      Internet: this.state.Internet.trim(),
      TipoIP: this.state.TipoIP.trim(),
      DireccionIP: this.state.DireccionIP.trim(),
      Mascara: this.state.Mascara.trim(),
      Gateway: this.state.Gateway.trim(),
      Vlan: this.state.Vlan.trim(),
      LanAlias: this.state.LanAlias.trim(),
      LanDireccionIP: this.state.LanDireccionIP.trim(),
      LanMascara: this.state.LanMascara.trim(),
      LanVlan: this.state.LanVlan.trim(),
      LanDHCP: this.state.DHCP.trim(),
      DHCPFrom: this.state.DHCPFrom.trim(),
      DHCPTo: this.state.DHCPTo.trim(),
      LanServidorDNS1: this.state.LanServidorDNS1.trim(),
      LanServidorDNS2: this.state.LanServidorDNS2.trim(),
    };
    const url = "http://localhost:4000";
    axios({
      method: "post",
      url: url,
      data,
    }).then(
      (response) => {
        this.setState({
          TipoInterface: "",
          Alias: "",
          Internet: "SI",
          TipoIP: "MANUAL",
          DireccionIP: "",
          Mascara: "",
          Gateway: "",
          Vlan: "",
          LanAlias: "",
          LanMascara: "",
          LanDireccionIP: "",
          LanVlan: "",
          LanDHCP: "",
          DHCPFrom: "",
          DHCPTo: "",
          LanServidorDNS1: "",
          LanServidorDNS2: "",
        });
      },
      (error) => {
        alert("Ha ocurrido un error");
        console.log(error);
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div>
          <img src="axtel.png" alt="axtel logo" className="image-title"></img>
        </div>
        <div className="page-header text-center">
          <h1>
            <small>CONFIGURACIÓN DE INTERFACES</small>
          </h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.state.WanSaved.length !== 0 && (
            <div>
              <hr></hr>
              <label>INTERFACES WAN REGISTRADAS</label>
              <p></p>
              <table border="1">
                <thead>
                  <tr>
                    <th>Alias</th>
                    <th>TipoIP</th>
                    <th>DireccionIP</th>
                    <th>Mascara</th>
                    <th>Gateway</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.WanSaved.map(function (wan, key) {
                    return (
                      <tr key={key}>
                        <td>{wan.Alias}</td>
                        <td>{wan.TipoIP}</td>
                        <td>{wan.DireccionIP}</td>
                        <td>{wan.Mascara}</td>
                        <td>{wan.Gateway}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

{this.state.LanSaved.length !== 0 && (
 <div>
 <hr></hr>
 <label>INTERFACES LAN REGISTRADAS</label>
 <p></p>
 <table border="1">
   <thead>
     <tr>
       <th>Alias</th>
       <th>DireccionIP</th>
       <th>Mascara</th>
       <th>VLAN</th>
       <th>DHCP</th>
       <th>RANGO DHCP</th>
       <th>SERVIDOR DNS 1</th>
       <th>SERVIDOR DNS 2</th>
     </tr>
   </thead>
   <tbody>
     {this.state.LanSaved.map(function (lan, key) {
       return (
         <tr key={key}>
           <td>{lan.LanAlias}</td>
           <td>{lan.LanDireccionIP}</td>
           <td>{lan.LanMascara}</td>
           <td>{lan.LanVlan}</td>
           <td>{lan.LanDHCP}</td>
           <td>{lan.DHCPFrom}-{lan.DHCPTo}</td>
           <td>{lan.LanServidorDNS1}</td>
           <td>{lan.LanServidorDNS2}</td>
         </tr>
       );
     })}
   </tbody>
 </table>
</div>

)}

          <hr></hr>
          <label>Agregar Interface (WAN/LAN)</label>
          <select
            className="form-select form-select-lg mb-3 ml-2"
            value={this.state.TipoInterface}
            onChange={this.handleTipoInterface}
          >
            <option value=""></option>
            <option value="WAN">WAN</option>
            <option value="LAN">LAN</option>
          </select>

          <span>
            {this.state.TipoInterface === "WAN" && (
              <div className="align-items-center">
                <div className="mb-2 d-flex align-items-center">
                  <label>NOMBRE WAN (ALIAS)</label>
                  <input
                    className="form-control ml-2"
                    type="text"
                    value={this.state.Alias}
                    onChange={this.handleAlias}
                    required
                  />
                </div>

                <div className="mb-2">
                  <label>INTERNET</label>
                  <select
                    value={this.state.Internet}
                    onChange={this.handleInternet}
                    className="form-select ml-2"
                  >
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                  </select>
                </div>

                <div className="mb-2">
                  <label>TIPO DE IP</label>
                  <select
                    value={this.state.TipoIP}
                    onChange={this.handleTipoIP}
                    className="form-select ml-2"
                  >
                    <option value="MANUAL">MANUAL</option>
                    <option value="DHCP">DHCP</option>
                    <option value="PPPoE">PPPoE</option>
                  </select>
                </div>
                {this.state.TipoIP === "MANUAL" && (
                  <span>
                    <div className="mb-2 d-flex align-items-center">
                      <label>DIRECCION IP</label>
                      <input
                        className="form-control ml-2"
                        type="text"
                        value={this.state.DireccionIP}
                        onChange={this.handleDireccionIP}
                        placeholder="xxx.xxx.xxx.xxx"
                        required
                      />
                    </div>

                    <div className="mb-2 d-flex align-items-center">
                      <label>MASCARA DE RED</label>
                      <input
                        className="form-control ml-2"
                        type="text"
                        value={this.state.Mascara}
                        onChange={this.handleMascara}
                        placeholder="xxx.xxx.xxx.xxx"
                        required
                      />
                    </div>

                    <div className="mb-2 d-flex align-items-center">
                      <label>GATEWAY</label>
                      <input
                        className="form-control ml-2"
                        type="text"
                        value={this.state.Gateway}
                        onChange={this.handleGateway}
                        placeholder="xxx.xxx.xxx.xxx"
                        required
                      />
                    </div>
                  </span>
                )}

                <div className="mb-2 d-flex align-items-center">
                  <label>VLAN</label>
                  <input
                    className="form-control ml-2"
                    type="text"
                    value={this.state.Vlan}
                    onChange={this.handleVlan}
                    placeholder="[1-4096]"
                    required
                  />
                </div>

                <button className="mt-3 btn btn-outline-primary" type="submit">
                  Agregar
                </button>
                <br></br>
                <br></br>
              </div>
            )}
          </span>
          {this.state.TipoInterface === "LAN" && (
            <div>

              <div className="align-items-center">
                <div className="mb-2 d-flex align-items-center">
                  <label>NOMBRE LAN (ALIAS)</label>
                  <input
                    className="form-control ml-2 d-flex align-items-center"
                    type="text"
                    value={this.state.LanAlias}
                    onChange={this.handleLanAlias}
                    required
                  />
    
                  <span className="tc-img">Nombre con la que se va a identificar a la interface</span>

                </div>

                <div className="mb-2 d-flex align-items-center">
                  <label>DIRECCION IP</label>
                  <input
  
                    className="form-control ml-2"
                    type="text"
                    value={this.state.LanDireccionIP}
                    onChange={this.handleLanDireccionIP}
                    placeholder="xxx.xxx.xxx.xxx"
                    required
                  />
                    <span className="tc-img">Direccion IP de la interface del firewall</span>

                </div>

                <div className="mb-2 d-flex align-items-center">
                  <label>MASCARA DE RED</label>
                  <input
                    className="form-control ml-2"
                    type="text"
                    value={this.state.LanMascara}
                    onChange={this.handleLanMascara}
                    placeholder="xxx.xxx.xxx.xxx"
                    required
                  />
                </div>

                <div className="mb-2 d-flex align-items-center">
                  <label>VLAN</label>
                  <input
                    className="form-control ml-2"
                    type="text"
                    value={this.state.LanVlan}
                    onChange={this.handleLanVlan}
                    placeholder="[1-4096]"
                    required
                  />
                </div>

                <div className="select-control mb-2 d-flex align-items-center">
                  <label>ENTREGA DHCP</label>
                  <select
                  
                    value={this.state.DHCP}
                    onChange={this.handleDHCP}
                    className="form-select ml-2"
                  >
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                  </select>
                  <span className="tc-img">Seleccionar "SI" en caso de que la interface entregue DHCP
                  </span>
                

                </div>

                <div className="mb-2 d-flex align-items-center">
                  <label>RANGO DE DHCP</label>
                  <input
                    className="form-control ml-2"
                    type="text"
                    value={this.state.DHCPFrom}
                    onChange={this.handleDHCPFrom}
                    placeholder="xxx.xxx.xxx.xxx"
                    required
                  />
                   <input
                    className="form-control ml-2"
                    type="text"
                    value={this.state.DHCPTo}
                    onChange={this.handleDHCPTo}
                    placeholder="xxx.xxx.xxx.xxx"
                    required
                  />
                  <span className="tc-img">
                  Rango de direcciones IP que serán entregadas
                  </span>
                </div>

                <div className="mb-2 d-flex align-items-center">
                  <label>SERVIDOR DNS 1</label>
                  <input
                    className="form-control ml-2"
                    type="text"
                    value={this.state.LanServidorDNS1}
                    onChange={this.handleLanServidorDNS1}
                    placeholder="xxx.xxx.xxx.xxx"
                    required
                  />
                  <span className="tc-img">Seleccionar si se desea usar el servidor DNS de Axtel (207.248.224.71) o especificar cual se desea usar en el DHCP</span>
                </div>

                <div className="mb-2 d-flex align-items-center">
                  <label>SERVIDOR DNS 2</label>
                  <input
                    className="form-control ml-2"
                    type="text"
                    value={this.state.LanServidorDNS2}
                    onChange={this.handleLanServidorDNS2}
                    placeholder="xxx.xxx.xxx.xxx"
                    required
                  />  
                  <span className="tc-img">
                  Seleccionar si se desea usar el servidor DNS de Axtel (207.248.224.71) o especificar cual se desea usar en el DHCP.
                  </span>


                </div>

                <button className="mt-3 btn btn-outline-primary" type="submit">
                  Agregar
                </button>
                <br></br>
                <br></br>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default App;

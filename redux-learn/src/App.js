import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import "./App.css";

export class App extends Component {
  onChange = (e) => {
    if (e.target.name === "nama") {
      this.props.gantiNama(e.target.value);
    }
    if (e.target.name === "umur") {
      this.props.gantiUmur(e.target.value);
    }
  };
  darkMode = () => {
    this.props.toDark("black", "white");
    document.body.style.backgroundColor = "#000010";
    document.body.style.color = "#ffffcc";
  };
  lightMode = () => {
    this.props.toDark("white", "black");
    document.body.style.backgroundColor = "#ffffe6";
    document.body.style.color = "black";
  };
  render() {
    return (
      <Container className="badan" style={{ color: this.props.color, backgroundColor: this.props.background }}>
        <h2>Nama & Umur</h2>
        <br />
        <p>Nama: {this.props.nama}</p>
        <p>Umur: {this.props.umur}</p>
        <br />
        <input name="nama" onChange={this.onChange} placeholder="nama"></input>
        <br />
        <input name="umur" onChange={this.onChange} placeholder="tahun lahir"></input>
        <br />
        <label class="switch">
          <input type="checkbox" onClick={this.props.background === "white" ? this.darkMode : this.lightMode}></input>
          <span class="slider round"></span>
        </label>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { nama: state.nama, umur: state.umur, background: state.background, color: state.color };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gantiNama: (data) => dispatch({ type: "CHANGE_NAME", nama: data }),
    gantiUmur: (data) => dispatch({ type: "CHANGE_AGE", umur: data }),
    toDark: (data1, data2) => dispatch({ type: "SWITCH-DARK", background: data1, color: data2 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

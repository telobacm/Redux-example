import React, { Component } from "react";
import { connect } from "react-redux";
import { gantiJudul } from "../redux/actions";

class Test extends Component {
  onChange = (e) => {
    console.log(e.target.value);
    if (e.target.name === "judul") {
      this.props.gantiTitle(e.target.value);
    }
    if (e.target.name === "konten") {
      this.props.gantiKonten(e.target.value);
    }
  };
  render() {
    return (
      <div>
        <p>//Form.js</p>
        <br />
        <h1>{this.props.judul}</h1>
        <p>{this.props.konten}</p>
        <input name="judul" onChange={this.onChange} placeholder="Judul" />
        <input name="konten" onChange={this.onChange} placeholder="Isi" />
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { judul: state.title, konten: state.konten };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gantiTitle: (data) => dispatch(gantiJudul(data)),
    gantiKonten: (data) => dispatch({ type: "GANTI_KONTEN", konten: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);

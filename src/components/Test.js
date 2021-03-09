import React, { Component } from "react";
import { connect } from "react-redux";
import { gantiJudul } from '../redux/actions'

class Test extends Component {
  onChange = (e) => {
    console.log(e.target.value);
    if (e.target.name === 'judul') {
      this.props.gantiTitle(e.target.value)
    }
    if (e.target.name === 'konten') {
      this.props.gantiKonten(e.target.value)
    }
  };
  render() {
    return (
      <div>
        <h1>{this.props.judul}</h1>
        <input name="judul" onChange={this.onChange} />
        <input name="konten" onChange={this.onChange} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { judul: state.title };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gantiTitle: (data) => dispatch(gantiJudul(data)),
    gantiKonten: (data) => dispatch({ type: "GANTI_KONTEN", konten: data }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);

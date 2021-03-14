// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { gantiJudul } from "../redux/actions";

function mapDispatchToProps(dispatch) {
  return {
    tambahArtikel: (article) => dispatch(gantiJudul(article)),
    gantiKonten: (data) => dispatch({ type: "GANTI_KONTEN", konten: data }),
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      konten: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.tambahArtikel(title);
    this.setState({ title: "" });
    const { konten } = this.state;
    this.props.gantiKonten(konten);
    this.setState({ konten: "" });
  }
  render() {
    const { title, konten } = this.state;
    return (
      <div>
        <p>//Form.js</p>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input type="text" id="title" value={title} onChange={this.handleChange} />
            <label>Isi</label>
            <input type="text" id="konten" value={konten} onChange={this.handleChange} />
          </div>
          <button type="submit">SAVE</button>
        </form>
      </div>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;

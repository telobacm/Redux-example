import React, { Component } from "react";
import { connect } from "react-redux";

class Test extends Component {
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ judul: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>{this.props.judul}</h1>
        <input name="judul" onChange={this.onChange} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { judul: state.title };
};

export default connect(mapStateToProps, null)(Test);

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function ValidCardNumber(string) {
  var string = string.substring(0, 19).replace(/\D/g, "");
  var array = [];
  for (var i = 0; i < string.length; i += 4) {
    array.push(string.slice(i, i + 4));
  }
  return array.join(" ");
}
/*----------------------------------------------*/
function ValidateHolderName(string) {
  return string.substring(0, 19).replace(/([^A-Z])(\s)/gi, "");
}
/*----------------------------------------------*/
function ValidthruDate(str) {
  var str = str.substring(0, 5).replace(/\D/gi, "");
  var arr = [];
  for (var i = 0; i < str.length; i += 2) {
    arr.push(str.slice(i, i + 2));
  }
  return arr.join("/");
}
/*----------------------------------------------*/
class ReactCreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardNumber: "xxxx xxxx xxxx xxxx",
      creditCardHolderName: "Card Holder",
      validThru: "12/12"
    };

    this.handleValidCardNumber = this.handleValidCardNumber.bind(this);
    this.handleChangeHolderName = this.handleChangeHolderName.bind(this);
    this.handleChangeValidThru = this.handleChangeValidThru.bind(this);
  }
  /*----------------------------------------------*/
  handleValidCardNumber(event) {
    this.setState({ creditCardNumber: ValidCardNumber(event.target.value) });
    console.log(event.target.value);
  }
  /*----------------------------------------------*/
  handleChangeHolderName(event) {
    this.setState({
      creditCardHolderName: ValidateHolderName(event.target.value)
    });
    console.log(event.target.value);
  }
  /*----------------------------------------------*/
  handleChangeValidThru(event) {
    this.setState({ validThru: ValidthruDate(event.target.value) });
    console.log(event.target.value);
  }
  /*----------------------------------------------*/
  render() {
    return (
      <div className="credit-card">
        <div className="mk-icon-world-map" />
        <h1 className="credit-card-title"> CREDIT CARD </h1>
        <div className="credit-card-chip" />
        <div className="credit-card-content">
          <div className="credit-card-text">
            <h2 className="credit-card-number">
              {this.state.creditCardNumber}
            </h2>
            <h2 className="credit-card-valid-thru"> {this.state.validThru} </h2>
            <h2 className="credit-card-holder-name">
              {this.state.creditCardHolderName}
            </h2>
          </div>
          <div className="credit-card-logo" />
        </div>
        <form className="credit-card-form">
          <input
            type="text"
            value={this.state.creditCardNumber}
            onChange={this.handleValidCardNumber}
          />
          <br />
          <input
            type="text"
            value={this.state.creditCardHolderName}
            onChange={this.handleChangeHolderName}
          />
          <br />
          <input
            type="text"
            value={this.state.validThru}
            onChange={this.handleChangeValidThru}
          />
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ReactCreditCard />, rootElement);

import React, { Component } from 'react';
import styled from 'styled-components';
// imp tab
import PropTypes from 'prop-types';

const Td = styled.td`
  border: 1px solid #ccc;
  width: 29vh;
`;

// LIFT THE STATE UP

//rcc tab for class-based component
export default class Coin extends Component {

  handleClick = (event) => {
    // prevent form from reloading
    event.preventDefault();
    this.props.handleRefresh(this.props.ticker);
  }


  render() {
    return (
      <tr>
        <Td>{this.props.name}</Td>
        <Td>{this.props.ticker}</Td>
        <Td>${this.props.price}</Td> 
        {this.props.showBalance ? <Td>${this.props.balance}</Td> : null}
        <Td>
          <form action="#" method="POST">
            <button onClick={this.handleClick}>Refresh</button>
          </form>
        </Td>
      </tr>
    );
  }
}


Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

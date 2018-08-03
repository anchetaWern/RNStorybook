import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { favoritedCard } from "../actions";
import Card from "./Card";

class CardList extends Component {
  render() {
    return <View style={styles.container}>{this.renderCards()}</View>;
  }

  renderCards = () => {
    return this.props.cards.map(item => {
      return (
        <Card
          key={item.id}
          image={item.image}
          text={item.label}
          is_favorite={item.is_favorite}
          action={this.props.favoritedCard.bind(this, item.id)}
        />
      );
    });
  };
}

const styles = {
  container: {
    flex: 1
  }
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  favoritedCard: PropTypes.func.isRequired
};

const mapStateToProps = ({ cards }) => {
  return cards;
};

export default connect(
  mapStateToProps,
  {
    favoritedCard
  }
)(CardList);

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class MyButton extends Component {
  render() {
    const { color, backgroundColor } = this.props;

    return (
      <TouchableOpacity style={[styles.button, { backgroundColor }]}>
        <Text style={[styles.text, { color }]}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
  }
});
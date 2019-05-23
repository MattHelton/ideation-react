import React, { Component, Fragment } from 'react';
import DisplayIdea from './DisplayIdea';
import GenerateButton from './GenerateButton';
import {choices} from '../modules/choices'
import '../App.css';


class Generate extends Component {
  constructor() {
    super();
    this.state = { chosenIdea: '' };
    this.clickHandler = this.clickHandler.bind(this)
  }

  randomizer() {
    return Math.floor((Math.random() * 20));
  }

  clickHandler() {
    const chosenIdea = choices[this.randomizer()];
    this.setState({ chosenIdea });
    const ideaElement = document.getElementById('idea');
    ideaElement.classList.remove('hidden');
  }

  render() {
    const { chosenIdea } = this.state;
    return (
      <Fragment>
        <GenerateButton onClick={this.clickHandler} />
        <DisplayIdea idea={chosenIdea} />
      </Fragment>
    );
  }
}


export default Generate;

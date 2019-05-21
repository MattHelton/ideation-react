import React, { Component, Fragment } from 'react'
import '../App.css';
import DisplayIdea from './DisplayIdea';
import GenerateButton from "./GenerateButton";


class Generate extends Component {
    state = {
        choices: ['“Beginners guide to...”', 'Buying/gift guide', 'Checklist', 'Comparison piece', 'Create a calendar of upcoming events', 'FAQ', 'Flow chart', '“How to...”', 'Interview industry experts (inside or outside your company)', 'Links roundup', 'List of things to do/never do', 'Mythbusting article', 'Predict future trends', 'Quote piece', 'The biggest influences/influencers', 'Timeline', 'Top 10 list', 'Update old content', 'Write a review/recommend a product, service, etc', '“x things to learn from...” (this could be a conference, event, TV show, movie, anything)'],
        chosenIdea: null
    }

    randomizer() {
        return Math.floor((Math.random() * 20))
    }

    clickHandler = () => {
        const chosenIdea = this.state.choices[this.randomizer()]
        this.setState({ chosenIdea })
        let ideaElement = document.getElementById('idea')
        ideaElement.classList.remove('hidden')
    }

    render() {
            return (
                <Fragment>
                    <GenerateButton onClick={this.clickHandler}/>
                    <DisplayIdea idea={this.state.chosenIdea} />
                </Fragment>
            )
    }

}


export default Generate
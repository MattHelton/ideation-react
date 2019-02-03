import React from 'react'
import '../App.css';
// import ReactDOM from 'react-dom'

class Generate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            choices: ['“Beginners guide to...”', 'Buying/gift guide', 'Checklist', 'Comparison piece', 'Create a calendar of upcoming events', 'FAQ', 'Flow chart', '“How to...”', 'Interview industry experts (inside or outside your company)', 'Links roundup', 'List of things to do/never do', 'Mythbusting article', 'Predict future trends', 'Quote piece', 'The biggest influences/influencers', 'Timeline', 'Top 10 list', 'Update old content', 'Write a review/recommend a product, service, etc', '“x things to learn from...” (this could be a conference, event, TV show, movie, anything)'],
            chosenIdea: ''

        }
    }
    randomizer() {
        return Math.floor((Math.random() * 20))
    }
    chooseIdea = () => {
        const chosenIdea = this.state.choices[this.randomizer()]
        this.setState({ chosenIdea })

        
    }
    render() {
            return (
                <div>
                    <button id='btn' onClick={this.chooseIdea}>Generate</button>
                    <p id='idea'>{this.state.chosenIdea}</p>
                </div>
            )
    }

}


export default Generate
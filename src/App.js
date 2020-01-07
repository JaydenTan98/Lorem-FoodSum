import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./App.css";
import HeaderComponent from "./components/Header/Header";
import SidebarComponent from "./components/Sidebar/Sidebar";
import GeneratorComponent from "./components/Generator/Generator";
//Import the words dictionary
import { dict } from "./dictionary";

class App extends Component {
    constructor(props) {
        super(props);
        //default paragraph and sentence
        this.state = {
            numParagraphs: 2,
            numSentences: 4,
            text: this.ipsum(2, 4, dict)
        };
        this.updateParagraphs = this.updateParagraphs.bind(this);
        this.updateSentences = this.updateSentences.bind(this);
    }

    generate() {
        // generate ipsum by passing in sentence and paragraph values from state and the words array
        // text state is then passed down to generator component in props
        this.setState({
            text: this.ipsum(this.state.numParagraphs, this.state.numSentences, dict)
        });
    }

    updateParagraphs(e) {
        // set value from paragraph select in state
        this.setState({ numParagraphs: e.target.value }, this.generate);
    }

    updateSentences(e) {
        // set value from sentence select in state
        this.setState({ numSentences: e.target.value }, this.generate);
    }

    ipsum(numParagraphs, numSentences, phrases) {
        var text = "";
        if (numParagraphs < 1) {
            return text;
        }
        // Create num of paragraphs based on the user's request
        for (var i = 0; i < numParagraphs; i++) {
            var paragraph = "";
            // Create num of sentences based on the user's request
            for (var j = 0; j < numSentences; j++) {
                var sentence = "";
                // 10 - 15 words per sentence, randomly, then loop that many times, grabbing random word
                var numWords = Math.floor(Math.random() * 6 + 10);

                for (var k = 0; k < numWords; k++) {
                    // word placeholder
                    var word = "";
                    // get random index for words array
                    var wordNum = Math.floor(Math.random() * phrases.length);
                    word = phrases[wordNum];
                    // if its not the first word, put a space in front of it
                    if (k !== 0) {
                        sentence += " ";
                    }
                    // add word to sentence placeholder and run word choosing loop again
                    sentence += word;
                }
                // when word loop complete, punctuate sentence
                sentence += ".";
                // capitalized first letter of the sentence
                sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
                // add the sentence and space after to the paragraph
                paragraph += sentence;
                paragraph += " ";
            }
            // when sentence loop complete, added p tags for formatting and insert into text placeholder
            paragraph = "<p>" + paragraph + "</p>";
            text += paragraph;
        }
        return text;
    }

    render() {
        return (
            <div className="App">
                <HeaderComponent />
                <Grid className="app-container">
                    <Row>
                        <Col xs={14} md={8}>
                            <GeneratorComponent text={this.state.text} />
                        </Col>
                        <Col xs={14} md={4}>
                            <SidebarComponent
                                updateParagraphs={this.updateParagraphs}
                                updateSentences={this.updateSentences}
                                numParagraphs={this.state.numParagraphs}
                                numSentences={this.state.numSentences}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;

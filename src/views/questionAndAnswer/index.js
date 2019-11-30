import React, { Component } from 'react';
import Header from '../../components/QuestionAndAnswer/header';



export default class QuestionAndAnswer extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Content></Content>
            </div>
        )
    }
}

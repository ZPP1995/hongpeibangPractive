import React, { Component } from 'react';
import Header from '../../components/QuestionAndAnswer/header';
import Content from '../../components/QuestionAndAnswer/content';
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
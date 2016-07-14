import React, { Component }  from 'react'
import Article from './Article/index'
import oneOpen from '../decorators/oneOpen'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

import moment from 'moment';

class ArticleList extends Component {

    state = {
        selectedArticles: null,
        range            : {
            from: null,
            to  : null
        }
    }

    render() {
        const { articles, isItemOpen, toggleOpenItem } = this.props
        const {from, to} = this.state.range

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {isItemOpen(article.id)}
                openArticle = {toggleOpenItem(article.id)}
            />
        </li>)

        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h1>Article list</h1>
                <Select
                    options = {options}
                    multi = {true}
                    value = {this.state.selectedArticles}
                    onChange = {this.handleSelectChange}
                />

                <DayPicker
                    selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
                    onDayClick={this.handleDayClick}
                />

                <p>from {moment(from).format('L')} to {moment(to).format('L')}</p>

                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }

    handleDayClick = ((e, day) => {
        const range = DateUtils.addDayToRange(day, this.state.range);
        this.setState({range});
    }).bind(this)

    handleSelectChange = (selectedArticles) => {
        console.log(selectedArticles)
        this.setState({
            selectedArticles
        })
    }
}

export default oneOpen(ArticleList)
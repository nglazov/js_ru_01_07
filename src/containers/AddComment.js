import React, { Component }  from 'react'

export default class AddComment extends Component {
    render(){
        return <div>
            <input type="text" ref="text"/>
            <input type="textarea" ref="author"/>
            <input type="submit" onClick={this.handleClick}/>
        </div>
    }

    handleClick = ()=>{
        const {handleSubmit} = this.props
        //так можно, но это не очень хорошая практика. Посмотри запись первой половины 3-го занятия, как хранить value инпутов в стейте
        handleSubmit(this.refs.author.value, this.refs.text.value)
    }
}

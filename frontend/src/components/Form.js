
import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            city: '',
            isActive: true,
        }
        this.initialState = this.state
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })

    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }


    render() {
        const { name, email, city, phone } = this.state;
        return (
            <div className='container' style={{'width':'22rem'}}>
                <h2>{this.state.name? `entered costumer values are:${this.state.name}, ${this.state.email} and ${this.state.city}` :""} </h2>
                <form onSubmit= {this.onFormSubmit}>
                    <label htmlFor = 'name'>Costumer</label>
                    <input
                    name='name'
                    type='text'
                    id='name'
                    value={name}
                    onChange={this.handleChange}
                    />
                    <label htmlFor = 'email'>Email</label>
                    <input
                    name='email'
                    type='text'
                    id='email'
                    value={email}
                    onChange={this.handleChange}
                    />
                    <label htmlFor='phone'>Phone</label>
                    <input
                    name='phone'
                    type='tel'
                    id='phone'
                    value={phone}
                    pattern ='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    onChange={this.handleChange}
                    />
                    <small>Format: 123-456-7890</small>
                    <label htmlFor = 'city'>City</label>
                    <input
                    name='city'
                    type='text'
                    id='city'
                    value={city}
                    onChange={this.handleChange}
                    />
                    <button type='submit'> Submit</button>    
                    </form >  
            </div >
        )
    }
}


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as employeeActions from '../redux/actions/employeeActions';


class employee extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            employee: {
                name: '',
                title: '',
                time: '',
                teamid: '',
                pto: ''
            }
        };

        this.state = this.initialState;
        
    }
    
//update state everytime that there is a change on any imput
    handleChange = event => {
        const { name, value } = event.target;
        const employee = { ...this.state.employee, [name]: value }

        this.setState({ employee });
    }
//dispatch the Redux createEmployee action on submit
    onFormSubmit = (event) => {
        alert('Employee Added!');
        event.preventDefault();
        this.props.dispatch(employeeActions.createEmployee(this.state.employee))
        this.resetForm();
    }
//is to clear the form once submitted 
    resetForm = () => {
        const employee = { ...this.state.employee, name: "", title: "", time: "", pto: "" }

        this.setState({ employee });
    }

    render() {
        const { employee } = this.state;
       
           return (
           
            <div className="container">
            <form onSubmit={this.onFormSubmit} >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={employee.name}
                    onChange={this.handleChange} />
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={employee.title}
                    onChange={this.handleChange} />
                <label htmlFor="time">Capacity per day</label>
                <input
                    type="number"
                    name="time"
                    id="time"
                    placeholder="Time"
                    value={employee.time}
                  
                    onChange={this.handleChange} />
                   
                <label htmlFor="pto">PTO/Holiday</label>
                <input
                    type="number"
                    name="pto"
                    id="pto"
                    value={employee.pto}
                    onChange={this.handleChange} />
                    
                <button type="submit">
                    Submit
                
             </button>
            </form>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        employees: state.employee
    }
}

export default connect(mapStateToProps)(employee);
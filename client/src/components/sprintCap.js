import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sprintActions from '../redux/actions/sprintActions';


class Sprint extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            sprint: {
                id: 1,
                sprintName: '',
                sprintLength: '',
                startDate: '',
                endDate: '',
                teamId: 1
            }
        };

        this.state = this.initialState;
    }

    //update state everytime that there is a change on any imput
    handleChange = event => {
        const { name, value } = event.target;
        const sprint = { ...this.state.sprint, [name]: value }

        this.setState({ sprint });
    }
    //dispatch the Redux createUser action on submit
    onFormSubmit = (event) => {
        alert('Sprint Added!');
        event.preventDefault();
        this.props.dispatch(sprintActions.createSprint(this.state.sprint))
        this.resetForm();
    }
    // //is to clear the form once submitted 
    resetForm = () => {
        const sprint = { ...this.state.sprint, sprintName: "", sprintLength: '', startDate: "", endDate: "" }

        this.setState({ sprint });
    }

    render() {
        const { sprint } = this.state;
        return (
            <div className="container">
                <form onSubmit={this.onFormSubmit} >
                    <label htmlFor="sprintName">Sprint Name</label>
                    <input
                        type="text"
                        name="sprintName"
                        id="sprintName"
                        value={sprint.sprintName}
                        onChange={this.handleChange} />
                    <label htmlFor="sprintName">Sprint Duration</label>
                    <input
                        type="number"
                        name="sprintLength"
                        id="sprintLength"
                        value={sprint.sprintLength}
                        onChange={this.handleChange} />
                    <label htmlFor="startDate">Sprint Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        id="startDate"
                        value={sprint.startDate}
                        onChange={this.handleChange} />
                    <label htmlFor="endDate">Sprint End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        id="endDate"
                        value={sprint.endDate}
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
        sprint: state.sprint
    }
}

export default connect(mapStateToProps)(Sprint);
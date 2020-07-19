import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sprintActions from '../redux/actions/sprintActions';


class Sprint extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            sprint: {
                SprintNumber: '',
                SprintLength: '',
                SprintStart: '',
                SprintEnd: '',

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
        const sprint = { ...this.state.sprint, SprintNumber: "", SprintLength: '', SprintStart: "", SprintEnd: "" }

        this.setState({ sprint });
    }

    render() {
        const { sprint } = this.state;
        return (
            <div className="container">
                <form onSubmit={this.onFormSubmit} >
                    <label htmlFor="SprintNumber">Sprint Name</label>
                    <input
                        type="text"
                        name="SprintNumber"
                        id="SprintNumber"
                        value={sprint.SprintNumber}
                        onChange={this.handleChange} />
                    <label htmlFor="SprintNumber">Sprint Duration</label>
                    <input
                        type="number"
                        name="SprintLength"
                        id="SprintLength"
                        value={sprint.SprintLength}
                        onChange={this.handleChange} />
                    <label htmlFor="SprintStart">Sprint Start Date</label>
                    <input
                        type="date"
                        name="SprintStart"
                        id="SprintStart"
                        value={sprint.SprintStart}
                        onChange={this.handleChange} />
                    <label htmlFor="SprintEnd">Sprint End Date</label>
                    <input
                        type="date"
                        name="SprintEnd"
                        id="SprintEnd"
                        value={sprint.SprintEnd}
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
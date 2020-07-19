import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as teamActions from '../redux/actions/teamActions';


class Team extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            team: {
                TeamName: '',
              

            }
        };

        this.state = this.initialState;

    }

    //update state everytime that there is a change on any imput
    handleChange = event => {
        const { name, value } = event.target;
        const team = { ...this.state.team, [name]: value }

        this.setState({ team });
    }
    //dispatch the Redux createUser action on submit
    onFormSubmit = (event) => {
        alert('Team Added!');
        event.preventDefault();
        this.props.dispatch(teamActions.createTeam(this.state.team))
        this.resetForm();
    }
    // //is to clear the form once submitted 
    resetForm = () => {
        const team = { ...this.state.team, TeamName: "",}

        this.setState({ team });
    }



    render() {
        const { team } = this.state;



        return (

            <div className="container">
                <form onSubmit={this.onFormSubmit} >
                    <label htmlFor="TeamName">Team Name</label>
                    <input
                        type="text"
                        name="TeamName"
                        id="TeamName"
                        value={team.TeamName}
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
        team: state.team
    }
}




export default connect(mapStateToProps)(Team);
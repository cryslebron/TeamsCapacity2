import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from './Table';
import SprintDate from './sprintCap';
import NewEmployee from './NewEmployee';
import SprintTable from './SprintTable';
import TeamTable from './TeamTable';
import AddTeam from './AddTeam'

import "react-datepicker/dist/react-datepicker.css";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { teamIsOpen: false, sprintIsOpen: false, employeeIsOpen: false }
    }
    toggleTeams = () => {
        this.setState(
            { teamIsOpen: !this.state.teamIsOpen }
        )
    }
    toggleSprints = () => {
        this.setState(
            { sprintIsOpen: !this.state.sprintIsOpen }
        )
    }

    toggleEmployees = () => {
        this.setState(
            { employeeIsOpen: !this.state.employeeIsOpen }
        )
    }

    render() {
        return (
            <div className="container">
                <h1>Team Capacity </h1>
                <div>
                    <div className="container">
                        <TeamTable />
                        <button onClick={this.toggleTeams}> Add new Team</button>
                        {this.state.teamIsOpen && <AddTeam />}
                    </div>
                    <br/>
                    <div className="container">
                        <SprintTable />
                        <button onClick={this.toggleSprints}> Add new Sprint</button>
                        {this.state.sprintIsOpen && <SprintDate />}
                    </div>
                    <br/>
                    <div className="container">
                        <Table />
                        <button onClick={this.toggleEmployees}> Add new Team Member</button>
                        {this.state.employeeIsOpen && <NewEmployee />}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(Home);
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
        this.state = { isOpen: false }
    }
    toggleForm = () => {
        this.setState(
            { isOpen: !this.state.isOpen }
        )
    }

    toggle = () => {
        this.setState(
            { isOpen: !this.state.isOpen }
        )

    }
    toggleTeams = () => {
        this.setState(
            { isOpen: !this.state.isOpen }
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
                        {this.state.isOpen && <AddTeam />}
                    </div>
                    <br/>
                    <div className="container">
                        <SprintTable />
                        <button onClick={this.toggle}> Add new Sprint</button>
                        {this.state.isOpen && <SprintDate />}
                    </div>
                    <br/>
                    <div className="container">
                        <Table />
                        <button onClick={this.toggleForm}> Add new Employee</button>
                        {this.state.isOpen && <NewEmployee />}

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Home);
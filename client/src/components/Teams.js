import React from 'react';
import { connect } from 'react-redux';
import config from '../config';

const Teams = (props) => {
    const { teams, sprints } = props;
    return (
        <div>
            <div className="container">
                <h1>Teams</h1>
                config.apiUrl: {config.apiUrl}
                {teams.map(team => (
                    <div key={team.TeamName}>{team.TeamName}</div>
                ))}
            </div>
            <br/>
            <div className="container">
                <h2>Sprint</h2>
                {sprints.map(sprint => (
                    <div key={sprint.SprintNumber}>{sprint.SprintNumber}</div>
                ))}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        teams: state.teams,
        sprints: state.sprints
    }
}

export default connect(mapStateToProps)(Teams);
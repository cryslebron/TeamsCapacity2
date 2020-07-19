import React from 'react';
import { connect } from 'react-redux';

const Teams = (props) => {
    const { teams } = props;
    return (
        <div className="container">
            <h1>Teams</h1>
            {teams.map(team => (
                <div key={team.TeamName}>{team.TeamName}</div>
            ))}
        </div>
    )
}





const Sprints = (props) => {
    const { sprints } = props;
    return (
        <div className="container">
            <h3>Sprint</h3>
            {sprints.map(sprint => (
                <div key={sprint.SprintNumber}>{sprint.SprintNumber}</div>
            ))}
        </div>
    )
}
function mapStateToProps(state) {
    return {
        teams: state.teams,
        sprints: state.sprints
    }
}

export default connect(mapStateToProps)(Teams, Sprints);
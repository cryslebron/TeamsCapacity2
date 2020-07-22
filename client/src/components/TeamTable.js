import React from 'react';
import { connect } from 'react-redux';
import * as teamActions from '../redux/actions/teamActions';
import { bindActionCreators } from 'redux';

const TeamHeader = () => {
    return (
        <thead>
            <tr>
                <th>Team Name</th>
            </tr>
        </thead>
    );
}

function deleteTeam(actions, teamName) {
    actions.deleteTeam(teamName);
}

const TeamBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.teamName}</td>
                <td><button onClick={() => deleteTeam(props.actions, row.teamName)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const TeamTable = (props) => {
    const { teams } = props;
    return (
        <div>
            <h2>Teams</h2>
            <table>
                <TeamHeader />
                <TeamBody characterData={teams} actions={props.actions} />
            </table>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        teams: state.teams
    }
}
//Since I have multiple subcomponents, I needed to add the binsActionCreator to call an action inside a subcomponent under TeamTable.js
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(teamActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamTable);

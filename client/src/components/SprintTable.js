import React from 'react';
import { connect } from 'react-redux';
import * as sprintActions from '../redux/actions/sprintActions';
import { bindActionCreators } from 'redux';

const SprintHeader = () => {
    return (
        <thead>
            <tr>
                <th>Sprint Number</th>
                <th>Start date</th>
                <th>End Date</th>
                <th>Sprint Length</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

function deleteSprint(actions, sprintNumber) {
    actions.deleteSprint(sprintNumber);
}

const SprintBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.SprintNumber}</td>
                <td>{row.SprintStart}</td>
                <td>{row.SprintEnd}</td>
                <td>{row.SprintLength}</td>
                <td><button onClick={() => deleteSprint(props.actions, row.sprintNumber)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const SprintTable = (props) => {
    const { sprints } = props;
    return (
        <div>
            <h2>Sprint</h2>
            <table>
                <SprintHeader />
                <SprintBody characterData={sprints} actions={props.actions} />
            </table>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        sprints: state.sprints
    }
}
//Since I have multiple subcomponents, I needed to add the binsActionCreator to call an action inside a subcomponent under SprintTable.js
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sprintActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SprintTable);

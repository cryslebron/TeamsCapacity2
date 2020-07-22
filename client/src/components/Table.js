import React from 'react';
import { connect } from 'react-redux';
import * as employeeActions from '../redux/actions/employeeActions';
import { bindActionCreators } from 'redux';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Capacity per day</th>
                <th>PTO/Holiday</th>
                <th>Available Hours</th>
                <th>Development Hours</th>
                <th>Scrum Hours</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}
// Delete employee by name
function deleteEmployee(actions, name) {
    actions.deleteEmployee(name);
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.title}</td>
                <td>{row.time}</td>
                <td>{row.pto}</td>
                <td>{row.time * 10 - row.pto}</td>
                <td>{(row.time * 10 - row.pto) * 0.70}</td>
                <td>{Math.round((row.time * 10 - row.pto) * 0.30 * 100) / 100}</td>
                <td><button onClick={() => deleteEmployee(props.actions, row.name)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { employees } = props;
    return (
        <div>
            <h2>Team Members</h2>
            <table>
                <TableHeader />
                <TableBody characterData={employees} actions={props.actions} />
            </table>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}
//Since I have multiple subcomponents, I needed to add the binsActionCreator to call an action inside a subcomponent under Table.js
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);

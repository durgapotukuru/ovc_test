import React from 'react';
import { fetchUser } from '../actions/users';
import { connect } from 'react-redux';

class Users extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchUser());
    }
    render() {
        // console.log(this.props.users);
        const users = this.props.users;
        return (
            <div className="container">
                <h1 className='display-3'>List of Users</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                            <th scope="col">Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) => {
                                return (<tr key={item.id}>
                                    <td key={item.name}>{item.name}</td>
                                    <td key={item.email}><a href={"mailto:" + item.email}>{item.email}</a></td>
                                    <td key={item.address.city}>{item.address.city}</td>
                                    <td key={item.company.name}>{item.company.name}</td>
                                </tr>);
                            })
                        }

                    </tbody>
                </table>

            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        users: state
    }
}

export default connect(mapStateToProps)(Users)

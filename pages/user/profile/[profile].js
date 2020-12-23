import { withRouter } from 'next/router'
import React from 'react';
import customAxios from './../../../shared/axios.instance';
import Layout from "../../../components/layout";

class Profile extends React.Component {
    state = {
        user: null
    }

    async componentDidMount() {
        const res = await customAxios.get('/user/' + this.props.router.query.profile);
        const data = await res.data;
        this.setState({ user: data });
    }

    render() {
        if (!this.state.user) {
            return (
                <Layout title="Profile">
                    <div>Loading...</div>
                </Layout>
            )
        }
        return (
            <Layout title="Profile">
                <div className="row">
                    <div className="main-section">
                        <img src={this.state.user.picture} className="avatar big" />
                        <p>
                            {this.state.user.firstName + this.state.user.lastName}
                        </p>
                        <p>
                            Gender: {this.state.user.gender}
                        </p>
                        <p>
                            Date Of Birth: {this.state.user.dateOfBirth}
                        </p>
                        <p>
                            Register Date: {this.state.user.registerDate}
                        </p>
                        <p>
                            Email: {this.state.user.email}
                        </p>
                        <p>
                            Phone: {this.state.user.phone}
                        </p>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default withRouter(Profile);
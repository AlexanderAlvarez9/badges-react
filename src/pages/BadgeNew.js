import React from 'react';

import '../components/styles/Badge.css'
import header from '../images/badge-header.svg'
import NavBar from '../components/NavBar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    };

    handleChange = e => {
        this.setState = ({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img src={header} alt="Logo" className="img-fluid" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                avatarUrl="https://s.gravatar.com/avatar/73e82d5839f558f49b9b9e50ca827b2b?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;
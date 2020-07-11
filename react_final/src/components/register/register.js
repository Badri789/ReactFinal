import React, {useContext, useState} from "react";
import classes from "./register.css";
import { connect } from "react-redux";
import GoRestServiceContext from "../goRest-service-context/goRest-service-context";
import { userAuthenticated } from "../../store/actions";
import { useHistory } from "react-router-dom";

const Register = ({ userAuthenticated }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');

    const goRestService = useContext(GoRestServiceContext);

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        goRestService.registerUser(firstName, lastName, gender, email, "active")
            .then(response => {
                console.log(response);
                userAuthenticated();
                history.push('/');
            });

    }

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const onGenderChange = (e) => {
        setGender(e.target.value);
    }


    return (
        <form className={classes['register-form']} onSubmit={onSubmit}>
            <legend>Authorize</legend>
            <div className="form-group">
                <label htmlFor="inputFirsName">First Name</label>
                <input type="text" className="form-control" id="inputFirsName"
                       placeholder="First Name" onChange={onFirstNameChange}
                       value={firstName}/>
            </div>
            <div className="form-group">
                <label htmlFor="inputLastName">Last Name</label>
                <input type="text" className="form-control" id="inputLastName"
                       placeholder="Last Name" onChange={onLastNameChange}
                       value={lastName}/>
            </div>
            <div className="form-group">
                <label htmlFor="inputGender">Gender(Enter male or female)</label>
                <input type="text" className="form-control" id="inputGender"
                       placeholder="Gedner" onChange={onGenderChange}
                       value={gender}/>
            </div>
            <div className="form-group">
                <label htmlFor="regInputEmail">Email address</label>
                <input type="email" className="form-control" id="regInputEmail" aria-describedby="emailHelp"
                       placeholder="Enter email" onChange={onEmailChange}
                       value={email}/>
            </div>
            <button type="submit" className="btn btn-primary">Authorize</button>
        </form>
    );
}

const mapDispatchToProps = {
    userAuthenticated
}

export default connect(null, mapDispatchToProps)(Register);

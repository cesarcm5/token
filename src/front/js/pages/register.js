import React, {useState, useContext, useEffect} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { toast } from "react-hot-toast";


const Register = () => {

    const { store, actions } = useContext(Context);
    const [user, setUser] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const registerUser = async (user) => {
        if (user.password !== user.passwordConfirm) {
            toast.error("Passwords do not match");
            return;
        }
        await actions.register(user.email, user.fullName, user.password);
        navigate("/");
    }

    useEffect(() => {
        if (store.token) {
            navigate("/");
        }
    }, []);

    return (
        <div className="mx-auto my-auto flex flex-col w-50">
            <h1 className="text-center">Register</h1>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={(event) => setUser({
                    ...user,
                    email: event.target.value
                })} />
            </div>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="email" className="form-control" onChange={(event) => setUser({
                    ...user,
                    fullName: event.target.value
                })} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="d-flex ">
                    <input type={showPassword ? "text" : "password"} className="form-control" onChange={(event) => setUser({
                        ...user,
                        password: event.target.value
                    })}/>
                    <button className="btn btn-success mx-1" 
                        onClick={() => setShowPassword(!showPassword)}
                    >{showPassword ? "🔒" : "👀"}</button>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm your password</label>
                <div className="d-flex ">
                    <input type={showPassword ? "text" : "password"} className="form-control" onChange={(event) => setUser({
                        ...user,
                        passwordConfirm: event.target.value
                    })}/>
                    <button className="btn btn-success mx-1" 
                        onClick={() => setShowPassword(!showPassword)}
                    >{showPassword ? "🔒" : "👀"}</button>
                </div>
            </div>
            <button type="submit" className="btn btn-success w-100"
            onClick={() => {registerUser(user); console.log("Este es el user", user)}}
            >Register</button>
        </div>
    )
};

export default Register;
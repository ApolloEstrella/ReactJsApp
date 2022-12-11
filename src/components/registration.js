import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { json } from "react-router-dom";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .min(3, "Password must be 3 characters at minimum")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required("Confirm Password is required")
});

class Registration extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Formik
                            initialValues={{ id: 0, email: "", password: "", confirmPassword: "" }}
                            validationSchema={LoginSchema}
                            onSubmit={(values) => {
                                //values.confirmPassword = values.password;
                                var a = JSON.stringify(values)
                                //alert("Form is validated! Submitting the form...");
                                 //values['passwordConfirmation'] = values["password"];
                               /* fetch('https://localhost:44395/member', {
                                    method: "POST",
                                    mode: 'cors',
                                    body: JSON.stringify(values),
                                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                                    credentials: 'same-origin', // include, *same-origin, omit
                                    headers: {
                                        'Content-Type': 'application/json'
                                        // 'Content-Type': 'application/x-www-form-urlencoded',
                                    },
                                    redirect: 'follow', // manual, *follow, error
                                    referrerPolicy: 'no-referrer',
                                    //headers: { "Content-type": "application/json; charset=UTF-8", "Access-Control-Allow-Origin": "*" }
                                })
                                    .then(response => response.json())
                                    .then(json => console.log(json))
                                    .catch((err) => alert(err)); */       
                                      
 
                                
                                fetch('https://localhost:44395/member', {
                                    method: 'POST',
                                    mode: 'cors',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Access-Control-Allow-Origin': '*'  
                                    },
                                    body: a
                                })
                                    .then(response => response.text()).then(t => t.json())



                        
                                







                                
                            }} 
                        >
                            {({ touched, errors, isSubmitting, values }) =>
                                !isSubmitting ? (
                                    <div>
                                        <div className="row mb-5">
                                            <div className="col-lg-12 text-center">
                                                <h1 className="mt-5">Registration Form</h1>
                                            </div>
                                        </div>
                                        <Form>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter email"
                                                    autocomplete="off"
                                                    className={`mt-2 form-control
						${touched.email && errors.email ? "is-invalid" : ""}`}
                                                />

                                                <ErrorMessage
                                                    component="div"
                                                    name="email"
                                                    className="invalid-feedback"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="password" className="mt-3">
                                                    Password
                                                </label>
                                                <Field
                                                    type="password"
                                                    name="password"
                                                    placeholder="Enter password"
                                                    className={`mt-2 form-control
						${touched.password && errors.password
                                                            ? "is-invalid"
                                                            : ""
                                                        }`}
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="password"
                                                    className="invalid-feedback"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="passwordConfirmation" className="mt-3">
                                                    Password
                                                </label>
                                                <Field
                                                    type="password"
                                                    name="confirmPassword"
                                                    placeholder="Confirm password"
                                                    className={`mt-2 form-control
						${touched.confirmPassword && errors.confirmPassword
                                                            ? "is-invalid"
                                                            : ""
                                                        }`}
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="confirmPassword"
                                                    className="invalid-feedback"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block mt-4"
                                            >
                                                Submit
                                            </button>
                                        </Form>
                                    </div>
                                ) : (
                                    <div>
                                        <h1 className="p-3 mt-5">Registration Form Submitted</h1>

                                        <div className="mt-3">
                                            Thank for your connecting with us. Here's what we got from
                                            you !
                                        </div>
                                        <ul className="list-group">
                                            <li className="list-group-item">Email: {values.email}</li>
                                        </ul>
                                    </div>
                                )
                            }
                        </Formik>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;

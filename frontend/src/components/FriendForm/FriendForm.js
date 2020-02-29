import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import "./FriendForm.scss";

export default function FriendForm() {

    const breed = ["No", "Bulldog", "Pudel"];

    return (
        <Formik
            initialValues={{
                name: "",
                description: "",
                birthDate: "",
            }}

            validationSchema={Yup.object().shape({
                firstName: Yup.string()
                    .required('Name is required'),
            })}

            formSubmit={fields => {
                console.log(fields)
                // addPet(fields)
            }}
        >
            { formik => (
                <form className={"friend-form"}>
                    <div className="form-group">
                        <label htmlFor="name">
                            Name
                        </label>
                        <Field name="name"
                               type="text"
                               className={'form-control'}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthDate">
                            Name
                        </label>
                        <Field name="birthDate"
                               type="text"
                               value={"3/11/2012"}
                               className={'form-control'}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">
                            description
                        </label>
                        <Field name="description"
                               type="text"
                               className={'form-control'}/>
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="breed">*/}
                    {/*        Breed*/}
                    {/*    </label>*/}
                    {/*    <Field name="breed" as="select" className="form-control">*/}
                    {/*        {breed.map((breed, idx) => {*/}
                    {/*            return <option key={idx} value={idx} default>{breed}</option>*/}
                    {/*        })}*/}
                    {/*    </Field>*/}
                    {/*</div>*/}
                    <div className="form-group">
                        <button type="submit" onSubmit={
                            e => {
                                e.preventDefault();
                                formik.handleSubmit();
                            }
                        } className="btn btn-primary">Add</button>
                    </div>
                </form>
            ) }
        </Formik>
    );
};

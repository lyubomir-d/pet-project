import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import "./SignInForm.scss";

export default function SignInForm() {

    return (
        <Formik
            initialValues={{
                login: "",
                password: "",
            }}

            validationSchema={Yup.object().shape({
                login: Yup.string()
                    .required('Login is required'),
                password: Yup.string()
                    .required('Password is required'),
            })}

            onSubmit={fields => {
                const { userId, dispatch } = this.props;
                dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}});
                // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}
        >
            { formik => (
                <form className={"friend-form"}>
                    <div className="form-group">
                        <label htmlFor="login">
                            Логин
                        </label>
                        <Field name="login"
                               type="text"
                               className={'form-control'}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            Пароль
                        </label>
                        <Field name="password"
                               type="text"
                               className={'form-control'}
                        />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary">Вход</button>
                    </div>
                </form>
            ) }
        </Formik>
    );
};

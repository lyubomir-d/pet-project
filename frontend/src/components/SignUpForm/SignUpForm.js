import React from 'react';
import { useFormik, Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import "./SignUpForm.scss";

export default function SignUpForm () {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Имя обязательно для заполнения'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email обязателен для заполнения'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Поле обязательно для заполнения'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Поле обязательно для заполнения')
    });

    const onSubmit = values => {
        console.log('SUCCESS!! :)\n\n' + JSON.stringify(values, null, 4))
    };

    return (
    <Formik
        initialValues = { initialValues }
        validationSchema = { validationSchema }
        onSubmit = { onSubmit }
    >
        <Form>
            <div className="form-group">
                <label htmlFor="name">Имя</label>
                <Field name="name"
                       type="text"
                       className={
                           'form-control'
                       }/>
                <ErrorMessage name="name" component="div" className="invalid-feedback"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email"
                       type="text"
                       className={
                           'form-control'
                       }/>
                <ErrorMessage name="email" component="div" className="invalid-feedback"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <Field name="password"
                       type="password"
                       className={
                           'form-control'
                       }/>
                <ErrorMessage name="password" component="div" className="invalid-feedback"/>
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">Повторите пароль</label>
                <Field name="confirmPassword"
                       type="password"
                       className={
                           'form-control'
                       }/>
                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback"/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">Зарегистрировать!</button>
                <button type="reset" className="btn btn-secondary">Сброс</button>
            </div>
        </Form>
    </Formik>
    );
};

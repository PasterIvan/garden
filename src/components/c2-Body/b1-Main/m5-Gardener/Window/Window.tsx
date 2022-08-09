import {useFormik} from "formik";
import React from "react";
import {useDispatch} from "react-redux";
import style from "./Window.module.css"
import {postFormTC} from "../../../../../bll/formReduser";
import {useAppDispatch} from "../../../../../hooks/hooks";

type FormikErrorType = {
    name?: string
    phone?: string
    email?: string
}

export const Window = () => {

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.name) {
                errors.name = 'Укажите Ваше имя'
            } else if (values.name.length < 1) {
                errors.name = 'Некорректное имя'
            }

            if (!values.phone) {
                errors.phone = 'Укажите номер вашего телефона'
            } else if (values.phone.length < 12) {
                errors.phone = 'Некорректный номер телефона'
            }

            if (!values.email) {
                errors.email = 'Укажите e-mail для обратной связи'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Некорректный E-mail адрес'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(postFormTC(values))
            formik.resetForm()
        },
    })

    return (
        <div className={style.border}>
            <div className={style.body}>
                <div>1200р</div>
                <form className={style.form} onSubmit={formik.handleSubmit}>
                    <input placeholder={'Ваше имя'}
                           {...formik.getFieldProps('name')}
                           />
                    <input placeholder={'Номер вашего телефона'}
                           {...formik.getFieldProps('phone')}/>
                    <input placeholder={'E-mail для обратной связи'}
                           {...formik.getFieldProps('email')}/>
                    {formik.touched.name &&
                        formik.errors.name &&
                        <div style={{color: 'red', fontSize: '14px', fontWeight: '400', height: '16px', textAlign: 'center'}}>
                            {formik.errors.name}
                        </div>}
                    {formik.touched.phone &&
                        formik.errors.phone &&
                        <div style={{color: 'red', fontSize: '14px', fontWeight: '300', height: '16px', textAlign: 'center'}}>
                            {formik.errors.phone}
                        </div>}
                    {formik.touched.email &&
                        formik.errors.email &&
                        <div style={{color: 'red', fontSize: '14px', fontWeight: '400', height: '16px', textAlign: 'center'}}>
                            {formik.errors.email}
                        </div>}
                    <button type={'submit'}>Оплатить</button>
                </form>
                <div className={style.text1}>
                    Нажимая кнопку «Отправить» вы соглашаетесь с <a href='/main'>Политикой конфиденциальности</a>
                </div>
            </div>
            <div className={style.additional}>
                <div style={{width: "100%"}}>Саженцы/семена растений покупаются за счет средств</div>
                <div className={style.text2}>Президентский фонд культурных инициатив , вы оплачиваете латунную табличку,
                    на которой будет написана информация о растении и Вас, как владельца посадки, а так же годовой уход
                    за вашим растением, что составляет 1200 рублей.
                </div>
            </div>
        </div>
    );
}
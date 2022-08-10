import axios, {AxiosResponse} from "axios";
import {FormStateType} from "../bll/formReduser";

const instance = axios.create({
    baseURL: 'https://',
})

export const formAPI = {

    postForm(form: object) {
        return instance.post<{ form: FormStateType }, AxiosResponse<ResponseType<{ form: FormStateType }>>>('auth/login', form);
    }
}

export type FormParamsType = {
    name: string
    phone: string
    email: string
    captcha?: string
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
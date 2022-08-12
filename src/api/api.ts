import axios from "axios";
import {FormStateType} from "../bll/formReduser";

const instance = axios.create({
    baseURL: 'https://',
})

export const formAPI = {
    postForm(form: FormStateType) {
        return instance.post<{ form: FormStateType }>('server', form);
    }
}

export type FormParamsType = {
    name: string
    phone: string
    email: string
}
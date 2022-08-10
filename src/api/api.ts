import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://',
})

export const formAPI = {

    postForm(form: object) {
        return instance.post<{ form: object }, AxiosResponse<ResponseType<{ form: object }>>>('auth/login', form);
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
import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://',
})

export const formAPI = {
    postForm(data: FormParamsType) {
        return instance.post<FormParamsType, AxiosResponse<ResponseType<{ userId: number }>>>('auth/login', data);
    }
}

export type FormParamsType = {
    name: string
    phone: string
    email: string
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
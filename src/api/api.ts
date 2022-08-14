import axios from "axios";
import {FormStateType} from "../bll/formReduser";
import {aboutUsType} from "../bll/admin/aboutUsReducer";

const instance = axios.create({
    baseURL: 'http://',
})

export const formAPI = {
    postForm(form: FormStateType) {
        return instance.post<{ form: FormStateType }>('server', form);
    }
}
export const aboutUsAPI = {
    get() {
        return instance.get<aboutUsType>('/about_us/');
    }
}
export const galleryAPI = {
    getGallery() {
        return instance.get<string>('/gallery/');
    }
}
export const festivalAPI = {
    getFestival() {
        return instance.get<string>('/festival/');
    }
}
export const participantsAPI = {
    getParticipants() {
        return instance.get<string>('/participants/');
    }
}

export type FormParamsType = {
    name: string
    phone: string
    email: string
}
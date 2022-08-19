import axios from "axios";

const instance = axios.create({
  baseURL: "http://2.56.213.189:8083/api/",
});

export const formAPI: any = {
  postForm(form: FormStateType) {
    return instance.post("orders/submit", form);
  },
};

export type FormContactsType = {
  name: string;
  phone: string;
  email: string;
};

export type FormStateType = {
  redZone: string[];
  orangeZone: string[];
  greenZone: string[];
  blueZone: string[];
  violetZone: string[];
  contacts: FormContactsType;
};

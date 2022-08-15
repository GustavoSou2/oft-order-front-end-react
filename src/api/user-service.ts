import axios from "../config/axios/axios";

type IUser = {
    name?: string;
    mail: string;
    cnpj: string | number;
    company_name?: string;
    description_work?: string;
    password?: string;
}

export default class UserService {
    readonly base_URL: string = "user";

    constructor() {}

    login(user: IUser): Promise<IUser | any> {
        return axios.post<IUser>(this.base_URL, user)
    }
}

export function createAccount(user: IUser): Promise<IUser | any> {
    return axios.post<IUser>('user', user)
}
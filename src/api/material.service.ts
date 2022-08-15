import axios from "../config/axios/axios";

export function listOfAllMaterials() {
    return axios.get<any[] | any>(`material/${localStorage.getItem('id_user')}`)
}
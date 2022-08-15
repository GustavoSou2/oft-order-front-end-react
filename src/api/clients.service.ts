import axios from "../config/axios/axios";

export const listOfAllClients = async () => {
    return await axios.get<any>(`client/${localStorage.getItem('id_user')}`)
}
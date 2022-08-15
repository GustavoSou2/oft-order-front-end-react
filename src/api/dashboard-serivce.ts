import axios from "../config/axios/axios";

export const listOfAllWorks = async () => {
    return await axios.get<any[] | any>(`works/${localStorage.getItem('id_user')}`)
}

export const listOfCountingByStatus = async () => {
    return await axios.get<any>(`works/counting_status/${localStorage.getItem('id_user')}`)
}
import { useEffect, useState } from "react";
import { listOfAllClients } from "../../../../api/clients.service";
import { MenuComponent } from "../../components/menu/menu.component";
import { validateSection } from "../../components/validate-session";

import { FiTrash, FiEdit2 } from "react-icons/fi"

import "./client.style.css";

export default function ClientsComponent() {
    const [ clients, setClients ] = useState([]);

    useEffect(() => {
        validateSection();
        (async () => {
            await listOfAllClients().then(response => setClients(response.data.data))
        })()
    }, [])


    return (
        <MenuComponent>
            <div className="card card-client">
                <div className="card-header">Clientes</div>
                <div className="card-body">
                    <span className="counter">Quantidade de clientes cadastrados 0</span>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr >
                                <th className="text-center" width="10%" scope="col">Ações</th>
                                <th className="text-center" scope="col">ID</th>
                                <th className="text-center" width="40%" scope="col">Nome</th>
                                <th className="text-center" scope="col">Número</th>
                                <th className="text-center" scope="col">Data Cadastro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clients.length != 0 
                                ? (clients.map((client, index) => (
                                    <tr key={index}>
                                        <td className="text-center">
                                           <div className="d-flex justify-content-center">
                                                <button className="btn btn-outline-danger btn-sm">
                                                    <FiTrash />
                                                </button>
                                                &nbsp;
                                                &nbsp;
                                                &nbsp;
                                                <button className=" btn btn-outline-secondary btn-sm">
                                                    <FiEdit2 />
                                                </button>
                                           </div>
                                        </td>
                                        <td className="text-center">{client.id}</td>
                                        <td className="text-center">{client.name}</td>
                                        <td className="text-center">{client.phone}</td>
                                        <td className="text-center">{client.created_at}</td>
                                    </tr>
                                )))
                                : (
                                    <tr>
                                        <td colSpan={5} key={1}>
                                            <div className="alert alert-info">
                                                Nenhum Cliente Cadastrada
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </MenuComponent>
    )
}
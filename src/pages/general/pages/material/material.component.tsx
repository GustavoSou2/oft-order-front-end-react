import { useEffect, useState } from "react";
import { listOfAllMaterials } from "../../../../api/material.service";
import { MenuComponent } from "../../components/menu/menu.component";
import { validateSection } from "../../components/validate-session";

import { FiTrash, FiEdit2 } from "react-icons/fi"

import "./material.style.css";

export default function MaterialComponent() {
    const [ mateiral, setMaterial ] = useState([]);

    useEffect(() => {
        validateSection();
        (async () => {
            await listOfAllMaterials().then(response => setMaterial(response.data.data))
        })()
    }, [])


    return (
        <MenuComponent>
            <div className="card card-client">
                <div className="card-header">Material</div>
                <div className="card-body">
                    <span className="counter">Quantidade de clientes cadastrados 0</span>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr >
                                <th className="text-center" width="10%" scope="col">Ações</th>
                                <th className="text-center" scope="col">Código do Produto</th>
                                <th className="text-center" width="40%" scope="col">Descrição</th>
                                <th className="text-center" scope="col">Data de Cadastro</th>
                                <th className="text-center" scope="col">Valor unitário</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mateiral.length != 0 
                                    ? (
                                        mateiral.map((client, index) => (
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
                                                <td className="text-center">{client.code}</td>
                                                <td className="text-center">{client.description}</td>
                                                <td className="text-center">{client.created_at}</td>
                                                <td className="text-center">R$ {client.value}</td>
                                            </tr>
                                        ))
                                    )
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
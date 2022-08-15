import React, { useEffect, useState } from 'react';
import "./dashboard.style.css";
import { MenuComponent } from '../../components/menu/menu.component';
import axios from '../../../../config/axios/axios';
import { listOfCountingByStatus, listOfAllWorks } from '../../../../api/dashboard-serivce';
import { validateSection } from '../../components/validate-session';
import { FiEdit2, FiTrash } from 'react-icons/fi';

export function Dashboard() {
    const [works, setWorks] = useState([]);
    const [allStatus, setAllStatus] = useState([]);

    function navigate(url: string) {
        window.location.href = url;
    }

    useEffect(() => {
        (async () => {
            await validateSection();
            await listOfCountingByStatus().then(response => setAllStatus(response.data.data[0]))
            await listOfAllWorks().then(response => setWorks(response.data.data))

        })()
    }, [])



    return (       
        <MenuComponent>                    
            <div className="card dashboard-content">
                <div className="card-header"><h5>Dashboard</h5></div>
                <div className="card-body column">
                    <div className="cards-status">
                       <div className="card-status pending">
                        <p>{ allStatus['pending_count'] }</p>
                        <span>{ allStatus['pending_description'] }</span>
                       </div>
                       <div className="card-status ongoing">
                        <p>{ allStatus['ongoing_count'] }</p>
                        <span>{ allStatus['ongoing_description'] }</span>
                       </div>
                       <div className="card-status aproval">
                        <p>{ allStatus['aproval_count'] }</p>
                        <span>{ allStatus['aproval_description'] }</span>
                       </div>
                       <div className="card-status finished">
                        <p>{ allStatus['finished_count'] }</p>
                        <span>{ allStatus['finished_description'] }</span>
                       </div>
                    </div>
                    &nbsp;
                    <hr />
                    &nbsp;
                    <div className="">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th className="text-center" width="10%" scope="col">Ações</th>
                                <th className="text-center" scope="col">ID</th>
                                <th className="text-center" scope="col">Titulo</th>
                                <th className="text-center" scope="col">Descrição</th>
                                <th className="text-center" scope="col">Tipo do Trabalho</th>
                                <th className="text-center" scope="col">Data Cadastro</th>
                                <th className="text-center" scope="col">status</th>
                                <th className="text-center" scope="col">Total em materiais</th>
                                <th className="text-center" scope="col">Valor total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                works.length != 0 ? 
                                (works.map((works, index) => (
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
                                        <td className="text-center">{works.id}</td>
                                        <td className="text-center">{works.description}</td>
                                        <td className="text-center">{works.message}</td>
                                        <td className="text-center">{works.wors_type_description ?? '-'}</td>
                                        <td className="text-center">{works.created_at}</td>
                                        <td className="text-center">{works.status_description}</td>
                                        <td className="text-center">R$ {works.material_total_value}</td>
                                        <td className="text-center">R$ {works.work_total_value}</td>
                                    </tr>
                                )))
                                : (
                                    <tr>
                                        <td colSpan={9} key={1}>
                                            <div className="alert alert-info">
                                                Nenhuma Ordem Cadastrada
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
                {  }
            </div>
        </MenuComponent>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    )
}


import React, { useEffect, useState } from 'react';
import "./menu.style.css";
import { GrHomeRounded, GrLogout } from "react-icons/gr"
import { MdPeopleOutline } from "react-icons/md"
import { AiOutlineTool, AiOutlineLogout, AiOutlineHome } from "react-icons/ai"
import { validateSection } from '../validate-session';

export function MenuComponent(props: any) {
    function nav(url: string) {
        window.location.href = url
    }

    function clearStorage() {
        localStorage.clear();
        validateSection()
    }

    return (       
        <section className="dashboard">
            <header className="main-menu">
                <nav className="main-nav">
                    <ul className="menu">
                        <li className="menu-item" onClick={(event) => { nav('/dashboard') }}>
                            <AiOutlineHome />
                            Home  
                        </li>
                        <li className="menu-item" onClick={(event) => { nav('/clients') }}>
                            <MdPeopleOutline /> 
                            Clientes
                        </li>
                        <li className="menu-item" onClick={(event) => { nav('/material') }}>
                            <AiOutlineTool />
                            Materiais
                        </li>
                        <li className="menu-item" onClick={clearStorage}>
                            <AiOutlineLogout />
                            Sair
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="dashboard-render">
                { props.children }
            </main>
        </section>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    )
}

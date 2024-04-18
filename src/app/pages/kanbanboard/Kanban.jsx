import React from 'react'
import Header from '../../shared/components/header/Index'
import Sidebar from '../../shared/components/sidebar/Index'
import './Styles.css'

const UserFilter = ({ userType }) => {
    return (
        <div className="user-filter">
            Usuário: <span className="user-type">{userType}</span>
        </div>
    )
}

const KanbanBoard = () => {
    return (
        <div>
            <Header />
            <div className="kanban-container">
                <div className="SubHeaderWrapper">Controle de Demandas</div>
                <UserFilter userType="Administrador" />
                <Sidebar />
                <div className="kanban-board">
                    <div className="column">
                        <h2>Solicitados</h2>
                        <div className="sub-column"></div> 
                    </div>
                    <div className="column">
                        <h2>Backlog</h2>
                        <div className="sub-column"></div> 
                    </div>
                    <div className="column">
                        <h2>Desenvolvimento</h2>
                        <div className="sub-column"></div> 
                    </div>
                    <div className="column">
                        <h2>Testes</h2>
                        <div className="sub-column"></div>
                    </div>
                    <div className="column">
                        <h2>Produção</h2>
                        <div className="sub-column"></div> 
                    </div>
                    <div className="column">
                        <h2>Arquivado</h2>
                        <div className="sub-column"></div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KanbanBoard

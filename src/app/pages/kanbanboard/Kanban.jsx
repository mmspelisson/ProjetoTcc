import React from 'react';
import Header from '../../shared/components/header/Index';
import Sidebar from '../../shared/components/sidebar/Index';
import TrelloCard from '../../shared/components/card/Card'; // Importe o componente de card
import './Styles.css';

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
                        <div className="sub-column">
                            <TrelloCard title="Card 1" description="Descrição do Card 1" />
                            <TrelloCard title="Card 2" description="Descrição do Card 2" />
                        </div>
                    </div>
                    <div className="column">
                        <h2>Backlog</h2>
                        <div className="sub-column">
                            <TrelloCard title="Card 1" description="Descrição do Card 1" />
                            <TrelloCard title="Card 2" description="Descrição do Card 2" />
                            <TrelloCard title="Card 3" description="Descrição do Card 3" />
                        </div>
                    </div>
                    <div className="column">
                        <h2>Desenvolvimento</h2>
                        <div className="sub-column">
                            <TrelloCard title="Card 1" description="Descrição do Card 1" />
                        </div>
                    </div>
                    <div className="column">
                        <h2>Testes</h2>
                        <div className="sub-column">
                            <TrelloCard title="Card 1" description="Descrição do Card 1" />
                            <TrelloCard title="Card 2" description="Descrição do Card 2" />
                            <TrelloCard title="Card 3" description="Descrição do Card 3" />
                            <TrelloCard title="Card 4" description="Descrição do Card 4" />
                        </div>
                    </div>
                    <div className="column">
                        <h2>Produção</h2>
                        <div className="sub-column">
                            <TrelloCard title="Card 1" description="Descrição do Card 1" />
                            <TrelloCard title="Card 2" description="Descrição do Card 2" />
                            <TrelloCard title="Card 3" description="Descrição do Card 3" />
                            <TrelloCard title="Card 4" description="Descrição do Card 4" />
                            <TrelloCard title="Card 5" description="Descrição do Card 5" />
                            <TrelloCard title="Card 6" description="Descrição do Card 6" />
                            <TrelloCard title="Card 7" description="Descrição do Card 7" />
                            <TrelloCard title="Card 8" description="Descrição do Card 8" />
                            <TrelloCard title="Card 9" description="Descrição do Card 9" />
                            <TrelloCard title="Card 10" description="Descrição do Card 10" />
                        </div>
                    </div>
                    <div className="column">
                        <h2>Arquivado</h2>
                        <div className="sub-column">
                            <TrelloCard title="Card 1" description="Descrição do Card 1" />
                            <TrelloCard title="Card 2" description="Descrição do Card 2" />
                            <TrelloCard title="Card 3" description="Descrição do Card 3" />
                            <TrelloCard title="Card 4" description="Descrição do Card 4" />
                            <TrelloCard title="Card 5" description="Descrição do Card 5" />
                            <TrelloCard title="Card 6" description="Descrição do Card 6" />
                            <TrelloCard title="Card 7" description="Descrição do Card 7" />
                            <TrelloCard title="Card 8" description="Descrição do Card 8" />
                            <TrelloCard title="Card 9" description="Descrição do Card 9" />
                            <TrelloCard title="Card 10" description="Descrição do Card 10" />
                            <TrelloCard title="Card 11" description="Descrição do Card 11" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KanbanBoard;

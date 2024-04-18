import React from 'react'
import Header from '../header/Index'
import Sidebar from '../sidebar/Index'
import './KanbanBoard.css'

function KanbanBoard() {
    return (
        <div>
            <Header />
            <div className="kanban-container">
                <Sidebar />
                <div className="kanban-board">
                    <div className="column">
                        <h2>Solicitados</h2>

                    </div>
                    <div className="column">
                        <h2>Backlog</h2>

                    </div>
                    <div className="column">
                        <h2>Desenvolvimento</h2>

                    </div>
                    <div className="column">
                        <h2>Testes</h2>
                    </div>
                    <div className="column">
                        <h2>Produção</h2>

                    </div>
                    <div className="column">
                        <h2>Arquivado</h2>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default KanbanBoard

import React from 'react'
import Header from '../header/Index';
import Sidebar from '../sidebar/Index';
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
                        {/* Adicione cartões de tarefas solicitadas aqui */}
                    </div>
                    <div className="column">
                        <h2>Backlog</h2>
                        {/* Adicione cartões de tarefas backlog aqui */}
                    </div>
                    <div className="column">
                        <h2>Desenvolvimento</h2>
                        {/* Adicione cartões de tarefas em desenvolvimento aqui */}
                    </div>
                    <div className="column">
                        <h2>Testes</h2>
                        {/* Adicione cartões de tarefas de testes aqui */}
                    </div>
                    <div className="column">
                        <h2>Produção</h2>
                        {/* Adicione cartões de tarefas em produção aqui */}
                    </div>
                    <div className="column">
                        <h2>Arquivado</h2>
                        {/* Adicione cartões de tarefas arquivadas aqui */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KanbanBoard

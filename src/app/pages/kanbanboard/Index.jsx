import KanbanBoard from '../../shared/components/kanbanBoard/KanbanBoard.jsx'
import Sidebar from '../../shared/components/sidebar/Index.jsx'
import Header from '../../shared/components/header/Index.jsx'

function KanbanBoard() {
    return (
        <div>
            <Header />
            <Sidebar />
            <KanbanBoard />
        </div>
    )
}

export default KanbanBoard

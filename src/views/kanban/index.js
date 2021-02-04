import React from 'react';
import './kanban.scss';
import { SearchIcon, NotificationIcon, ArrowLeftIcon, DashboardIcon, ChatIcon, PieIcon, CalendarIcon, AddFileIcon, BarIcon, CopyPasteIcon, MoreIcon } from '../../assets/icons';
import Board from './components/board/table';

const users = [
  'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80'
]


const KanbanBoard = () => {
  return (
    <div className="container">
      <aside>
        
        <button>
          <img src="https://i.imgur.com/VA34FT9.png" alt="Logo" />
        </button>

        <ul>
          <li>
            <DashboardIcon />
          </li>
           <li>
            <BarIcon />
          </li>
           <li>
            <AddFileIcon />
          </li>
           <li>
            <CalendarIcon />
          </li>
           <li>
            <CopyPasteIcon />
          </li>
          <li>
            <ChatIcon />
          </li>
           <li>
            <PieIcon />
          </li>
        </ul>
      </aside>

      <section className="mainView">
        <header className="nav">
          <div className="left">
            <div className="logo">Team</div>

            <div className="searchInput">
              <SearchIcon />
              <input placeholder="Search for Application here" />
            </div>
          </div>

          <div className="right">
            <button className="notifications">
              <NotificationIcon />
            </button>

            <button className="user">
              <div className="avatar">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80" alt="avatar" width="100%" height="100%" />
              </div>
              <div className="userInfo">
                <h5>Valeria</h5>
                <span>Admin</span>
              </div>

              <ArrowLeftIcon />
            </button>
          </div>
        </header>

        <main>
          <header>
            <div className="left">
              <div className="breadcrumb">
                <a href="">Project</a> <ArrowLeftIcon /> <a href="">Task</a> <ArrowLeftIcon /> <a href=""><strong>Pixian Design Studio</strong></a>
              </div>
            </div>

            <div className="right">
              <div className="users">
                {users.map((img, idx) => (
                  <div key={idx} className="avatar" title="User">
                    <img src={img} alt="user avatar" width="100%" height="100%" />
                  </div>
                ))}

                <button>+</button>
              </div>

              <button className="addTask">Add task</button>

              <select className="sort">
                <option>Sort by</option>
              </select>

              <button className="menu"><MoreIcon /></button>
            </div>
          </header>

          <div className="kanban">
            <Board />
          </div>
        </main>
      </section>
    </div>
  )
}

export default KanbanBoard;
import React, { useState } from 'react';
import fakeData from './fakeData.json';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from '../../kanban.scss';
import { MoreIcon, ClockIcon, MessageIcon, ChatIcon, AttachedIcon } from '../../../../assets/icons/index.js';

const users = [
  'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80'
]

const titles = ["to do", "in progress", "approval", "completed"]

// fake data generator
const getItems = (count, offset = 0) => {
  console.log(count, offset)
  return Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${fakeData[offset][k].id}-${count}-${new Date().getTime()}`,
    title: titles[k],
    content: fakeData[offset][k]
  }))
}
  

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  margin: `.9em 0 ${grid}px`,
  borderRadius: '.9em',
  position: "relative",
  overflow: "hidden",

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "#fff",

  // styles we need to apply on draggables
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "#f2f5fe",
  width: '300px',
  marginRight: 15,
  borderRadius: '.9em'
});

function Board() {
  const [state, setState] = useState([getItems(4), getItems(2, 1), getItems(4, 2), getItems(1, 3)]);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      let newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      let newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter(group => group.length));
    }
  }

  return (
    <div className="table">
      {console.log(state)}
      {/*<button
        type="button"
        onClick={() => {
          setState([...state, []]);
        }}
      >
        Add new group
      </button>
      <button
        type="button"
        onClick={() => {
          setState([...state, getItems(1)]);
        }}
      >
        Add new item
      </button>*/}
     
     <div style={{ display: "inline-flex" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                  className="column"
                >
                 
                  <div style={{ padding: "0 16px 16px", maxHeight: "73vh" }}>
                    <div style={{ background: snapshot.isDraggingOver ? "lightblue" : "#f2f5fe" }} className="columnHeadline">
                      <h2 className="columnTitle">{titles[ind]}</h2>
                      <button className="columnActions"><MoreIcon /></button>
                    </div>

                  <div className="cards">
                    {el.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            padding: !item.content.approved ? "16px 16px 3.5em" : grid * 2,
                            ...getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )
                          }}
                        >
                          <div className="cardContent">
                            <div className="headline">
                              <div className="date" title="Date of creation"><ClockIcon /> {item.content.date}</div>
                              <button className="action"><MoreIcon /></button>
                            </div>

                            <h3 className="cardName">{item.content.title}</h3>

                            {item.content.img ? <img src={item.content.img} className="cardImg" alt="card img" /> : null}

                            <div className="progress">
                              <div className="title">
                                <h5>Process</h5>
                                <h5>{item.content.progress}%</h5>
                              </div>
                              
                              <div className="progressBg">
                                <div className="progressBar" style={{ width: `${item.content.progress}%` }} />
                              </div>
                            </div>

                            <div className="divider" />

                            <div className="moreInfo">
                              <div className="content">
                                <div className="comments" title="Comments">
                                  <ChatIcon />
                                  {item.content.comments}
                                </div>

                                <div className="files" title="Files">
                                  <AttachedIcon />
                                  {item.content.files}
                                </div>
                              </div>

                              <div className={styles[item.content.level]} title="Level">
                                {item.content.level}
                              </div>

                              <div className="users">
                                {item.content.users.map((num, idx) => (
                                  <div key={idx} className="avatar">
                                    <img src={users[num]} alt="avatar" width="100%" height="100%" />
                                  </div>
                                ))}
                                <button>+</button>
                              </div>
                            </div>

                          </div>

                             {!item.content.approved ?
                              <div className="cardAlert">
                                Sent for approval to @<strong>Pranav</strong>
                              </div>
                              : null
                            }
                        </div>
                      )}
                    </Draggable>
                  ))}
                  </div>
                 
                 
                  </div>
                   <button className="addCard">+ Add another card</button>
                   {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>

      <button className="addGroup">+ Add group</button>
    </div>
  );
}

export default Board;

import React from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations.js";
import { Link } from "react-router-dom";

export const TaskList = ({ tasks, name, id, createTask }) => (
  <>
    <h3>{name}</h3>
    <div>
      {tasks.map((task) => (
        <Link to={`/task/${task.id}`}>
          <div key={task.id}>{task.name}</div>
        </Link>
      ))}
    </div>
    <button onClick={() => createTask(id)}>Add New</button>
  </>
);

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;
  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.tasks.filter((task) => task.group === groupID),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createTask(id) {
      console.log("Creating new task...", id);
      dispatch(requestTaskCreation(id));
    },
  };
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

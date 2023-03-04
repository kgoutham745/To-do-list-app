function TasksList(props) {
  const tasksList = props.tasksList;
  const listItems = tasksList.map((item) => (
    <tr>
      <td>{item.index}</td>
      <td>{item.task}</td>
      <td>{item.status}</td>
      <td>
        <button type="button" className="btn btn-success m-2">
          Finished
        </button>
        <button type="button" className="btn btn-danger m-2">
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    listItems
  );
}
export default TasksList;

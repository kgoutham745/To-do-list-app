import ListItem from "./ListItem";

function TasksList(props) {
  const tasksList = props.tasksList;
  const listItems = tasksList.map((item) => (
    <ListItem item={item} key={item.index} taskFinish={props.taskFinish} taskDelete={props.taskDelete}></ListItem>
  ));
  return (
    listItems
  );
}
export default TasksList;

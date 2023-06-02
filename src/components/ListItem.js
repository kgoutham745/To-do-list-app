function ListItem(props) {
    return (
        <tr>
            <td>{props.item.index}</td>
            <td>{props.item.task}</td>
            <td><span className={props.item.status==="pending"?"badge text-bg-primary":"badge text-bg-warning"}>
                    {props.item.status}
            </span></td>
            <td>
                <button type="button" className="btn btn-success m-2" onClick={() => props.taskFinish(props.item.index)}>
                    Finished
                </button>
                <button type="button" className="btn btn-danger m-2" onClick={() => props.taskDelete(props.item.index)}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default ListItem;
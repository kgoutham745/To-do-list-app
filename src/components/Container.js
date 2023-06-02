function Container(props) {

  return (
    <div  className="card m-5">
      <div  className="card-header align-center">To Do List App</div>
      <div  className="card-body d-flex align-items-center justify-content-center">
        <div  className="row g-3">
          <div  className="col-auto">
            <input
              type="text"
               className="form-control"
              id="textInput"
              placeholder="Enter task here"
            ></input>
          </div>
          <div  className="col-auto">
            <button type="button" onClick={props.handleclick} className="btn btn-warning mb-3 mx-3">
                Add
            </button>
            <button type="button"  className="btn btn-info mb-3 mx-3">
                Search 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;

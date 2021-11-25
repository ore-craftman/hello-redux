import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update, remove } from "./features/user";

function App() {
  const dispatch = useDispatch();

  const users = useSelector((state) =>
    state.users.value.filter((user) => user.name !== "")
  );

  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target[0].value === "") {
      alert("Enter a name");
    } else {
      let lastId = users[users.length - 1] ? users[users.length - 1].id : 0;
      dispatch(update({ name: e.target[0].value, id: lastId + 1 }));
      e.target[0].value = null;
    }
  };

  const deleteHandler = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="App">
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <div>
              <div key={user.id} style={{ display: "flex", marginTop: "15px" }}>
                <li>{user.name}</li>
                <button
                  style={{ marginLeft: "5px" }}
                  onClick={() => deleteHandler(user.id)}
                >
                  Delete User
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No user yet, add new below</p>
        )}
      </ul>

      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Damilare" />
        <button style={{ marginLeft: "5px" }} type="submit">
          ADD USER
        </button>
      </form>
    </div>
  );
}

export default App;

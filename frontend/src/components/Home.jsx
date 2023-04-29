import React, { useEffect, useState } from "react";
import {
  addNewBook,
  deleteBook,
  getMyBooks,
} from "../redux/Actions/bookAction";
import TodoItem from "./TodoItem";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Loader from "./Loader";
const Home = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const { message, books, loading } = useSelector((state) => state.myBooks);
  const { isAuthenticated } = useSelector((state) => state.user);

  const deleteHandler = (id) => {
    dispatch(deleteBook(id));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewBook(title, author));
    setTitle("");
    setAuthor("");
  };

  useEffect(() => {
    dispatch(getMyBooks());
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, message]);

  if (!isAuthenticated) return <Navigate to={"/login"} />;
  return loading ? (
    <Loader />
  ) : (
    <div className="container">
      <div className="login">
        <section>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Author"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <div>
              <button disabled={loading} type="submit">
                Add Task
              </button>
            </div>
          </form>
        </section>
      </div>
      <section className="searchBar">
        <input
          type="text"
          placeholder="Search By Book Name"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </section>

      <section className="todosContainer">
        {books
          .filter((item) => {
            return searchInput.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(searchInput);
          })
          .map((i) => (
            <TodoItem
              title={i.title}
              author={i.author}
              deleteHandler={deleteHandler}
              id={i._id}
              key={i._id}
              createdAt={i.createdAt}
            />
          ))}
      </section>
    </div>
  );
};

export default Home;

import axios from "axios";
import { server } from "../../index";

export const getMyBooks = () => async (dispatch) => {
  try {
    dispatch({
      type: "myBooksRequest",
    });

    const { data } = await axios.get(`${server}/book/my`, {
      withCredentials: true,
    });
    dispatch({
      type: "myBooksSuccess",
      payload: data.book,
    });
  } catch (error) {
    dispatch({
      type: "myBooksFailure",
      payload: error.response.data.message,
    });
  }
};

export const addNewBook = (title, author) => async (dispatch) => {
  try {
    dispatch({
      type: "newBookRequest",
    });
    const { data } = await axios.post(
      `${server}/book/new`,
      {
        title,
        author,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: "newBookSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "newBookFailure",
      payload: error.response.data.message,
    });
  }
};
export const deleteBook = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteBookRequest",
    });
    const { data } = await axios.delete(`${server}/book/${id}`, {
      withCredentials: true,
    });
    dispatch({
      type: "deleteBookSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "newBookFailure",
      payload: error.response.data.message,
    });
  }
};

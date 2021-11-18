import axios from "axios";
import {
  getContactRequest,
  getContactSuccsess,
  getContactError,
  addContactRequest,
  addContactSuccsess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccsess,
  deleteContactError,
} from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:3004/";

export const getContacts = () => (dispatch) => {
  dispatch(getContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(getContactSuccsess(data)))
    .catch((error) => dispatch(getContactError(error)));
};

export const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const items = {
      name: name,
      number: number,
    };

    dispatch(addContactRequest());

    axios
      .post("/contacts", items)
      .then(({ data }) => dispatch(addContactSuccsess(data)))
      .catch((error) => dispatch(addContactError(error)));
  };

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccsess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};

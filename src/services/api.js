import axios from 'axios';

// axios.defaults.baseURL = 'https://my-cool-projectapi.herokuapp.com/';

export const getAllMenuItems = async () => {
  const response = await axios.get(
    'https://json-server-258905.appspot.com/menu',
  );
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(
    'https://json-server-258905.appspot.com/categories',
  );
  return response.data;
};

export const getMenuItemById = async id => {
  const response = await axios.get(
    `https://json-server-258905.appspot.com/menu/${id}`,
  );
  return response.data;
};

export const getMenuItemsWithCategory = async category => {
  const response = await axios.get(
    `https://json-server-258905.appspot.com/menu?category=${category}`,
  );
  return response.data;
};

export const postMenuItem = async item => {
  const response = await axios.post(
    `https://json-server-258905.appspot.com/menu`,
    item,
  );
  return response;
};

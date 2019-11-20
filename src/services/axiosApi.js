import axios from 'axios';

// axios.defaults.baseURL = 'https://my-cool-projectapi.herokuapp.com/';
// http://localhost:3030

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

export const getMenuItemsWithCategory = async category => {
  const response = await axios.get(
    `https://json-server-258905.appspot.com/menu?category=${category}`,
  );
  return response.data;
};

export const getAllOrders = async () => {
  try {
    const response = await axios.get(
      'https://json-server-258905.appspot.com/order',
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getItemsById = async id => {
  const response = await axios.get(
    `https://json-server-258905.appspot.com/menu/${id}`,
  );
  return response.data;
};

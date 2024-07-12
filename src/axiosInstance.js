import axios from 'axios';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: "https://butterfly-backend.onrender.com/api", // Replace with your backend URL
  withCredentials: true, // Ensure credentials are included (cookies, etc.)
});
//axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// Add a request interceptor to add the token to the headers
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve token from sessionStorage
    const csrftoken = getCookie('csrftoken');
    const token=localStorage.getItem('token');

    if (csrftoken) {
      //config.headers['X-CSRFToken'] = csrftoken;  // Set CSRF token in request headers
    }
    
    if (token) {
      console.log(token)
      config.headers['authorization'] = `Bearer ${token}`;
   }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default axiosInstance;

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
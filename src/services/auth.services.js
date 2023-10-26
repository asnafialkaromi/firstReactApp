import axios from "axios";
import jwt_decode from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const getUsername = (token) => {
  const decoded = jwt_decode(token);
  return decoded.user;
};

// export const getUsername = () => {
//   // Get the token from local storage
//   const token = localStorage.getItem("token"); // Replace with the actual key

//   if (token) {
//     // Token exists, decode it
//     try {
//       const decoded = jwt_decode(token);
//       console.log(decoded);
//       return decoded.username; // Assuming there is a 'username' property in the decoded token
//     } catch (error) {
//       console.error("Error decoding token:", error);
//       return null;
//     }
//   } else {
//     console.error("Token not found in local storage");
//     return null;
//   }
// };

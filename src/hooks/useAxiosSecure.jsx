import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-kappa-wine.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout");
          logOut()
            .then(() => {
              alert("Sign-out successful.");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    );
  }, [logOut]);

  return axiosSecure;
};

export default useAxiosSecure;

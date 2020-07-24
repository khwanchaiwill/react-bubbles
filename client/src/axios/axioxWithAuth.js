import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        header: {
            Authorization : token
        }
    })
}
export default axiosWithAuth;
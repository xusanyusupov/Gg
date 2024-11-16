import axios from "axios";
const mainURL  = axios.create({
    baseURL:"https://6734698fa042ab85d11a0bf2.mockapi.io/products"
})
export default mainURL
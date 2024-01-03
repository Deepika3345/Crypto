import axios from "axios"

const API_URL = "/api/user/"

const register = async (formData) => {
    const response = await axios.post(API_URL + "register", formData)
    localStorage.setItem("user", JSON.stringify(response.data))
    return response.data

}
// loginuser 

const login = async (formData) => {
    const response = await axios.post(API_URL + "login", formData)
    localStorage.setItem("user", JSON.stringify(response.data))
    return response.data
}



const authService = {
    register, login
}
export default authService


// GETCOINS


export const fetchCoins = async () => {
    const response = await axios.get("https://api.coingecko.com/api/v3/search/trending")
    return response.data.coins
}

// Detail

// export const detail = async (coinId) => {
//     const response = await axios.get("https://api.coingecko.com/api/v3/search/trending", coinId)
//     return response.data.coins
// }

// Search

export const search = async () => {
    const response = await axios.get("https://api.coingecko.com/api/v3/search/trending")
    return response.data
}



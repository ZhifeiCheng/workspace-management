import axios from 'axios';

const server = require("../../config/server");

class UserService {
    async signUp(username, password, name, department) {
        await axios.post(server.api + "user/", { username, password, name, department })
            .then((res) => {
                console.log(res);
        });
    }

    async login(username, password) {
        await axios.post(server.api + "user/login", { username, password })
            .then(res =>{
                console.log(res);
            })
    }
}

export default UserService
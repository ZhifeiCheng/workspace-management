import axios from 'axios';

const server = require("../../config/server");

class RoomService {
    async updateRoom(id, status, density) {
        const data = {
            status: status,
            density: density
        }
        await axios.put(server.api + "room/" + id, data)
            .then((res) => {
                console.log(res);
        });
    }

    async fetchRoomList() {
        const res = await axios.get(server.api + "rooms/");
        return res.data;
    }
}

export default RoomService
import axios from 'axios';

const server: string = process.env.BACKEND || 'http://localhost:8080/';

export default {
    mathOperation: async (a: number, b: number, operation: string) => {
        const result = await axios.post(server + operation, {"a": a, "b": b});
        return result.data;
    }
}
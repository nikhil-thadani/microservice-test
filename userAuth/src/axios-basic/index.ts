import axios, {Method} from "axios";
const sendRequest = async (url: string, method: Method, data?: any, headers?: object) => {
    const res = await axios({url, method, headers, data: {...data}});
    return res.data;
};

export {sendRequest};
import axios, {AxiosResponse} from 'axios';
import axiosConfig from "../config/index";

const loginApi = async <T, R>({data}: { data: T }): Promise<AxiosResponse<R>> => {
    try {
        return await axios.post<T, AxiosResponse<R>>('/auth/login', data, axiosConfig);
    } catch (error) {
        // Handle error here or rethrow for the calling code to handle
        throw new Error('Failed to login');
    }
};

export default loginApi;



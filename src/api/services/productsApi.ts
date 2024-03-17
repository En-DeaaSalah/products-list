import axios, {AxiosResponse} from 'axios';
import axiosConfig from '../config/index';

const productsApi = async <R>(): Promise<AxiosResponse<R>> => {
    try {
        return await axios.get<AxiosResponse<R>>('/products', axiosConfig);
    } catch (error) {
        // Handle error here or rethrow for the calling code to handle
        throw new Error('Failed to fetch products');
    }
};

export default productsApi;
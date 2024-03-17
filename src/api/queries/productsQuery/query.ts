import productsApi from "../../services/productsApi";
import {useQuery, UseQueryResult} from 'react-query';

const useProductQuery = <R>(): UseQueryResult<R> => {
    return useQuery<R>({
        queryKey: ['products'],
        queryFn: productsApi,
        onSuccess: (data)=>{

        }
    });
};
export default useProductQuery;
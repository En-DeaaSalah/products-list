import {MutationFunction, useMutation, UseMutationResult} from 'react-query';

import {AxiosResponse} from "axios";
import loginApi from "../../services/loginApi";

const useLoginMutation = <T, R>(): UseMutationResult<AxiosResponse<R>, unknown, T, unknown> => {
    const mutationFn: MutationFunction<AxiosResponse<R>, T> = async (data: T) => {
        return loginApi<T, R>({data});
    };
    return useMutation<AxiosResponse<R>, unknown, T, unknown>(mutationFn);
};
export default useLoginMutation
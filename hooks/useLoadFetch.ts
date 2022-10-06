import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { AxiosCall } from 'models/axios-call.model';

const useLoadFetch = () => {
    const [loading, setLoading] = useState(false);
    let controller: AbortController;

    const callEndpoint = async (axiosCall: AxiosCall<any>) => {
        if (axiosCall.controller) controller = axiosCall.controller;
        setLoading(true);
        let result = {} as AxiosResponse<any>;
        try {
            result = await axiosCall.call;
        } catch (err: any) {
            setLoading(false);
            throw err;
        }
        setLoading(false);
        return result;
    };

    useEffect(() => {
        const cancelEndpoint = () => {
            setLoading(false);
            controller && controller.abort();
        };

        return () => {
            cancelEndpoint();
        };
    }, [controller]);

    return { loading, callEndpoint };
};




export default useLoadFetch;
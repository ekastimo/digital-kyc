import axios, {AxiosResponse} from 'axios';

export const search = async <T>(url: string, data: any): Promise<T | undefined> => {
    try {
        console.log(`SEARCH ${url}`);
        const response = await axios.get(url, {
            params: {...data},
            headers: {
                Accept: 'application/json'
            }
        });
        return response.data as T;
    } catch (e) {
        handleError(e.response);
        return undefined;
    }
};


export const handleError = (response: AxiosResponse<any>) => {
    console.log(response);
    switch (response.status) {
        case 400:
            break;
        case 401:
            break;
    }
};

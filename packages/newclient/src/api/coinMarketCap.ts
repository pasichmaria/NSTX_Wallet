import {instance} from "@/api/axios";

export const getCoinMarketCup = async () => {
    try {
        const response = await instance.get("/prices");
        return response.data;
    } catch (error) {
        return error;
    }
};

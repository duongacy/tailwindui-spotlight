import { API_HOST } from "../../../../configs";
import { ThankyouPageInfoType } from "@/strapi/single/types/ThankyouPageInfoType";

export const getThankyouPageInfo = async () => {
    const rs = await fetch(API_HOST + '/api/thankyou-page-info', { cache: 'no-store' });
    const rsJSON = await rs.json()

    return { ...rsJSON.data } as ThankyouPageInfoType;
}
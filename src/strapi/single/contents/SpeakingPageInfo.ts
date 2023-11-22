import { API_HOST } from "../../../../configs";
import { SpeakingPageInfoType } from "@/strapi/single/types/SpeakingPageInfoType";

export const getSpeakingPageInfo = async () => {
    const rs = await fetch(API_HOST + '/api/speaking-page-info?populate=*', { cache: 'no-store' });
    const rsJSON = await rs.json()

    return { ...rsJSON.data } as SpeakingPageInfoType;
}
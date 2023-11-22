import { API_HOST } from "../../../../configs";
import { AboutPageInfoType } from "@/strapi/single/types/AboutPageInfoType";

export const getAboutPageInfo = async () => {
    const rs = await fetch(API_HOST + '/api/about-page-info?populate=*', { cache: 'no-store' });
    const rsJSON = await rs.json()
    console.log('rsjson', rsJSON);

    return { ...rsJSON.data } as AboutPageInfoType;
}
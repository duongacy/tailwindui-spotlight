import { API_HOST } from "../../../../configs";
import { HomePageInfoType } from "@/strapi/single/types/HomePageInfoType";

export const getHomePageInfo = async () => {
    const rs = await fetch(API_HOST + '/api/home-page-info?populate=*', { cache: 'no-store' });
    const rsJSON = await rs.json()

    return { ...rsJSON.data } as HomePageInfoType;
}
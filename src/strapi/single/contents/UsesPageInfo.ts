import { API_HOST } from "../../../../configs";
import { UsesPageInfoType } from "@/strapi/single/types/UsesPageInfoType";

export const getUsesPageInfo = async () => {
    const rs = await fetch(API_HOST + '/api/uses-page-info?populate=*', { cache: 'no-store' });
    const rsJSON = await rs.json()

    return { ...rsJSON.data } as UsesPageInfoType;
}
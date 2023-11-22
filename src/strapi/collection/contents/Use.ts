import { API_HOST } from "../../../../configs";
import { UseType } from "../types/UseType";

export const getAllUses = async () => {
    const rs = await fetch(API_HOST + '/api/uses?populate=*', { cache: 'no-store' });
    const rsJSON = await rs.json()
    return rsJSON.data as UseType[];
}
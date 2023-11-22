import { API_HOST } from "../../../../configs";
import { SocialType } from "../types/SocialType";

export const getAllSocials = async () => {
    const rs = await fetch(API_HOST + '/api/socials?populate=*', { cache: 'no-store' });
    const rsJSON = await rs.json()
    return rsJSON.data as SocialType[];
}
import { API_HOST } from "../../../../configs";
import { SpeakingSectionType } from "../types/SpeakingSectionType";

export const getAllSpeakingSections = async () => {
    const rs = await fetch(API_HOST + '/api/speaking-sections?populate=*', { cache: 'no-store' });
    const rsJSON = await rs.json()
    console.log(rsJSON);
    
    return rsJSON.data as SpeakingSectionType[];
}
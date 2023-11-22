import { API_HOST } from "../../../../configs";
import { ProjectType } from "../types/ProjectType";

export const getAllProjects = async () => {
    const rs = await fetch(API_HOST + '/api/projects?populate=*', { cache: 'no-store' });
    const rsJSON = await rs.json()
    console.log(rsJSON.data);
    return rsJSON.data as ProjectType[];
}
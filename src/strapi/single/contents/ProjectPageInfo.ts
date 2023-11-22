import { API_HOST } from "../../../../configs";
import { ProjectsPageInfoType } from "@/strapi/single/types/ProjectPageInfoType";

export const getProjectsPageInfo = async () => {
    const rs = await fetch(API_HOST + '/api/projects-page-info', { cache: 'no-store' });
    const rsJSON = await rs.json()
    return { ...rsJSON.data } as ProjectsPageInfoType;
}
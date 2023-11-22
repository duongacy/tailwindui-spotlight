import { ImageType } from "@/strapi/common-types/ImageType";
import { LinkType } from "@/strapi/common-types/LinkType";

export type ProjectType = {
    Name: string;
    Description: string;
    Logo: ImageType;
    Link: LinkType;
}
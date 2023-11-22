import { Image } from "@/strapi/common-types/ImageType";

export type AboutPageInfoType = {
    Title: string;
    Content: string;
    MainImage: Image
}
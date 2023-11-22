export type ImageType = {
    name: string;
    alternativeText: string;
    caption?: string;
    width: number;
    height: number;
    formats: Object[],
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl?: string,
    provider: string,
    provider_metadata?: any,
    createdAt: string,
    updatedAt: string
}
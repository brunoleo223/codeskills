export interface IAuthor {
    name: string;
}

export interface ICategory {
    category: string;
}

export interface IPost {
    title: string;
    author: IAuthor;
    content: string;
    coverImage: {
        responsiveImage: any;
    };
    excerpt: string;
    category: ICategory;
    id: number;
    publishDate: string;
    slug: string;
}

export interface IImage{
    record: {
        __typename?: string;
        image:  {
            responsiveImage:  {
            width?: number;
            webpSrcSet?: string;
            title?: string;
            srcSet?: string
            sizes?: string;
            src?: string;
            height?: number;
            bgColor?: string;
            base64?: string
            aspectRatio?: string;
            alt?: string
            }
        }
    }
}
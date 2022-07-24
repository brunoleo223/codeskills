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
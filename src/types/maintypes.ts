export interface IUser{
    googleId?: string;
    twitterId?: string;
    githubId?: string;
    username: string;
    _v: number;
    _id: string;
}

export interface IItem {
    name: string,
    price?: string,
    quantity?: number,
    photo?: string,
    description?: string,
    size?: string
}

export interface IMongoDBItem {
    name: string,
    price?: string,
    quantity?: Number,
    photo?: string,
    description?: string,
    size?: string,
    _v: number
}
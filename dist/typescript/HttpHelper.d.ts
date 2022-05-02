declare function get<T>(url: string): Promise<{
    success: boolean;
    data: T;
    err?: undefined;
} | {
    success: boolean;
    err: string;
    data?: undefined;
}>;
declare function post(url: string, params: any): Promise<{
    success: boolean;
    data: any;
    err?: undefined;
} | {
    success: boolean;
    err: string;
    data?: undefined;
}>;
declare const HttpHelper: {
    get: typeof get;
    post: typeof post;
};
export default HttpHelper;

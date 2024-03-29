export interface Response {
    result : string;
    msg : string | Record<string,any>
    [propName : string] : any
}

export interface Template {
    render(message: Record<string, any>): string;
    [propName: string]: Function | any | undefined;
}
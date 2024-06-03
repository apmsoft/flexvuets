export interface Response {
    result : "true" | "false";
    msg_code? : string | number;
    msg : string | Record<string,any> | any[]
    [propName : string] : any
}

export interface Template {
    render(message: Record<string, any>): string;
    [propName: string]: Function | any | undefined;
}
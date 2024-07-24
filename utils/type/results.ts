export interface Result {
    count: number;
    next: string;
    previous: null | string;
    results: NamedResult[];
}
export interface NamedResult {
    name: string;
    url: string;
}

export interface UnnamedResult {
    url: string;
}
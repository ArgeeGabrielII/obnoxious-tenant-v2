export interface TOCItem {
    title: string;
    id: string;
    inView: boolean;
    children?: TOCItem[];
    new?: boolean;
    updated?: boolean;
}

export interface TOCIndexItem {
    title: string;
    children?: TOCIndexItem[];
    new?: boolean;
    updated?: boolean;
}

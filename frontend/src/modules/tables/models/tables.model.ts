export interface Country {
    [key: string]: string | number;
    id: number;
    name: string;
    flag: string;
    area: number;
    population: number;
}

export interface Activity {
    [key: string]: string | number;
    id: number;
    date: string;
    eventIcon: string;
    eventText: string;
    eventLinkUrl: string;
    eventLinkText: string;
    time: string;
}

export class Shop {
    public id: number; 
    public name: string;
    public type: string; //type of shop
    public tel: string;
    public fax: string;
    public email: string;
    public website: string;
    public openhours: Array<[string, string]>;
    public note: string;
    public symbol: string;
    public showlogo: boolean;
    public logopath: string;
}
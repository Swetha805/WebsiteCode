import { Time } from "@angular/common";

export interface Checks {

    id : number;

    websiteName: string;

    websiteUrl: string;

    frequency: Time;

    siteStatus: string;

}
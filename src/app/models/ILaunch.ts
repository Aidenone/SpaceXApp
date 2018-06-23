export interface ICore {
    core_serial: string;
    flight?: number;
    block?: number;
    reused?: boolean;
    land_success?: any;
    landing_type?: any;
    landing_vehicle?: any;
}

export interface IFirstStage {
    cores: ICore[];
}

export interface IPayload {
    payload_id: string;
    reused?: boolean;
    customers: string[];
    payload_type: string;
    payload_mass_kg?: number;
    payload_mass_lbs?: number;
    orbit: string;
    cap_serial?: any;
    mass_returned_kg?: any;
    mass_returned_lbs?: any;
    flight_time_sec?: any;
    cargo_manifest?: any;
}

export interface ISecondStage {
    payloads: IPayload[];
}

export interface IRocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: IFirstStage;
    second_stage: ISecondStage;
}

export interface ITelemetry {
    flight_club?: any;
}

export interface IReuse {
    core: boolean;
    side_core1: boolean;
    side_core2: boolean;
    fairings: boolean;
    capsule: boolean;
}

export interface ILaunchSite {
    site_id: string;
    site_name: string;
    site_name_long: string;
}

export interface ILinks {
    mission_patch?: any;
    mission_patch_small?: any;
    reddit_campaign: string;
    reddit_launch?: any;
    reddit_recovery?: any;
    reddit_media?: any;
    presskit?: any;
    article_link?: any;
    wikipedia?: any;
    video_link?: any;
}

export interface ILaunch {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: Date;
    launch_date_local: Date;
    rocket: IRocket;
    telemetry: ITelemetry;
    reuse: IReuse;
    launch_site: ILaunchSite;
    launch_success?: any;
    links: ILinks;
    details?: any;
}
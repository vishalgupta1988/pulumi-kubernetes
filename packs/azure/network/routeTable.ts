// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class RouteTable extends lumi.NamedResource implements RouteTableArgs {
    public readonly location: string;
    public readonly routeTableName?: string;
    public readonly resourceGroupName: string;
    public readonly route?: { addressPrefix: string, name: string, nextHopInIpAddress?: string, nextHopType: string }[];
    public readonly subnets?: string[];
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: RouteTableArgs) {
        super(name);
        if (args.location === undefined) {
            throw new Error("Property argument 'location' is required, but was missing");
        }
        this.location = args.location;
        this.routeTableName = args.routeTableName;
        if (args.resourceGroupName === undefined) {
            throw new Error("Property argument 'resourceGroupName' is required, but was missing");
        }
        this.resourceGroupName = args.resourceGroupName;
        this.route = args.route;
        this.subnets = args.subnets;
        this.tags = args.tags;
    }
}

export interface RouteTableArgs {
    readonly location: string;
    readonly routeTableName?: string;
    readonly resourceGroupName: string;
    readonly route?: { addressPrefix: string, name: string, nextHopInIpAddress?: string, nextHopType: string }[];
    readonly subnets?: string[];
    readonly tags?: {[key: string]: any};
}

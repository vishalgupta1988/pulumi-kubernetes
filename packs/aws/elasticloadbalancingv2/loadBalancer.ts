// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class LoadBalancer extends lumi.NamedResource implements LoadBalancerArgs {
    public readonly accessLogs?: { bucket: string, enabled?: boolean, prefix?: string }[];
    public readonly arn?: string;
    public readonly arnSuffix?: string;
    public readonly dnsName?: string;
    public readonly enableDeletionProtection?: boolean;
    public readonly idleTimeout?: number;
    public readonly internal?: boolean;
    public readonly ipAddressType?: string;
    public readonly _name?: string;
    public readonly namePrefix?: string;
    public readonly securityGroups?: string[];
    public readonly subnets: string[];
    public readonly tags?: {[key: string]: any};
    public readonly vpcId?: string;
    public readonly zoneId?: string;

    constructor(name: string, args: LoadBalancerArgs) {
        super(name);
        this.accessLogs = args.accessLogs;
        this.arn = args.arn;
        this.arnSuffix = args.arnSuffix;
        this.dnsName = args.dnsName;
        this.enableDeletionProtection = args.enableDeletionProtection;
        this.idleTimeout = args.idleTimeout;
        this.internal = args.internal;
        this.ipAddressType = args.ipAddressType;
        this._name = args._name;
        this.namePrefix = args.namePrefix;
        this.securityGroups = args.securityGroups;
        this.subnets = args.subnets;
        this.tags = args.tags;
        this.vpcId = args.vpcId;
        this.zoneId = args.zoneId;
    }
}

export interface LoadBalancerArgs {
    readonly accessLogs?: { bucket: string, enabled?: boolean, prefix?: string }[];
    readonly arn?: string;
    readonly arnSuffix?: string;
    readonly dnsName?: string;
    readonly enableDeletionProtection?: boolean;
    readonly idleTimeout?: number;
    readonly internal?: boolean;
    readonly ipAddressType?: string;
    readonly _name?: string;
    readonly namePrefix?: string;
    readonly securityGroups?: string[];
    readonly subnets: string[];
    readonly tags?: {[key: string]: any};
    readonly vpcId?: string;
    readonly zoneId?: string;
}

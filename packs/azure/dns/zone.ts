// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Zone extends lumi.NamedResource implements ZoneArgs {
    public readonly maxNumberOfRecordSets?: string;
    public readonly zoneName?: string;
    public readonly nameServers?: string[];
    public readonly numberOfRecordSets?: string;
    public readonly resourceGroupName: string;
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: ZoneArgs) {
        super(name);
        this.maxNumberOfRecordSets = args.maxNumberOfRecordSets;
        this.zoneName = args.zoneName;
        this.nameServers = args.nameServers;
        this.numberOfRecordSets = args.numberOfRecordSets;
        if (args.resourceGroupName === undefined) {
            throw new Error("Property argument 'resourceGroupName' is required, but was missing");
        }
        this.resourceGroupName = args.resourceGroupName;
        this.tags = args.tags;
    }
}

export interface ZoneArgs {
    readonly maxNumberOfRecordSets?: string;
    readonly zoneName?: string;
    readonly nameServers?: string[];
    readonly numberOfRecordSets?: string;
    readonly resourceGroupName: string;
    readonly tags?: {[key: string]: any};
}

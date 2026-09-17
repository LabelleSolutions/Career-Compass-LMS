export type Capability='roster_sync'|'grade_passback'|'sso'|'content_launch'|'analytics_export';
export type Protocol='lti_1_3'|'oauth2'|'api_key'|'webhook'|'scorm'|'xapi'|'oneroster'|'custom';
export type InstallationContext={installationId:string;organizationId:string;config:Record<string,unknown>;secrets:Record<string,string>};
export type RosterMember={externalUserId:string;externalUsername?:string;displayName:string;role:'student'|'teacher';externalClassId?:string};
export type GradePayload={externalClassId:string;externalUserId:string;externalLineItemId?:string;score:number;maxScore:number;submittedAt:string};
export type HealthResult={ok:boolean;detail?:string};
export interface Connector{readonly slug:string;readonly protocol:Protocol;readonly capabilities:readonly Capability[];healthCheck(ctx:InstallationContext):Promise<HealthResult>;fetchRoster?(ctx:InstallationContext):Promise<RosterMember[]>;pushGrade?(ctx:InstallationContext,grade:GradePayload):Promise<void>;buildLaunchUrl?(ctx:InstallationContext,args:{internalActivityId:string;profileId:string}):Promise<string>;emitEvent?(ctx:InstallationContext,event:{type:string;payload:Record<string,unknown>}):Promise<void>;verifyWebhook?(ctx:InstallationContext,req:{headers:Record<string,string>;rawBody:string}):Promise<boolean>}

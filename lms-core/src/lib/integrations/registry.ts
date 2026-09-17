import type { Connector } from './types';
import { genericWebhookConnector } from './connectors/generic-webhook';
import { customRestConnector } from './connectors/custom-rest';
const REGISTRY=new Map<string,Connector>();
export function register(connector:Connector){REGISTRY.set(connector.slug,connector)}
export function getConnector(slug:string){return REGISTRY.get(slug)}
export function listConnectors(){return [...REGISTRY.values()]}
register(genericWebhookConnector); register(customRestConnector);

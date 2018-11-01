export const DELETE_V2V_INFRASTRUCTURE_MAPPING = 'DELETE_INFRASTRUCTURE_MAPPING';
export const FETCH_V2V_CLOUD_NETWORKS = 'FETCH_CLOUD_NETWORKS';
export const FETCH_V2V_CLOUD_TENANTS = 'FETCH_CLOUD_TENANTS';
export const FETCH_V2V_CLOUD_VOLUME_TYPES = 'FETCH_CLOUD_VOLUME_TYPES';
export const FETCH_V2V_CLUSTERS = 'FETCH_V2V_CLUSTERS';
export const FETCH_V2V_DATASTORES = 'FETCH_DATASTORES';
export const FETCH_V2V_NETWORKS = 'FETCH_NETWORKS';
export const FETCH_V2V_TRANSFORMATION_MAPPINGS = 'FETCH_V2V_TRANSFORMATION_MAPPINGS';
export const HIDE_V2V_DELETE_CONFIRMATION_MODAL = 'HIDE_V2V_DELETE_CONFIRMATION_MODAL';
export const OPEN_V2V_MAPPING_WIZARD_ON_MOUNT = 'OPEN_V2V_MAPPING_WIZARD_ON_MOUNT';
export const SET_V2V_MAPPING_TO_DELETE = 'SET_V2V_MAPPING_TO_DELETE';
export const SHOW_V2V_DELETE_CONFIRMATION_MODAL = 'SHOW_V2V_DELETE_CONFIRMATION_MODAL';
export const YES_TO_DELETE_AND_HIDE_DELETE_CONFIRMATION_MODAL = 'YES_TO_DELETE_AND_HIDE_DELETE_CONFIRMATION_MODAL';

export const FETCH_TRANSFORMATION_MAPPINGS_URL =
  '/api/transformation_mappings?expand=resources' +
  '&attributes=transformation_mapping_items,service_templates' +
  '&sort_by=updated_at' +
  '&sort_order=desc';

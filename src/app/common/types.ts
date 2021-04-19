export type ButtonColors =
  | 'default'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | undefined;

export type CheckboxColors = 'default' | 'primary' | 'secondary' | undefined;

export interface DatagridRows {
  id: string;
  name: string;
  email: string;
  recieveNewsLeters: string;
  showTargetedAds: string;
  visitStatistics: string;
}
export interface DatagridConfig {
  field: string;
  headerName: string;
  width: number;
}

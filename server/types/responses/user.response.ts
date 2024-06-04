export interface IAccessToken {
  exp: number;
  user_id: string;
  username: string;
  approval: number;
  management: string;
  division_cd: string;
  office_cd: string;
  status: boolean;
}

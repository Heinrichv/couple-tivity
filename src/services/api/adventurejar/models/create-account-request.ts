/* tslint:disable */
export interface CreateAccountRequest {
  id?: string;
  email?: string;
  name?: string;
  familyName?: string;
  givenName?: string;
  gender?: string;
  picture?: string;
  isLinked?: boolean;
  linkedToAccount?: string;
}

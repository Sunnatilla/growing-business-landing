import { server } from "./axios";

const webConfigEnv = (window as any).env;

export interface CodeName {
  code?: string;
  name?: string;
  description?: string;
}

export class ReferenceController {
  async getIdentityTypes(): Promise<CodeName[]> {
    return server.get(`/api/generic/Id`, {
      baseURL: webConfigEnv.REFERENCE_API,
    });
  }
  async getCityBranches(): Promise<any[]> {
    return server.get(`/api/generic/CityBranch`, {
      baseURL: webConfigEnv.REFERENCE_API,
    });
  }
}

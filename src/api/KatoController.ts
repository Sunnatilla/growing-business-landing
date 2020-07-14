import { server } from "./axios";

const webConfigEnv = (window as any).env;

export interface KatoBaseModel {
  districts?: KatoModel[];
  cities?: KatoModel[];
  villages?: KatoModel[];
}

export class KatoModel {
  constructor() {
    this.te = "";
    this.ab = "";
    this.cd = "";
    this.ef = "";
    this.hij = "";
    this.index = "";
    this.k = "";
    this.kaz_name = "";
    this.rus_name = "";
  }

  te?: string;
  ab?: string;
  cd?: string;
  ef?: string;
  hij?: string;
  index?: string;
  k?: string;
  kaz_name?: string;
  rus_name?: string;
}

export class KatoController {
  async getRegions(): Promise<KatoModel[]> {
    return await server.get(`/api/kato/regions`, {
      baseURL: webConfigEnv.REFERENCE_API,
    });
  }

  async getKatoChildren(te?: string): Promise<KatoBaseModel> {
    return await server.get(`/api/kato/children/new/${te}`, {
      baseURL: webConfigEnv.REFERENCE_API,
    });
  }
}

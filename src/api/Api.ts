import axios from "axios";
import moment from "moment";
import { AuthOtpController } from "./AuthOtpController";
import { CamundaController } from "./CamundaController";
import { ReferenceController } from "./ReferenceController";

const baseURL = process.env.REACT_APP_SERVER_URL || "";

export class Api {
  card = new CardController();
  authOtp = new AuthOtpController();
  camunda = new CamundaController();
  reference = new ReferenceController();
}

export interface OrderRequest {
  fio?: string;
  phoneNumber?: string;
}

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export class CardController {
  order(request: OrderRequest) {
    const config: any = {};
    config.headers = config.headers || {};
    config.headers = {
      "x-ibm-client-id": "c274fb89-0d53-4304-95e9-130b267cd326",
    };
    config.baseURL = baseURL;

    const data = {
      system: "EXTERNALSITE",
      requestId: uuid(),
      responseId: "c274fb89-0d53-4304-95e9-130b267cd326",
      route: "DeltaM",
      object: "ClaimAddRequest",
      timestamp: "1453526556",
      type: "REQUEST",
      attributes: {
        data: {
          type: "SMARTCALL",
          systemId: "c274fb89-0d53-4304-95e9-130b267cd326",
          name: request.fio, //---------------------FIO
          phone: request.phoneNumber, //------------PhoneNumber
          iinBin: null,
          organizationName: null,
          email: null,
          callTime: moment().format("HH:mm"), //--------------CallTime
          date: moment().format("DD-MM-YYYY"), //----------------------DateTime
          productService: {
            productName: "#картакарта",
            productCode: "0.300.1400.10",
            productDescription: "Кредитная карта - рассрочка #картакарта",
          },
        },
      },
    };

    return axios
      .post(`/protected/callcenter/order`, data, config)
      .then((r) => r.data);
  }
}

export default new Api();

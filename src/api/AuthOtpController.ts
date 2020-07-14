import { server } from "./axios";

const webConfigEnv = (window as any).env;

export interface OtpRequest {
  iin?: string;
  phone?: string;
  otp?: string;
}

export class UserContext {
  token?: Token;
}

export class Token {
  accessToken?: string;
  refreshToken?: string;
}

export class AuthOtpController {
  async sendOtp(request?: OtpRequest): Promise<any> {
    console.log("submit otp server");
    return await server.post(
      `/hotspot/sendOtp`,
      {
        ...request,
      },
      {
        baseURL: webConfigEnv.OTP_URL,
      }
    );
  }

  async confirmOtp(request?: OtpRequest): Promise<UserContext> {
    return await server.post(
      `/auth/login/public`,
      {
        ...request,
      },
      {
        baseURL: webConfigEnv.GREEN_API,
      }
    );
  }
}

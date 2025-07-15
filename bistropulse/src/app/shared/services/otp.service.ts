import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class OtpService {
  private readonly BASE_URL =
    `${environment.apiBaseUrl}/users/role-otps/`;

  constructor(private http: HttpClient, private auth: AuthService) {}

  private getAuthHeader() {
    const token = this.auth.getToken();
    return token ? { Authorization: `Token ${token}` } : {}; // return empty if no token
  }

  getOtps() {
    const headers = this.getAuthHeader();
    return this.http.get(this.BASE_URL, { headers });
  }

  addOtp(otp: string, role: string) {
    const headers = this.getAuthHeader();
    return this.http.post(this.BASE_URL, { otp, role }, { headers });
  }
}

export interface JwtPayload {
  sub: number;
  email: string;
  pv: number;
  iat?: number;
  exp?: number;
}

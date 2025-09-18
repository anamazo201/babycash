import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'baby-cash-secret-key-2024',
    });
  }

  async validate(payload: any) {
    if (!payload || !payload.sub || !payload.correo || !payload.tipo) {
      throw new UnauthorizedException('Token inválido: payload incompleto');
    }

    return { 
      userId: payload.sub, 
      correo: payload.correo, 
      tipo: payload.tipo 
    };
  }
}
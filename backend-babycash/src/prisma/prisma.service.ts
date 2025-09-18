import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit , OnModuleDestroy  {
 private _producto: any;
  public get producto(): any {
    return this._producto;
  }
  public set producto(value: any) {
    this._producto = value;
  }

 async onModuleInit() {
   await this.$connect();
 }

 async onModuleDestroy() {
   await this.$disconnect();
 }

}
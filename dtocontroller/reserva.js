var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';
export class Reserva {
    constructor(data) {
        Object.assign(this, data);
        this.sucursalID = 0;
        this.clienteID = 0;
        this.automovilID = 0;
        this.diaReserva = new Date;
        this.inicio = new Date;
        this.finReserva = new Date;
        this.estado = "";
    }
}
__decorate([
    Expose({ name: 'ID_Reserva' })
    // @IsNumber({}, { message: () => { throw { status: 422, message: `El cedula_usuario no cumple con el formato, debe ser un numero`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro sucursal es obligatorio` }; } }),
    __metadata("design:type", Number)
], Reserva.prototype, "sucursalID", void 0);
__decorate([
    Expose({ name: 'ID_Cliente_id' })
    // @IsNumber({}, { message: () => { throw { status: 422, message: `El cedula_usuario no cumple con el formato, debe ser un numero`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro clienteID es obligatorio` }; } }),
    __metadata("design:type", Number)
], Reserva.prototype, "clienteID", void 0);
__decorate([
    Expose({ name: 'ID_Automovil_id' })
    // @IsNumber({}, { message: () => { throw { status: 422, message: `El cedula_usuario no cumple con el formato, debe ser un numero`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro automovilID es obligatorio` }; } }),
    __metadata("design:type", Number)
], Reserva.prototype, "automovilID", void 0);
__decorate([
    Expose({ name: 'Fecha_Reserva' })
    // @IsNumber({}, { message: () => { throw { status: 422, message: `El cedula_usuario no cumple con el formato, debe ser un numero`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro diaReserva es obligatorio` }; } }),
    __metadata("design:type", Date)
], Reserva.prototype, "diaReserva", void 0);
__decorate([
    Expose({ name: 'Fecha_Inicio' })
    // @IsNumber({}, { message: () => { throw { status: 422, message: `El cedula_usuario no cumple con el formato, debe ser un numero`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro inicio es obligatorio` }; } }),
    __metadata("design:type", Date)
], Reserva.prototype, "inicio", void 0);
__decorate([
    Expose({ name: 'Fecha_Fin' })
    // @IsNumber({}, { message: () => { throw { status: 422, message: `El cedula_usuario no cumple con el formato, debe ser un numero`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro finReserva es obligatorio` }; } }),
    __metadata("design:type", Date)
], Reserva.prototype, "finReserva", void 0);
__decorate([
    Expose({ name: 'Estado' })
    // @IsNumber({}, { message: () => { throw { status: 422, message: `El cedula_usuario no cumple con el formato, debe ser un numero`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro estado es obligatorio` }; } }),
    __metadata("design:type", String)
], Reserva.prototype, "estado", void 0);
;

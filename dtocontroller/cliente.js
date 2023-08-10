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
export class Cliente {
    constructor(data) {
        Object.assign(this, data);
        this.cliente = 0;
        this.nombre = "";
        this.apellido = "";
        this.identificacion = "";
        this.direccion = "";
        this.telefono = "";
        this.email = "";
    }
}
__decorate([
    Expose({ name: 'ID_Cliente' })
    // @IsNumber({}, { message: () => { throw { status: 422, message: `El cedula_usuario no cumple con el formato, debe ser un numero`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro cliente es obligatorio` }; } }),
    __metadata("design:type", Number)
], Cliente.prototype, "cliente", void 0);
__decorate([
    Expose({ name: 'Nombre' })
    // @IsString({ message: () => { throw { status: 422, message: `El nombre_usuario no cumple con el formato, debe ser un string`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro nombre es obligatorio` }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'Apellido' })
    // @IsString({ message: () => { throw { status: 422, message: `El nombre_usuario no cumple con el formato, debe ser un string`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro apellido es obligatorio` }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "apellido", void 0);
__decorate([
    Expose({ name: 'DNI' })
    // @IsString({ message: () => { throw { status: 422, message: `El nombre_usuario no cumple con el formato, debe ser un string`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro identificacion es obligatorio` }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "identificacion", void 0);
__decorate([
    Expose({ name: 'Direccion' })
    // @IsString({ message: () => { throw { status: 422, message: `El nombre_usuario no cumple con el formato, debe ser un string`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro direccion es obligatorio` }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "direccion", void 0);
__decorate([
    Expose({ name: 'Telefono' })
    // @IsString({ message: () => { throw { status: 422, message: `El nombre_usuario no cumple con el formato, debe ser un string`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro telefono es obligatorio` }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "telefono", void 0);
__decorate([
    Expose({ name: 'Email' })
    // @IsString({ message: () => { throw { status: 422, message: `El nombre_usuario no cumple con el formato, debe ser un string`}}})
    ,
    IsDefined({ message: () => { throw { status: 422, message: `El parametro email es obligatorio` }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "email", void 0);
;

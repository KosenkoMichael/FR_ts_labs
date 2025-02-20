function Seal<T extends { new(...args: any[]): {} }>(constructor: T) {
    Object.seal(constructor.prototype);
    return constructor;
}

function ToUpperCase(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
            if (typeof result === "string") {
                return result.toUpperCase();
            }
            return result;
        };
        return descriptor;
}

export namespace Transport {
    export enum DocType {
        Passport = 'Паспорт',
        DriverLicense = 'Водительское удостоверение',
        IDCard = 'Удостоверение личности',
    }

    export interface Owner {
        LastName: string;
        FirstName: string;
        MiddleName: string;
        BirthDate: Date;
        DocType: DocType;
        DocumentSeries: string;
        DocumentNumber: string;
        printInfo(): void;
    }

    export interface Vehicle {
        Brand: string;
        Model: string;
        ManufactureYear: number;
        VINNumber: string;
        RegistrationNumber: string;
        Owner: Owner;
        printInfo(): void;
    }

    export class OwnerImpl implements Owner {
        private _LastName: string;
        private _FirstName: string;
        private _MiddleName: string;
        private _BirthDate: Date;
        private _DocType: DocType;
        private _DocumentSeries: string;
        private _DocumentNumber: string;

        constructor(
            LastName: string,
            FirstName: string,
            MiddleName: string,
            BirthDate: Date,
            DocType: DocType,
            DocumentSeries: string,
            DocumentNumber: string,
        ) {
            this._LastName = LastName;
            this._FirstName = FirstName;
            this._MiddleName = MiddleName;
            this._BirthDate = BirthDate;
            this._DocType = DocType;
            this._DocumentSeries = DocumentSeries;
            this._DocumentNumber = DocumentNumber;
        }

        get LastName(): string {
            return this._LastName;
        }

        set LastName(value: string) {
            this._LastName = value;
        }

        get FirstName(): string {
            return this._FirstName;
        }

        set FirstName(value: string) {
            this._FirstName = value;
        }

        get MiddleName(): string {
            return this._MiddleName;
        }

        set MiddleName(value: string) {
            this._MiddleName = value;
        }

        get BirthDate(): Date {
            return this._BirthDate;
        }

        set BirthDate(value: Date) {
            this._BirthDate = value;
        }

        get DocType(): DocType {
            return this._DocType;
        }

        set DocType(value: DocType) {
            this._DocType = value;
        }

        get DocumentSeries(): string {
            return this._DocumentSeries;
        }

        set DocumentSeries(value: string) {
            this._DocumentSeries = value;
        }

        get DocumentNumber(): string {
            return this._DocumentNumber;
        }

        set DocumentNumber(value: string) {
            this._DocumentNumber = value;
        }

        printInfo(): void {
            console.log('Информация о владельце:');
            console.log(`Фамилия: ${this._LastName}`);
            console.log(`Имя: ${this._FirstName}`);
            console.log(`Отчество: ${this._MiddleName}`);
            console.log(`Дата рождения: ${this._BirthDate.toLocaleDateString()}`);
            console.log(`Тип документа: ${this._DocType}`);
            console.log(`Серия документа: ${this._DocumentSeries}`);
            console.log(`Номер документа: ${this._DocumentNumber}`);
        }
    }

    export class VehicleImpl implements Vehicle {
        private _Brand: string;
        private _Model: string;
        private _ManufactureYear: number;
        private _VINNumber: string;
        private _RegistrationNumber: string;
        private _Owner: Owner;

        constructor(
            Brand: string,
            Model: string,
            ManufactureYear: number,
            VINNumber: string,
            RegistrationNumber: string,
            Owner: Owner,
        ) {
            this._Brand = Brand;
            this._Model = Model;
            this._ManufactureYear = ManufactureYear;
            this._VINNumber = VINNumber;
            this._RegistrationNumber = RegistrationNumber;
            this._Owner = Owner;
        }

        get Brand(): string {
            return this._Brand;
        }

        set Brand(value: string) {
            this._Brand = value;
        }

        get Model(): string {
            return this._Model;
        }

        set Model(value: string) {
            this._Model = value;
        }

        get ManufactureYear(): number {
            return this._ManufactureYear;
        }

        set ManufactureYear(value: number) {
            this._ManufactureYear = value;
        }

        get VINNumber(): string {
            return this._VINNumber;
        }

        set VINNumber(value: string) {
            this._VINNumber = value;
        }

        get RegistrationNumber(): string {
            return this._RegistrationNumber;
        }

        set RegistrationNumber(value: string) {
            this._RegistrationNumber = value;
        }

        get Owner(): Owner {
            return this._Owner;
        }

        set Owner(value: Owner) {
            this._Owner = value;
        }

        printInfo(): string {
            // console.log('Сведения о транспортном средстве:');
            // console.log(`Марка: ${this._Brand}`);
            // console.log(`Модель: ${this._Model}`);
            // console.log(`Год выпуска: ${this._ManufactureYear}`);
            // console.log(`VIN-номер: ${this._VINNumber}`);
            // console.log(`Регистрационный номер: ${this._RegistrationNumber}`);
            return `Марка: ${this.Brand}\nМодель: ${this.Model}\nГод выпуска: ${this.ManufactureYear}\nVIN-номер: ${this.VINNumber}\nРегистрационный номер: ${this.RegistrationNumber}\n`;
        }
    }

    export enum BodyType {
        Sedan = 'Седан',
        Hatchback = 'Хэтчбек',
        SUV = 'Внедорожник',
        Coupe = 'Купе',
        Convertible = 'Кабриолет',
    }

    export enum CarClass {
        Economy = 'Эконом',
        Comfort = 'Комфорт',
        Business = 'Бизнес',
        Luxury = 'Люкс',
    }

    export interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;
    }

    @Seal
    export class CarImpl extends VehicleImpl implements Car {
        private _bodyType: BodyType;
        private _carClass: CarClass;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            bodyType: BodyType,
            carClass: CarClass,
        ) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._bodyType = bodyType;
            this._carClass = carClass;
        }

        get bodyType(): BodyType {
            return this._bodyType;
        }

        set bodyType(value: BodyType) {
            this._bodyType = value;
        }

        get carClass(): CarClass {
            return this._carClass;
        }

        set carClass(value: CarClass) {
            this._carClass = value;
        }

        @ToUpperCase
        printInfo(): string {
            let parentInfo = super.printInfo();
            return parentInfo + `Тип кузова: ${this._bodyType}\nКласс автомобиля: ${this._carClass}`;
        }
    }

    export interface Motorbike extends Vehicle {
        frameType: string;
        isSport: boolean;
    }

    export class MotorbikeImpl extends VehicleImpl implements Motorbike {
        private _frameType: string;
        private _isSport: boolean;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            frameType: string,
            isSport: boolean,
        ) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._frameType = frameType;
            this._isSport = isSport;
        }

        get frameType(): string {
            return this._frameType;
        }

        set frameType(value: string) {
            this._frameType = value;
        }

        get isSport(): boolean {
            return this._isSport;
        }

        set isSport(value: boolean) {
            this._isSport = value;
        }

        printInfo(): string {
            super.printInfo();
            console.log(`Тип рамы: ${this._frameType}`);
            console.log(`Для спорта: ${this._isSport ? 'Да' : 'Нет'}`);
            return '';
        }
    }

    export interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];
        getAllVehicles(): T[];
    }

    export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        private _creationDate: Date;
        private _vehicles: T[];

        constructor() {
            this._creationDate = new Date();
            this._vehicles = [];
        }

        get creationDate(): Date {
            return this._creationDate;
        }

        get vehicles(): T[] {
            return this._vehicles;
        }

        addVehicle(vehicle: T): void {
            this._vehicles.push(vehicle);
        }

        getAllVehicles(): T[] {
            return this._vehicles;
        }
    }
}

try {
    (Transport.CarImpl.prototype as any).NewField = 1;
    console.log("successfull add a field")
} catch (error) {
    console.error("failure add a field", error);
}

try {
    Object.defineProperty(Transport.CarImpl.prototype, 'printVehicleInfo', {
      value: function() { console.log("printVehicleInfo is changed"); },
      writable: false,
      configurable: false
    });
  } catch (error) {
    console.error("printVehicleInfo cannot be changed", error);
}

const owner = new Transport.OwnerImpl(
    'Петров',
    'Петр',
    'Петрович',
    new Date(1985, 10, 20),
    Transport.DocType.DriverLicense,
    '4321',
    '987654',
);

const car = new Transport.CarImpl(
    'Toyota',
    'Camry',
    2020,
    '2T1BURHE0LC123456',
    'X567YZ78',
    owner,
    Transport.BodyType.Sedan,
    Transport.CarClass.Comfort,
);

console.log(car.printInfo());
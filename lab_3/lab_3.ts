// TASK 1
console.log('---TASK 1---');
enum DocType {
    Passport = 'Паспорт',
    DriverLicense = 'Водительское удостоверение',
    IDCard = 'Удостоверение личности',
}

interface Owner {
    LastName: string;
    FirstName: string;
    MiddleName: string;
    BirthDate: Date;
    DocType: DocType;
    DocumentSeries: string;
    DocumentNumber: string;
    printInfo(): void;
}

interface Vehicle {
    Brand: string;
    Model: string;
    ManufactureYear: number;
    VINNumber: string;
    RegistrationNumber: string;
    Owner: Owner;
    printInfo(): void;
}

class OwnerImpl implements Owner {
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

class VehicleImpl implements Vehicle {
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

    printInfo(): void {
        console.log('Сведения о транспортном средстве:');
        console.log(`Марка: ${this._Brand}`);
        console.log(`Модель: ${this._Model}`);
        console.log(`Год выпуска: ${this._ManufactureYear}`);
        console.log(`VIN-номер: ${this._VINNumber}`);
        console.log(`Регистрационный номер: ${this._RegistrationNumber}`);
    }
}

const Owner = new OwnerImpl(
    'Иванов',
    'Иван',
    'Иванович',
    new Date(2000, 10, 10),
    DocType.Passport,
    '5436',
    '003871',
);

const vehicle = new VehicleImpl(
    'Volkswagen',
    'Touareg',
    2008,
    'A123B456C789',
    'A1B2C3D',
    Owner,
);

Owner.printInfo();
console.log();

vehicle.printInfo();
console.log();

// TASK 2
console.log('---TASK 2---');

enum BodyType {
    Sedan = 'Седан',
    Hatchback = 'Хэтчбек',
    SUV = 'Внедорожник',
    Coupe = 'Купе',
    Convertible = 'Кабриолет',
}

enum CarClass {
    Economy = 'Эконом',
    Comfort = 'Комфорт',
    Business = 'Бизнес',
    Luxury = 'Люкс',
}

interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
}

class CarImpl extends VehicleImpl implements Car {
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

    printInfo(): void {
        super.printInfo();
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carClass}`);
    }
}

interface Motorbike extends Vehicle {
    frameType: string;
    isSport: boolean;
}

class MotorbikeImpl extends VehicleImpl implements Motorbike {

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

    printInfo(): void {
        super.printInfo();
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Для спорта: ${this._isSport ? 'Да' : 'Нет'}`);
    }
}

const owner = new OwnerImpl(
    'Петров',
    'Петр',
    'Петрович',
    new Date(1985, 10, 20),
    DocType.DriverLicense,
    '4321',
    '987654',
);

const car = new CarImpl(
    'Toyota',
    'Camry',
    2020,
    '2T1BURHE0LC123456',
    'X567YZ78',
    owner,
    BodyType.Sedan,
    CarClass.Comfort,
);

const motorbike = new MotorbikeImpl(
    'Harley-Davidson',
    'Sportster',
    2019,
    '1HD1KEM1XBB123456',
    'M123MC45',
    owner,
    'Стальная',
    true,
);

car.printInfo();
console.log();

motorbike.printInfo();
console.log();

// TASK 3
console.log('---TASK 3---');

interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
}

class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
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

const owner_3 = new OwnerImpl(
    'Сидоров',
    'Сидор',
    'Сидорович',
    new Date(1975, 3, 12),
    DocType.Passport,
    '5678',
    '123456',
);

const car_3 = new CarImpl(
    'Toyota',
    'Corolla',
    2018,
    '1HGCM82633A654321',
    'B234CD56',
    owner,
    BodyType.Sedan,
    CarClass.Comfort,
);

const motorbike_3 = new MotorbikeImpl(
    'Yamaha',
    'YZF-R1',
    2021,
    'JYARN29E000123456',
    'M789MC12',
    owner_3,
    'Алюминиевая',
    true,
);

const carStorage = new VehicleStorageImpl<Car>();
carStorage.addVehicle(car_3);

const motorbikeStorage = new VehicleStorageImpl<Motorbike>();
motorbikeStorage.addVehicle(motorbike_3);

console.log('Хранилище автомобилей:');
console.log(`Дата создания: ${carStorage.creationDate.toLocaleDateString()}`);
console.log('Автомобили в хранилище:');
carStorage.getAllVehicles().forEach((vehicle) => vehicle.printInfo());

console.log('\nХранилище мотоциклов:');
console.log(`Дата создания: ${motorbikeStorage.creationDate.toLocaleDateString()}`);
console.log('Мотоциклы в хранилище:');
motorbikeStorage.getAllVehicles().forEach((vehicle) => vehicle.printInfo());
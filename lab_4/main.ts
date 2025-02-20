import { Transport } from './transport.ts';

// TASK 1

console.log('---TASK 1---');

const Owner = new Transport.OwnerImpl(
    'Иванов',
    'Иван',
    'Иванович',
    new Date(2000, 10, 10),
    Transport.DocType.Passport,
    '5436',
    '003871',
);

const vehicle = new Transport.VehicleImpl(
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

const motorbike = new Transport.MotorbikeImpl(
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

const owner_3 = new Transport.OwnerImpl(
    'Сидоров',
    'Сидор',
    'Сидорович',
    new Date(1975, 3, 12),
    Transport.DocType.Passport,
    '5678',
    '123456',
);

const car_3 = new Transport.CarImpl(
    'Toyota',
    'Corolla',
    2018,
    '1HGCM82633A654321',
    'B234CD56',
    owner,
    Transport.BodyType.Sedan,
    Transport.CarClass.Comfort,
);

const motorbike_3 = new Transport.MotorbikeImpl(
    'Yamaha',
    'YZF-R1',
    2021,
    'JYARN29E000123456',
    'M789MC12',
    owner_3,
    'Алюминиевая',
    true,
);

const carStorage = new Transport.VehicleStorageImpl<Transport.Car>();
carStorage.addVehicle(car_3);

const motorbikeStorage = new Transport.VehicleStorageImpl<Transport.Motorbike>();
motorbikeStorage.addVehicle(motorbike_3);

console.log('Хранилище автомобилей:');
console.log(`Дата создания: ${carStorage.creationDate.toLocaleDateString()}`);
console.log('Автомобили в хранилище:');
carStorage.getAllVehicles().forEach((vehicle) => vehicle.printInfo());

console.log('\nХранилище мотоциклов:');
console.log(`Дата создания: ${motorbikeStorage.creationDate.toLocaleDateString()}`);
console.log('Мотоциклы в хранилище:');
motorbikeStorage.getAllVehicles().forEach((vehicle) => vehicle.printInfo());

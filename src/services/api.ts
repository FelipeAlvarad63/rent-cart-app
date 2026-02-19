export interface Vehicle {
    id: string;
    name: string;
    price: number;
    image: string;
    type: string;
    transmission: string;
}

const MOCK_VEHICLES: Vehicle[] = [
    {
        id: '1',
        name: 'Toyota Corolla',
        price: 45,
        image: '/images/corolla.png',
        type: 'Sedan',
        transmission: 'Automatic',
    },
    {
        id: '2',
        name: 'Ford Escape',
        price: 65,
        image: '/images/escape.png',
        type: 'SUV',
        transmission: 'Automatic',
    },
    {
        id: '3',
        name: 'BMW 3 Series',
        price: 95,
        image: '/images/bmw3.png',
        type: 'Luxury',
        transmission: 'Automatic',
    },
];

export const searchVehicles = async (): Promise<Vehicle[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_VEHICLES);
        }, 1000);
    });
};

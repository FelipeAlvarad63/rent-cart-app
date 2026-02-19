'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import VehicleCard from '../VehicleCard/VehicleCard';
import { selectVehicle } from '../../features/booking/bookingSlice';
import styles from './VehicleList.module.css';

const VehicleList: React.FC = () => {
    const dispatch = useDispatch();
    const { vehicles, loading, error } = useSelector((state: RootState) => state.results);
    const { selectedVehicle } = useSelector((state: RootState) => state.booking);

    if (loading) {
        return <div className={styles.loading}>Buscando vehículos disponibles...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (vehicles.length === 0) {
        return null;
    }

    return (
        <div className={styles.list}>
            {vehicles.map((vehicle) => (
                <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    onSelect={(v) => dispatch(selectVehicle(v))}
                    isSelected={selectedVehicle?.id === vehicle.id}
                />
            ))}
        </div>
    );
};

export default VehicleList;

'use client';

import React from 'react';
import { Vehicle } from '../../services/api';
import styles from './VehicleCard.module.css';

interface VehicleCardProps {
    vehicle: Vehicle;
    onSelect: (vehicle: Vehicle) => void;
    isSelected: boolean;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelect, isSelected }) => {
    return (
        <div className={`${styles.card} ${isSelected ? styles.selected : ''}`}>
            {/* TODO: usar imágenes reales */}
            <div className={styles.imagePlaceholder}>
                <span>{vehicle.type}</span>
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{vehicle.name}</h3>
                <p className={styles.details}>{vehicle.type} • {vehicle.transmission}</p>
                <p className={styles.price}>${vehicle.price} / día</p>
                <button
                    className={styles.button}
                    onClick={() => onSelect(vehicle)}
                >
                    {isSelected ? 'Seleccionado' : 'Seleccionar'}
                </button>
            </div>
        </div>
    );
};

export default VehicleCard;

'use client';


import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Summary.module.css';

const Summary = () => {
    const { selectedVehicle } = useSelector((state: RootState) => state.booking);
    const { pickupDate, returnDate } = useSelector((state: RootState) => state.search);

    if (!selectedVehicle) {
        return null;
    }

    // TODO: manejar caso donde returnDate < pickupDate
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const days = diffDays > 0 ? diffDays : 1;

    const totalPrice = selectedVehicle.price * days;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Resumen de Reserva</h2>
            <div className={styles.details}>
                <div className={styles.row}>
                    <span>Vehículo:</span>
                    <strong>{selectedVehicle.name}</strong>
                </div>
                <div className={styles.row}>
                    <span>Duración:</span>
                    <strong>{days} días</strong>
                </div>
                <div className={styles.row}>
                    <span>Precio por día:</span>
                    <strong>${selectedVehicle.price}</strong>
                </div>
                <div className={`${styles.row} ${styles.total}`}>
                    <span>Total:</span>
                    <strong>${totalPrice}</strong>
                </div>
            </div>
            <button className={styles.checkoutButton}>
                Continuar al Pago
            </button>
        </div>
    );
};

export default Summary;

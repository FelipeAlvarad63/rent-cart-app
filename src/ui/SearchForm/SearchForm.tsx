'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchCriteria } from '../../features/search/searchSlice';
import { fetchVehicles } from '../../features/results/resultsSlice';
import { clearSelection } from '../../features/booking/bookingSlice';
import { AppDispatch } from '../../store/store';
import styles from './SearchForm.module.css';

const SearchForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [location, setLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!location || !pickupDate || !returnDate) {
            // TODO: mostrar mensaje de error en la UI en vez de alert
            alert('Por favor complete todos los campos');
            return;
        }

        dispatch(setSearchCriteria({ location, pickupDate, returnDate }));
        dispatch(clearSelection());
        dispatch(fetchVehicles());
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
                <label htmlFor="location" className={styles.label}>Ciudad o Aeropuerto</label>
                <input
                    id="location"
                    type="text"
                    className={styles.input}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ej: Madrid"
                />
            </div>
            <div className={styles.fieldGroup}>
                <label htmlFor="pickupDate" className={styles.label}>Fecha de Recogida</label>
                <input
                    id="pickupDate"
                    type="date"
                    className={styles.input}
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                />
            </div>
            <div className={styles.fieldGroup}>
                <label htmlFor="returnDate" className={styles.label}>Fecha de Devolución</label>
                <input
                    id="returnDate"
                    type="date"
                    className={styles.input}
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                />
            </div>
            <button type="submit" className={styles.button}>
                Buscar
            </button>
        </form>
    );
};

export default SearchForm;

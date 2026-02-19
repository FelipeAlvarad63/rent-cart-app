'use client'

import { fetchVehicles } from "@/features/results/resultsSlice";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { Vehicle } from "@/services/api";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/store/store";

export default function Home() {
  const vehicles = useSelector((state: RootState) => state.results.vehicles);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Encuentra tu vehículo ideal</h2>

      <div>
        {vehicles.map((vehicle: Vehicle) => (
          <div key={vehicle.id}>
            <h3>{vehicle.name}</h3>
            <p>{vehicle.price}</p>
            <img src={vehicle.image} alt={vehicle.name} />
          </div>
        ))}
      </div>

    </div>
  );
}

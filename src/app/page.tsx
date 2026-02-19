'use client'

import { RootState } from "@/store/store";
import { Vehicle } from "@/services/api";
import { useSelector } from "react-redux";
import SearchForm from "@/ui/SearchForm/SearchForm";

export default function Home() {
  const vehicles = useSelector((state: RootState) => state.results.vehicles);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Encuentra tu vehículo ideal</h2>

      <section>
        <SearchForm />
      </section>

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

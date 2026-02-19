'use client'

import { useSelector } from "react-redux";

export default function Home() {
  const test = useSelector((state: any) => state.test);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Encuentra tu vehículo ideal</h2>

      <p>{test}</p>
    </div>
  );
}

'use client'

import styles from "./page.module.css";
import SearchForm from "@/ui/SearchForm/SearchForm";
import VehicleList from "@/ui/VehicleList/VehicleList";
import Summary from "@/ui/Summary/Summary";

export default function Home() {
  return (
    <div className={styles.grid}>
      <div className={styles.mainColumn}>
        <section className={styles.searchSection}>
          <h2 className={styles.sectionTitle}>Encuentra tu vehículo ideal</h2>
          <SearchForm />
        </section>

        <section className={styles.resultsSection}>
          <VehicleList />
        </section>
      </div>

      <div className={styles.sidebar}>
        <Summary />
      </div>
    </div>
  );
}

"use client";

import { useState, useCallback, useRef } from "react";
import { services, type Service } from "./services";
import ServiceCard from "../ServiceCard";
import ServiceModal from "../ServiceModal";
import styles from "./ServiceGrid.module.css";

export default function ServicesGrid() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const openModal = useCallback((service: Service) => {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    setActiveService(service);
  }, []);

  const closeModal = useCallback(() => {
    setActiveService(null);
    // Return focus to the card that opened the modal
    lastFocusedRef.current?.focus();
  }, []);

  return (
    <>
      <ul className={styles.grid} aria-label="Tjenesteliste">
        {services.map((service) => (
          <li key={service.id} className={styles.item}>
            <ServiceCard service={service} onClick={openModal} />
          </li>
        ))}
      </ul>

      <ServiceModal service={activeService} onClose={closeModal} />
    </>
  );
}

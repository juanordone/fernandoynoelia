import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const targetDate = new Date("2023-07-15").getTime();
      const distance = targetDate - now;
      setCountdown(distance);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 fs-1">
      <div className="align-items-start text-center">
        <p>Faltan :</p>
        <p>
          {days} dias, {hours} horas, {minutes} minutos, {seconds} segundos
        </p>
      </div>
    </div>
  );
}

import styles from "./css/WeatherComponent.module.css";
import Every24Hours from "./Every24Hours";

export default function WeatherComponent({ data }) {
  if (!data) {
    return <p>Loading...</p>
  }

  const time = data.hourly.time;
  const chunkSize = 24;
  const chunks = [];
  const temp = data.hourly.temperature_2m;
  const temps = [];

  // Split time and temp data into chunks
  for (let i = 0; i < time.length; i += chunkSize) {
    chunks.push(time.slice(i, i + chunkSize));
    temps.push(temp.slice(i, i + chunkSize));
  }

  return (
    <div className={styles.placement}>
      {chunks.map((chunk, index) => (
        // Render container for every 24 items
        <div key={index} className={styles.day}>
          <h3>Day {index + 1}</h3>
          <Every24Hours chunk={chunk.map(timeInstance => timeInstance.slice(-5))} temps={temps[index]}/>
        </div>
      ))}
    </div>
  );
}
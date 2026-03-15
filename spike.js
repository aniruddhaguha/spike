function analyzeFluxEvents(transmission) {
  let count = 0;

  for (let i = 0; i < transmission.length; i++) {
    if (transmission[i] >= "A" && transmission[i] <= "Z") {
      count++;
    }
  }

  if (count > 0) {
    return `Detected ${count} high-voltage anomalies in signal stream.`;
  } else {
    return "Stream stable: no dominant flux events recorded.";
  }
}

const transmission = "a7XZtGeo9Bc";
console.log(analyzeFluxEvents(transmission));
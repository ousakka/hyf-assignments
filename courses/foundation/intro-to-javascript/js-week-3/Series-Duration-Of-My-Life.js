const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function seriesDurationPercentage(days, hours, minutes) {
  const myLifeDurationPerMinutes = 80 * 8760 * 60;
  const serieDurationPerMinutes = days * 24 + hours + minutes;
  return (serieDurationPerMinutes / myLifeDurationPerMinutes) * 100;
}

function showAllSeriesPercentage() {
  for (i = 0; i < seriesDurations.length; i++) {
    const seriePercentage = seriesDurationPercentage(
      seriesDurations[i].days,
      seriesDurations[i].hours,
      seriesDurations[i].minutes
    );
    console.log(
      seriesDurations[i].title + " took " + seriePercentage + " of my life"
    );
  }
}

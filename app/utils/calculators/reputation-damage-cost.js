function rhRevenueFromSlider(v) {
  var minLog = Math.log(100000),
    maxLog = Math.log(1000000000);
  return Math.exp(minLog + (v / 100) * (maxLog - minLog));
}
var rhIncidentRanges = {
  leak: { min: 0.5, max: 2.0, label: "Data breach", short: "Data breach" },
  reviews: { min: 3.0, max: 9.0, label: "Negative reviews", short: "Reviews" },
  media: {
    min: 5.0,
    max: 15.0,
    label: "Media scandal",
    short: "Media scandal",
  },
  fake: {
    min: 2.0,
    max: 8.0,
    label: "Fake news / disinformation",
    short: "Disinformation",
  },
  competitor: {
    min: 2.0,
    max: 6.0,
    label: "Competitor attacks",
    short: "Competitor attacks",
  },
};
var rhReachMultiplier = { local: 0.5, regional: 1.0, national: 1.8 };
var rhRecoveryRate = 0.25;
var rhPlanDiscount = 0.3;
function rhComputeTotal(revenue, incidentKey, reachKey, planState) {
  var incident = rhIncidentRanges[incidentKey];
  var reachMult = rhReachMultiplier[reachKey];
  var planMult = planState === "yes" ? 1 - rhPlanDiscount : 1;
  var directMin = revenue * (incident.min / 100) * reachMult * planMult;
  var directMax = revenue * (incident.max / 100) * reachMult * planMult;
  var recoveryMin = directMin * rhRecoveryRate;
  var recoveryMax = directMax * rhRecoveryRate;
  return {
    directMin: directMin,
    directMax: directMax,
    recoveryMin: recoveryMin,
    recoveryMax: recoveryMax,
    totalMin: directMin + recoveryMin,
    totalMax: directMax + recoveryMax,
  };
}
export {
  rhRevenueFromSlider,
  rhIncidentRanges,
  rhReachMultiplier,
  rhRecoveryRate,
  rhPlanDiscount,
  rhComputeTotal,
};

var rhRtIncidentRanges = {
  reviews: { min: 2, max: 6, label: "negative reviews" },
  leak: { min: 6, max: 14, label: "a data breach" },
  media: { min: 6, max: 18, label: "a media scandal" },
  crisis: { min: 24, max: 48, label: "a major public crisis" },
  fake: { min: 4, max: 12, label: "disinformation" },
  competitor: { min: 3, max: 9, label: "a competitor attack" },
};
var rhRtReachMult = { local: 0.6, regional: 1.0, national: 1.6 };
var rhRtActiveMult = { yes: 1.4, no: 1.0 };
var rhRtPositiveMult = { yes: 0.75, no: 1.0 };
var rhRtSizeMult = { small: 0.8, mid: 1.0, large: 1.3 };
export {
  rhRtIncidentRanges,
  rhRtReachMult,
  rhRtActiveMult,
  rhRtPositiveMult,
  rhRtSizeMult,
};

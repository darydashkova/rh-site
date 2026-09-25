function rhRiCalcEMV(mentions, impressions, cpm, negativePct, responseHours) {
  if (mentions <= 0 || impressions <= 0 || cpm <= 0) {
    return {
      baseEMV: 0,
      adjustedEMV: 0,
      capturedEMV: 0,
      lostEMV: 0,
      penalty: 0,
      sentMult: 0,
    };
  }

  var totalImpressions = mentions * impressions;
  var baseEMV = (totalImpressions / 1000) * cpm;

  // Sentiment multiplier:
  // 0% negative → sentMult = 1.0 (all positive weight)
  // mixed → positive bucket ×1.0, neutral bucket ×0.7, negative ×0.3
  var negPct = Math.max(0, Math.min(100, negativePct));
  var posPct = 100 - negPct;
  var neutralFromPos, purePct;
  if (negPct === 0) {
    neutralFromPos = 0;
    purePct = 100;
  } else {
    neutralFromPos = Math.min(20, posPct);
    purePct = Math.max(0, posPct - neutralFromPos);
  }
  var sentMult =
    (purePct / 100) * 1.0 + (neutralFromPos / 100) * 0.7 + (negPct / 100) * 0.3;
  sentMult = Math.max(0.3, Math.min(1.0, sentMult));
  var adjustedEMV = baseEMV * sentMult;

  // Response time penalty
  // Source: Sprout Social Index 2025 — 73% will buy from competitor without response;
  // 3 in 4 expect a reply within 24h. We model linearly from 0 to max 60% loss.
  var hrs = Math.max(0, responseHours);
  var penalty;
  if (hrs <= 2) penalty = 0;
  else if (hrs <= 24) penalty = ((hrs - 2) / 22) * 0.2;
  else if (hrs <= 72) penalty = 0.2 + ((hrs - 24) / 48) * 0.3;
  else penalty = 0.6;
  penalty = Math.max(0, Math.min(0.6, penalty));

  return {
    baseEMV: baseEMV,
    adjustedEMV: adjustedEMV,
    capturedEMV: adjustedEMV * (1 - penalty),
    lostEMV: adjustedEMV * penalty,
    penalty: penalty,
    sentMult: sentMult,
  };
}
export { rhRiCalcEMV };

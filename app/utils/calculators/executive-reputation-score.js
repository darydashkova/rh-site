function rhExCalc(hasSite, hasLinkedIn, mediaCount, hasNegative, position) {
  var s = hasSite ? 25 : 0;
  var l = hasLinkedIn ? 25 : 0;
  var m =
    mediaCount === 0 ? 0 : mediaCount === 1 ? 10 : mediaCount === 2 ? 20 : 30;
  var n = hasNegative ? -20 : 0;
  var p = position === "ceo" ? 20 : position === "board" ? 10 : 0;
  return {
    total: Math.max(0, Math.min(100, s + l + m + n + p)),
    siteScore: s,
    linkedInScore: l,
    mediaScore: m,
    negScore: n,
    posScore: p,
  };
}
export { rhExCalc };

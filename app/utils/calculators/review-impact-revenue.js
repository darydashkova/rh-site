function rhRiConversionMultiplier(rating) {
  if (rating >= 4.0 && rating <= 4.7) return 1.0; // sweet spot, Spiegel peak zone
  if (rating > 4.7) {
    // slight decline approaching 5.0, per Spiegel (perfect ratings reduce trust)
    var over = rating - 4.7;
    return 1.0 - (over / 0.3) * 0.04; // up to ~4% softer at 5.0
  }
  // below 4.0: each 0.1 below sweet spot reduces conversion, steeper below 3.7
  var gap = 4.0 - rating;
  var steps = gap / 0.1;
  var mult = 1.0;
  for (var i = 0; i < steps; i++) {
    var pointRating = 4.0 - i * 0.1;
    var stepPenalty = pointRating <= 3.7 ? 0.12 : 0.07; // steeper penalty below 3.7, reflecting Uberall's 3.5–3.7 inflection
    mult -= stepPenalty * mult;
  }
  return Math.max(mult, 0.25);
}
function rhRiReviewCountMultiplier(count) {
  if (count <= 0) return 1.0;
  var fiveReviewMultiplier = 3.7; // 270% greater = 3.7x baseline
  if (count <= 5) {
    return 1.0 + (fiveReviewMultiplier - 1.0) * (count / 5);
  }
  // beyond 5, diminishing returns toward a practical ceiling around 20-30 reviews
  var extra = (Math.log(count / 5 + 1) / Math.log(7)) * 0.5;
  return Math.min(fiveReviewMultiplier + extra, 4.3);
}
export { rhRiConversionMultiplier, rhRiReviewCountMultiplier };

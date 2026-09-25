function rhScCalc(owned, negatives, posOne, wikiPanel) {
  var ownedScore = Math.min(10, owned) * 5;
  var posOneScore = posOne ? 15 : 0;
  var wikiScore = wikiPanel ? 15 : 0;
  var negScore;
  if (negatives === 0) negScore = 20;
  else if (negatives === 1) negScore = 10;
  else if (negatives === 2) negScore = 5;
  else negScore = 0;
  var total = Math.max(
    0,
    Math.min(100, ownedScore + posOneScore + wikiScore + negScore),
  );
  return {
    total: total,
    ownedScore: ownedScore,
    posOneScore: posOneScore,
    wikiScore: wikiScore,
    negScore: negScore,
  };
}
export { rhScCalc };

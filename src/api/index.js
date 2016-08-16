const fakeDatabase = {
  rankings: [{
    sort: 0,
    year: 2012,
    rank: 30,
  }, {
    sort: 1,
    year: 2013,
    rank: 22,
  }, {
    sort: 2,
    year: 2014,
    rank: 16,
  }, {
    sort: 3,
    year: 2015,
    rank: 4,
  }, {
    sort: 4,
    year: 2016,
    rank: 10,
  }],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchRankings = () =>
  delay(500).then(() => fakeDatabase.rankings);

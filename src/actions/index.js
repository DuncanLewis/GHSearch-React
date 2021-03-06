import _ from 'lodash';
import axios from 'axios';

/*
 * action types
 */
export const SEARCH_REPOS = 'search_repos';
export const FETCH_REPO = 'fetch_repo';

/*
 * constants
 */
const ROOT_URL = 'https://api.github.com';
export const SortBy = {
  STARS: 'stars',
  FORKS: 'forks',
  UPDATED: 'updated',
};

/*
 * action creators
 */
export function searchRepos(query, sort = 'stars', order, page = '1') {
  // Build and send our request to the GH API using axios
  // For full API ref see: https://developer.github.com/v3/search/
  const request = axios.get(`${ROOT_URL}/search/repositories`, {
    params: {
      q: query,
      sort,
      order,
      page,
    },
  });

  return {
    type: SEARCH_REPOS,
    payload: request,
  };
}

export function fetchRepo(owner, repoName) {
  // Create the repo request root from which the rest of our requests are based
  const repoRequestRoot = `${ROOT_URL}/repos/${owner}/${repoName}`;

  // Use axios.all to send multiple requests at the same time
  const request = axios.all([
    axios.get(`${repoRequestRoot}`),
    axios.get(`${repoRequestRoot}/readme`, {
      headers: { Accept: 'application/vnd.github.v3.raw' },
    }),
    axios.get(`${repoRequestRoot}/stats/commit_activity`),
    axios.get(`${repoRequestRoot}/contributors`, {
      params: {
        per_page: 5, // Use paging to limit number of contributors we return for contributors
      },
    }),
    axios.get(`${repoRequestRoot}/pulls`),
  ]).then(axios.spread((repo, readme, commitActivity, contributors, pulls) => _.concat(repo, readme, commitActivity, contributors, pulls)));

  return {
    type: FETCH_REPO,
    payload: request,
  };
}

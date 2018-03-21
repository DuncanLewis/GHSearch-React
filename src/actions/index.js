import axios from 'axios';

const ROOT_URL = 'https://api.github.com';
export const SEARCH_REPOS = 'search_repos';
export const FETCH_REPO = 'fetch_repo';

export function searchRepos(query, sort = 'stars', order) {
  // Build and send our request to the GH API using axios
  // For full API ref see: https://developer.github.com/v3/search/
  const request = axios.get(`${ROOT_URL}/search/repositories`, {
    params: {
      q: query,
      sort,
      order,
    },
  });

  return {
    type: SEARCH_REPOS,
    payload: request,
  };
}

export function fetchRepo(id) {
  const request = axios.get(`${ROOT_URL}/repositories/${id}`);

  return {
    type: FETCH_REPO,
    payload: request,
  };
}

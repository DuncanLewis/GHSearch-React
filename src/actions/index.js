import axios from 'axios';

const ROOT_URL = 'https://api.github.com';
export const SEARCH_REPOS = 'search_repos';

export function searchRepos(query, sort, order) {
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

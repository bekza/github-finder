const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKRN = process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKRN}`,
    },
  });
  const { items } = await res.json();
  return items;
};

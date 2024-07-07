export const recentNewsApi = (article_id) => {
  const articleDetailUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${article_id}.json?api-key=q3zJBO5GclGQQE1iqPCdmZnCSAF4VmuK`;

  return fetch(articleDetailUrl, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data.results; // Assuming you want to return the first document/article
    })
    .catch((error) => {
      throw new Error(error); // Or handle the error appropriately
    });
};

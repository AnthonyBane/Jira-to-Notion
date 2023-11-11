var axios = require('axios');

//Gets all issues in a particular project using the Jira Cloud REST API
async function getIssues(auth, domain, jqlQuery) {

  try {

    const baseUrl = 'https://' + domain + '.atlassian.net';

    const config = {
      method: 'get',
      url: baseUrl + '/rest/api/2/search?jql=' + jqlQuery,
      headers: { 'Content-Type': 'application/json' },
      auth: auth
    };
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log('error: ')
    console.log(error.response.data.errors)
  }
}

module.exports = getIssues;
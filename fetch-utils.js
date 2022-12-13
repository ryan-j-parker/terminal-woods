const fetch = require('cross-fetch');

async function fetchRoom() {
  const response = await fetch(`${process.env.API_URL}/api/v1/roomOne`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',

    },
  });
  const data = await response.json();
  return data;
}

async function fetchUserItem() {
  const response = await fetch(`${process.env.API_URL}/api/v1/userItem`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',

    },
  });
  const data = await response.json();
  return data;
}

module.exports = { fetchRoom, fetchUserItem};
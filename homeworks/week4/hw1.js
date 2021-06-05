const request = require('request');
const baseURL = 'https://lidemy-book-store.herokuapp.com';

request(`${baseURL}/books?_limit=10`, (err, res, body) => {
  if (err) {
    return console.log('抓取資料失敗', err);
  }
  let books
  try {
    books = JSON.parse(body);
  } catch(err) {
    console.log(err);
    return
  }
  for (let i=0; i<books.length; i++) {
    console.log(`${books[i].id} ${books[i].name}`);
  }
})
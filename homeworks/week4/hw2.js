const request = require('request');
const args = process.argv; 
const baseURL = 'https://lidemy-book-store.herokuapp.com';

const action = args[2];
const params = args[3];

switch(action) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBook(params);
    break;
  case 'delete':
    deleteBook(params);
    break;
  case 'create':
    createBook(params);
    break;
  case 'update':
    updateBook(params, args[4]);
    break;
  default:
    console.log('Available commands: list, read, delete, create and update');
}

function listBooks() {
    request(`${baseURL}/books?_limit=20`, (err, res, body) => {
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
}

function readBook(id) {
  request(`${baseURL}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('抓取資料失敗', err);
    }
    let book;
    try{
        book = JSON.parse(body);
        console.log(book);
    }catch(err){
        console.log(err);
        return
    }

  })
}

function deleteBook(id) {
  request.delete(`${baseURL}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('刪除資料失敗', err);
    }
    console.log('刪除成功！');
  })
}

function createBook(name) {
  request.post({
    url: `${baseURL}/books`,
    form: {
      name
    }
  }, (err, res) => {
    if (err) {
      return console.log('新增資料失敗', err);
    }
    console.log('新增資料成功！');
  })
}

function updateBook(id, name) {
  request.patch({
    url: `${baseURL}/books/${id}`,
    form: {
      name
    }
  }, (err, res) => {
    if (err) {
      return console.log('更新資料失敗', err);
    }
    console.log('更新資料成功！');
  })
}
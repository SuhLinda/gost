class ApiOks{
  constructor(url) {
    this._url = url;
  }

  _checkTheAnswer(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`ошибка:${response.status}`);
  }

  getOks() {
    return fetch(`${this._url}/oks/`, {
      method: 'GET',
    })
      .then(this._checkTheAnswer);
  }

  searchOks(query) {
    return fetch(`${this._url}/query-oks`, {
      method: 'POST',
      body: JSON.stringify({ query }),
    })
      .then(this._checkTheAnswer);
  }

}

export const oksApi = new ApiOks('https://gostassistent.ru/api');

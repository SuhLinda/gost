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
    return fetch(this._url, {
      method: 'GET',
    })
      .then(this._checkTheAnswer);
  }
}

export const oksApi = new ApiOks('https://gostassistent.ru/api/oks');

import axios from "axios";

// HTTP HEADERS
export function setTokenHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

/*
エラーなどをフォーマットするaxiosのAPI呼び出しのラッパー
"method" 使用したいHTTP verd
"path" ルート／エンドポイント
"data" (オプション) POSTリクエスト用のJSON形式のデータ
*/
export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err.response.data.error);
      });
  });
}

import { parseString } from 'xml2js';


export default function () {

  const request = (req) => {

    req.headers.set('Accept', 'application/xml');
    req.headers.set('Content-Type', 'application/xml; charset=utf-8');

    return req;
  };

  const response = (res) =>
    new Promise((resolve, reject) => {
      res.text()
        .then((text) => {
          parseString(text, (error, result) => {

            if (error) {
              reject(error);
            }

            resolve(result);
          });
        })
        .catch((error) => {
          reject(error);
        });
    });

  return {
    request,
    response
  };
}

export default {

  request(req) {

    req.options.headers['Accept']       = 'application/json';
    req.options.headers['Content-Type'] = 'application/json; charset=utf-8';

    if (typeof req.options.body === 'object') {
      req.options.body = JSON.stringify(req.options.body);
    }
  },

  response(res) {

    return res.json().catch(error => {
      // JSON parse failed
      // If status is 204, assume there was no data
      if (res.status === 204) {
        return null;
      }

      throw error;
    });
  }
};
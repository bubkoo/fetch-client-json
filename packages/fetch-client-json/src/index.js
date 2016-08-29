function create() {

  const request = (req) => {

    req.headers.set('Accept', 'application/json');
    req.headers.set('Content-Type', 'application/json; charset=utf-8');

    return req;
  };

  const response = (res) =>
    res.json().catch((error) => {
      // If status is 204, assume there was no data
      if (res.status === 204) {
        return null;
      }

      throw error;
    });

  return {
    request,
    response
  };
}

export default create;
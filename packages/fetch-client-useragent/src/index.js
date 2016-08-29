const serialize = (userAgents) => {

  if (typeof userAgents !== 'object') {
    return userAgents;
  }

  return Object
    .keys(userAgents)
    .map((key) => [key, userAgents[key]].join('/').replace(/[\t\r\n\s]+/g, '-'))
    .join(' ');
};

export default function (userAgents) {

  if (userAgents) {

    const request = (req) => {

      req.headers.set('User-Agent', serialize(userAgents));

      return req;
    };

    return {
      request
    };
  }

  return null;
}

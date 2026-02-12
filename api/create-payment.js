let activeCodes = {};

export default function handler(req, res) {

  const code = Math.random().toString(36).substring(2,8).toUpperCase();

  activeCodes[code] = true;

  res.status(200).json({
    code: code
  });
}

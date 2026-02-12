let activeCodes = {};

export default function handler(req, res) {

  const { code } = req.query;

  if (!code || !activeCodes[code]) {
    return res.status(400).json({
      success: false
    });
  }

  delete activeCodes[code];

  return res.status(200).json({
    success: true,
    coins: 10
  });
}

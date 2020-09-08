module.exports = () => (req, res, next) => {
  if (req.body) {
    try {
      req.json = JSON.parse(req.body);
    } catch (e) {}
  }
  next();
}

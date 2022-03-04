async function addToFavorite(req, res) {
  res.send("add to fav");
}

async function removeFromFavorite(req, res) {
  res.send("remove from fav");
}

module.exports = { addToFavorite, removeFromFavorite };

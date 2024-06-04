const { fetchProvinces } = require('../../utils/provinces');

module.exports = async (req, res) => {
  try {
    const provinces = await fetchProvinces();
    res.render('authentication/register', { provinces });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

const fetchProvinces = async () => {
    try {
      const fetch = (await import('node-fetch')).default;
      const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre');
      const data = await response.json();
      return data.provincias;
    } catch (error) {
      console.error('Error fetching provinces:', error);
      throw new Error('Error fetching provinces');
    }
  };
  
  module.exports = async (req, res) => {
    try {
      const provinces = await fetchProvinces();
      res.render('authentication/register', { provinces });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  
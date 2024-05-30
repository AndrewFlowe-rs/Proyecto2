
module.exports = async (req, res) => {
    try {
      const fetch = (await import('node-fetch')).default;
      const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre');
      const data = await response.json();
      const provinces = data.provincias;  
  
      return res.render('authentication/register', { provinces });
    } catch (error) {
      console.error('Error fetching provinces:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  
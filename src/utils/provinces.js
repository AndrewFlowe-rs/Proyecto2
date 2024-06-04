const fs = require('fs');
const path = require('path');
const cacheFilePath = path.join(__dirname, 'provincesCache.json');

const CACHE_DURATION = 3600 * 1000; // 1 hora

const fetchProvinces = async () => {
  const now = Date.now();

  // Verifica si el archivo de caché existe
  if (fs.existsSync(cacheFilePath)) {
    const cacheData = JSON.parse(fs.readFileSync(cacheFilePath, 'utf-8'));
    if ((now - cacheData.timestamp) < CACHE_DURATION) {
      return cacheData.provinces;
    }
  }

  try {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
    const data = await response.json();

    // Guarda los datos en caché
    fs.writeFileSync(cacheFilePath, JSON.stringify({
      timestamp: now,
      provinces: data.provincias
    }), 'utf-8');

    return data.provincias;
  } catch (error) {
    console.error('Error fetching provinces:', error);
    throw new Error('Error fetching provinces');
  }
};

module.exports = {
  fetchProvinces
};

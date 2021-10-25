const diccionary = {
  Bodega: 'warehouse',
  Casa: 'singleHouse',
  CasaEnCondominio: 'condoHouse',
  Comprar: 'buy',
  Departamento: 'apartment',
  Desarrollo: 'develop',
  Edificio: 'building',
  Local: 'local',
  Oficina: 'office',
  Rentar: 'rent',
  Terreno: 'terrain',
  Traspasar: 'transfer',
  Vender: 'buy',
  apartment: 'Departamento',
  building: 'Edificio',
  buy: 'Comprar',
  condoHouse: 'CasaEnCondominio',
  develop: 'Desarrollo',
  local: 'Local',
  office: 'Oficina',
  rent: 'Rentar',
  singleHouse: 'Casa',
  terrain: 'Terreno',
  transfer: 'Traspasar',
  warehouse: 'Bodega',
};
const urlTranslator = keyname => {
  return diccionary[keyname] || keyname;
};

export default urlTranslator;

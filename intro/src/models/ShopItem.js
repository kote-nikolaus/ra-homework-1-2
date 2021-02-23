export default class ShopItem {
  constructor(entity) {
    Object.assign(this, {
      brand: 'unknown brand',
      title: '',
      description: '',
      descriptionFull: '',
      price: 0,
      currency: '£',
    }, entity);
  }
}

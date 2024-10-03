export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter for code
  get code() {
    if (typeof this._code !== 'string') {
      throw new TypeError('Currency code must be a string');
    } else {
      return this._code;
    }
  }

  // Getter for name
  get name() {
    if (typeof this._name !== 'string') {
      throw new TypeError('Currency name must be a string');
    } else {
      return this._name;
    }
  }

  // Setter for the code
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Currency code must be a string');
    } else {
      this._code = value;
    }
  }

  // Setter for the name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Currency name must be a string');
    } else {
      this._name = value;
    }
  }

  // Method to display the currency
  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }
}

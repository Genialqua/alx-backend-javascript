export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Method that must be overridden by subclasses
  evacuationWarningMessage() {
    if (this instanceof Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}

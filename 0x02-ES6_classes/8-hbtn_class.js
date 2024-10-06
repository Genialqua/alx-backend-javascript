export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // toString method to return the location
  toString() {
    return this._location;
  }

  // valueOf method to return the size
  valueOf() {
    return this._size;
  }
}

class AddressBookContact{

  constructor(name,phone,address,city,state,zip){
      this.name;
      this.phone;
      this.address;
      this.city;
      this.state;
      this.zip;
  }
  get name() {
      return this._name;
  }

  set name(name) {
      this._name = name;
  }

  get phone() {
      return this._phone;
  }

  set phone(phone) {
      this._phone = phone;
  }

  get address() {
      return this._address;
  }

  set address(address) {
      this._address = address;
  }

  get city() {
      return this._city;
  }

  set city(city) {
      this._city = city;
  }

  get state() {
      return this._state;
  }

  set state(state) {
      this._state = state;
  }

  get zip() {
      return this._zip;
  }

  set zip(zip) {
      this._zip = zip;
  }

  toString() {
      return 'Name = ' + this.name + ", Phone = " + this.phone + ", Address = " + this.address
          + ", City = " + this.city + ", State = " + this.state + ", Zip Code = " + this.zip;
  }
}
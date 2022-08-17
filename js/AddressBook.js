const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
const phoneNumberRegex = RegExp("^[+]{0,1}[0-9]{2}\\s{0,1}[0-9]{10}$");
const addressRegex = RegExp('^[a-zA-Z0-9#,&\\s]{4,}$');

class AddressBookContact {
  
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw "NAME is Invalid!";
    }
  }

  get phone() {
    return this._phone;
  }
  set phone(phone) {
    if (phoneNumberRegex.test(phone)) {
      this._phone = phone;
    } else {
      throw "PHONE NUMBER is Invalid!";
    }   
  }

  get address() {
    return this._address;
  }
  set address(address) {
    if (addressRegex.test(address)) {
      this._address = address;
    } else {
      throw "ADDRESS is Invalid!";
    }
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

  toString(){
      return `id ${this.id} \nName ${this.name} \nPhone Number ${this.phone} \nAddress ${this.address} \nCity ${this.city} \nState ${this.state} \nZip  ${this.zip}`;
  }

}
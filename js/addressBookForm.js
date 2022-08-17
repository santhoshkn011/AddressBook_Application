let isUpdate = false;
let AdderessBookObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
    validateName();
    Phonenumber();
    Address();
    Zipcode();
    checkForUpdate();
});
function validateName() {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.name-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            console.error(e);
            textError.textContent = e;
        }
    });
}
function Phonenumber() {
    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phone.addEventListener('input', function () {
        if (phone.value.length == 0) {
            phoneError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).phone = phone.value;
            phoneError.textContent = "";
        } catch (e) {
            console.error(e);
            phoneError.textContent = e;
        }
    });
}
function Address() {
    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            addressError.textContent = "";
            return; // alert("Added Sucedssfully");
        }
        try {
            (new AddressBook()).address = address.value;
            addressError.textContent = "";
        } catch (e) {
            console.error(e);
            addressError.textContent = e;
        }
    });
}
function Zipcode() {
    const zipcode = document.querySelector('#zip');
    const zipcodeError = document.querySelector('.zip-error');
    zipcode.addEventListener('input', function () {
        if (zipcode.value.length == 0) {
            zipcodeError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).zip = zip.value;
            zipcodeError.textContent = "";
        } catch (e) {
            console.error(e);
            zipcodeError.textContent = e;
        }
    });
}

const save = () => {
    try {
        alert("Save");
        setAddressBookObject();
        updateLocalStorage();
        resetForm();
        window.location.replace(site_properties.home_page);
    } catch (e) {
        alert(e);
        resetForm();
        return;
    }
}

function createAndUpdateStorage(addressBookData) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList != undefined) {
        addressBookList.push(addressBookData);
    } else {
        addressBookList = [addressBookData]
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList))
}

const createAddressBook = (id) => {
  let adrBookData = new AddressBook();
  if (!id) adrBookData._id = createNewAddId();
  else adrBookData._id = id;
  setAddressBookData(adrBookData);
  return adrBookData;
}

const setAddressBookData = (adrBookData) => {
  adrBookData.name = AdderessBookObj._name;
  adrBookData.address = AdderessBookObj._address;
  adrBookData.city = AdderessBookObj._city;
  adrBookData.state = AdderessBookObj._state;
  adrBookData.zip = AdderessBookObj._zip;
  adrBookData.phone = AdderessBookObj._phone;
  alert("Person Details Added Successfully!\n" + adrBookData.toString());
}

const setTextContent = (propertyId, value) => {
  const contentElement = document.querySelector(propertyId);
  contentElement.textContent = value;
};

const setAddressBookObject = () => {
  AdderessBookObj._name= getValue("#name");
  AdderessBookObj._address= getValue("#address");
  AdderessBookObj._city= getValue("#city");
  AdderessBookObj._state= getValue("#state");
  AdderessBookObj._zip= getValue("#zip");
  AdderessBookObj._phone= getValue("#phone");
}

const getValue = (propertyId) => {
  let value = document.querySelector(propertyId).value;
  return value;
};

const updateLocalStorage = () =>{
  let addrBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addrBookList) {
        let addrBookData = addrBookList.find(addrData => addrData._id == AdderessBookObj._id);
        if (!addrBookData) {
            addrBookList.push(createAddressBook());
        } else {
            const index = addrBookList.map(addrData => addrData._id).indexOf(addrBookData._id);
            addrBookList.splice(index, 1, createAddressBook(addrBookData._id));
        }
    } else {
        addrBookList = [createAddressBook()];
    }

    alert("Updated Successfully!\nTotal Persons : " + addrBookList.length);
    localStorage.setItem("AddressBookList", JSON.stringify(addrBookList));
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

const createNewAddId = () => {
    let addrId = localStorage.getItem('AddressBookID');
    addrId = !addrId ? 1 : (parseInt(addrId) + 1);
    localStorage.setItem('AddressBookID', addrId);
    return addrId;
}

const resetForm = () => {
    setValue('#name', '');
    setValue('#phone', '');
    setValue('#address', '');
    setValue('#city', '');
    setValue('#state', '');
    setValue('#zip', '');
}


const checkForUpdate = () => {
    const addressBookJSON = localStorage.getItem('editAddr');
    isUpdate = addressBookJSON ? true : false;
    if(!isUpdate) return;
    AdderessBookObj = JSON.parse(addressBookJSON);
    setForm();
}

const setForm = () => {
    setValue('#name',AdderessBookObj._name);
    setValue('#address',AdderessBookObj._address);
    setValue('#city',AdderessBookObj._city);
    setValue('#state',AdderessBookObj._state);
    setValue('#phone',AdderessBookObj._phone);
    setValue('#zip',AdderessBookObj._zip);
}

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id); element.textContent = value;
}

const setSelectedIndex = (id, index) => {
    const element = document.querySelector(id);
    element.selectedIndex = index;  
}

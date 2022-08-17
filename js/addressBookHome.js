let addrBookList;
window.addEventListener('DOMContentLoaded', (event) => {
    addrBookList = getAddressBookDataFromStorage();
    document.querySelector(".per-count").textContent = addrBookList.length;
    createInnerHtml();
});

getAddressBookDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ? 
                    JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHtml = () => {
    if (addrBookList.length == 0) return;
    const headerHtml = "<tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th>" +
        "<th>Zip Code</th><th>Phone Number</th><th>Options</th></tr>";
    let innerHtml = `${headerHtml}`;
    for (let addrBookData of addrBookList) {
        innerHtml = `${innerHtml}
            <tr>
                <td>${addrBookData._name}</td>
                <td>${addrBookData._address}</td>
                <td>${addrBookData._city}</td>
                <td>${addrBookData._state}</td>
                <td>${addrBookData._zip}</td>
                <td>${addrBookData._phone}</td>
                <td>
                    <img id="${addrBookData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                    <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
                </td>
            </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const remove = (node) => {
    let addrAddressData = addrBookList.find(addrData => addrData._id == node.id);
   if(!addrAddressData) return;
    const index = addrBookList 
                    .map(addrData => addrData._id)
                    .indexOf(addrAddressData._id);
                    addrBookList.splice(index, 1);
    localStorage.setItem('AddressBookList', JSON.stringify(addrBookList));
    document.querySelector('.per-count').textContent = addrBookList.length;
    createInnerHtml();
}
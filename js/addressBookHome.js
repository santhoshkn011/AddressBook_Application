window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const HeaderHtml = "<tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th>" +
    "<th>Zip Code</th><th>Phone Number</th><th>Options</th></tr>";
    const innerHtml = `${HeaderHtml}   
                <tr>
                    <td>Santhosh Kumar Nayak</td>
                    <td>123 34 Steet number 8</td>
                    <td>Hyderabad</td>
                    <td>Telangana</td>
                    <td>500013</td>
                    <td>+91 9999988888</td>
                    <td>
                        <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                        <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
                    </td>
                </tr>
                `;
    document.querySelector('#display').innerHTML = innerHtml;
}
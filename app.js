const contactList = document.getElementById("contact-list")

function addContact() {
    const name = document.getElementById("contact-name").value
    const phone = document.getElementById("contact-phone").value

    if (name === "" || phone === "") {
        alert("Du behäver fylla i både namn och telefonnummer!")
        return;
    }

    const contactItem = document.createElement("div")
    contactItem.classList.add("contact-item")

    const nameField = document.createElement("input")
    nameField.type = "text"
    nameField.value = name
    nameField.disabled = true

    const phoneField = document.createElement("input")
    phoneField.type = "text"
    phoneField.value = phone
    phoneField.disabled = true

    const editButton = document.createElement("button")
    editButton.textContent = "Ändra"
    editButton.onclick = () => toggleEditContact(nameField, phoneField, editButton)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Radera"
    deleteButton.onclick = () => contactList.removeChild(contactItem)

    contactItem.appendChild(nameField)
    contactItem.appendChild(phoneField)
    contactItem.appendChild(editButton)
    contactItem.appendChild(deleteButton)

    contactList.appendChild(contactItem);

    document.getElementById("contact-name").value = ""
    document.getElementById("contact-phone").value = ""
}

function toggleEditContact(nameField, phoneField, editButton) {
    if (nameField.disabled && phoneField.disabled) {
        nameField.disabled = false
        phoneField.disabled = false
        editButton.textContent = "Spara"
    } else {
        nameField.disabled = true
        phoneField.disabled = true
        editButton.textContent = "Ändra"
    }
}
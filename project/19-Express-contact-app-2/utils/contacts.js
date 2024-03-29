const fs = require("fs");

const chalk = require("chalk")
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// membuat folder data
const dirPath = "./data"
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

// membuat file data
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, "[]", "utf-8")
}

// ambil semua data di contact.json
const loadContact = () => {
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    return contacts
}

// cari kontak berdasarkan nama
const findContact = (nama) => {
    const contacts = loadContact()
    const contact = contacts.find(contact => contact.nama.toLowerCase() === nama.toLowerCase())
    return contact
}

// menimpa contacts.json dengan file yang baru
const saveContacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

// menambahkan kontak baru
const addContact = (contact) => {
    const contacts = loadContact();
    contacts.push(contact)
    saveContacts(contacts)
}

// cek nama yang duplikat
const cekDuplikat = (nama) => {
    const contacts = loadContact()
    return contacts.find(contact => contact.nama === nama)
}

// menghapus kontak
const deleteContact = (nama) => {
    const contacts = loadContact()
    const filteredContacts = contacts.filter((contact) => contact.nama !== nama)

    saveContacts(filteredContacts)
}

// mengubah kontak
const updateContacts = (contactBaru) => {
    const contacts = loadContact();
    // hilangkan kontak lama yang namanya sama dengan oldNama
    const filteredContacts = contacts.filter((contact) => contact.nama !== contactBaru.oldNama)
    delete contactBaru.oldNama;
    filteredContacts.push(contactBaru)
    saveContacts(filteredContacts)
}


module.exports = { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts }

const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const { body, validationResult, check } = require('express-validator');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash');
const { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts } = require("./utils/contacts")

const app = express()
const port = 3000

// menggunakan ejs
app.set("view engine", "ejs")
// menggunakan express ejs layout
app.use(expressLayouts);

// built-in middleware
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true })) // to support URL-encoded bodies

// konfigurasi flash
app.use(cookieParser('secret'));
app.use(
    session({
        cookie: { maxAge: 6000 },
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
)
app.use(flash())

app.get('/', (req, res) => {

    const mahasiswa = [
        {
            nama: "Muhammad Fadll",
            nim: "20202020"
        },
        {
            nama: "vernando",
            nim: "20233330"
        },
        {
            nama: "daffa",
            nim: "20234550"
        }
    ]
    // const mahasiswa = []
    res.render("index", { title: "Muhammad Fadll", layout: "layouts/main-layout", mahasiswa })
})



app.get('/about', (req, res) => {
    const data = {
        title: "about page",
        layout: "layouts/main-layout"
    }
    res.render("about", data)


})


app.get('/contact', (req, res) => {
    const contacts = loadContact()

    const data = {
        title: "kontak page",
        layout: "layouts/main-layout",
        contacts,
        msg: req.flash('msg')
    }
    res.render("contact", data)
})

app.get('/contact/add', (req, res) => {

    res.render('add-contact', {
        title: "Form tambah data kontak",
        layout: "layouts/main-layout"
    })
})

app.post('/contact', [
    body('nama').custom(value => {
        const duplikat = cekDuplikat(value)
        if (duplikat) {
            throw new Error('Nama kontak sudah ada');
        }
        return true
    }),
    check('email', 'Email tidak valid').isEmail(),
    check('nohp', 'no HP tidak valid').isMobilePhone("id-ID")],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // return res.status(400).json({ errors: errors.array() });
            res.render('add-contact', {
                title: 'Form tambah data kontak',
                layout: 'layouts/main-layout',
                errors: errors.array()
            })
        }
        else {
            addContact(req.body)
            req.flash('msg', 'Kontak berhasil ditambahkan')
            res.redirect('/contact')

        }
    })



app.get('/contact/delete/:nama', (req, res) => {
    const contact = findContact(req.params.nama)

    if (!contact) {
        res.send("404")
    } else {
        deleteContact(contact.nama)
        req.flash('msg', 'Kontak berhasil dihapus')
        res.redirect('/contact/')
    }
})

// halaman form ubah data kontak
app.get('/contact/edit/:nama', (req, res) => {
    const contact = findContact(req.params.nama)
    res.render('edit-contact', {
        title: "Form tambah data kontak",
        layout: "layouts/main-layout",
        contact
    })
})



app.get('/contact/:nama', (req, res) => {
    const contact = findContact(req.params.nama)

    const data = {
        title: "kontak page",
        layout: "layouts/main-layout",
        contact
    }
    res.render("detail", data)
})

// proses ubah data 
app.post('/contact/update', [
    body('nama').custom((value, { req }) => {
        const duplikat = cekDuplikat(value)
        if (value !== req.body.oldNama && duplikat) {
            throw new Error('Nama kontak sudah ada');
        }
        return true
    }),
    check('email', 'Email tidak valid').isEmail(),
    check('nohp', 'no HP tidak valid').isMobilePhone("id-ID")],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // return res.status(400).json({ errors: errors.array() });
            res.render('edit-contact', {
                title: 'Form ubah data kontak',
                layout: 'layouts/main-layout',
                errors: errors.array(),
                contact: req.body
            })
        }
        else {

            updateContacts(req.body)
            req.flash('msg', 'Kontak berhasil diubah')
            res.redirect('/contact')

        }
    })


app.use('/', (req, res) => {
    res.send('404')
})

app.listen(port, () => {
    console.log(`Example app sedang listen port ${port}`)
})




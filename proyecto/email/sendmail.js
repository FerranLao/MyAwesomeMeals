const transporter = require('./transport');
const fs = require("fs");
const path = require("path");
const hbs = require("handlebars")

const templateFile = path.join(__dirname,'./templates/template.html')
const htmlstr=fs.readFileSync(templateFile).toString();
const template = hbs.compile(htmlstr)

const sendMail = (to, id) => {
    return transporter.sendMail({
      from:'MyAwesomeMeals@gmail.com',
      to, 
      subject: "Account confirmation (MyAwesomeMeals)",
      text: "pepe",
      html: template({
          id:id,
          route:"localhost:3000"
      })
    })
    .then(info => console.log(info)).catch(e=>console.log(e))
  }

module.exports = sendMail
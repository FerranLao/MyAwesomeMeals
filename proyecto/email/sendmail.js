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
      text: "Confirmation",
      html:template({
          id:id,
          route:"http://localhost:3000"
      })
    })
    .then(info => console.log(info)).catch(e=>console.log(e))
  }

  const recoveryMail = (to, id) => {
    return transporter.sendMail({
      from:'MyAwesomeMeals@gmail.com',
      to, 
      subject: "Recovery email (MyAwesomeMeals)",
      text: "Recover",
      html:`<a href="http://localhost:3000/auth/recover/${id}">Recover</a>`
    })
    .then(info => console.log(info)).catch(e=>console.log(e))
  }
module.exports = {sendMail,recoveryMail}
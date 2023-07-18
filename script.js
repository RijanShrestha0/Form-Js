const body = document.querySelector("body")
const form = document.createElement("form")

const h1 = document.createElement("h1")
h1.textContent ='Fill the form'
form.appendChild(h1)
body.appendChild(form)

const outer = document.createElement("div")
form.appendChild(outer)

const div = document.createElement("div")
outer.appendChild(div)

const text1 = document.createElement("a")
text1.textContent = "Name"
div.appendChild(text1)

text1.style.cssText=`
margin: 20px 25px 0;
display:inline-block;
font-weight: bolder;
font-size: 10px;
`
const input = document.createElement("input")
div.appendChild(input)
input.setAttribute("placeholder", "First Name")
// var x = document.getElementsByTagName("input").required;
// input.setAttribute("x")


const input1 = document.createElement("input")
div.appendChild(input1)
input1.setAttribute("placeholder", "Last Name")

const contact = document.createElement("div")
form.appendChild(contact)

const em = document.createElement("a")
em.textContent="Contact"
contact.appendChild(em)
const mail = document.createElement("input")
mail.setAttribute("placeholder", "E-mail")
contact.appendChild(mail)
const ph = document.createElement("input")
ph.setAttribute("placeholder", "Phone Number")
contact.appendChild(ph)

const bth = document.createElement("div")
form.appendChild(bth)

const text3 = document.createElement("a")
text3.textContent = "Date Of Birth"
text3.setAttribute("style", "display: inline-block;")
bth.appendChild(text3)

const select = document.createElement("select")
bth.appendChild(select)

const options = document.createElement("option")
options.textContent = "January"
select.appendChild(options)

const options1 = document.createElement("option")
options1.textContent = "February"
select.appendChild(options1)

const options2 = document.createElement("option")
options2.textContent = "March"
select.appendChild(options2)

const options3 = document.createElement("option")
options3.textContent = "April"
select.appendChild(options3)

const options4 = document.createElement("option")
options4.textContent = "May"
select.appendChild(options4)

const options5 = document.createElement("option")
options5.textContent = "june"
select.appendChild(options5)

const options6 = document.createElement("option")
options6.textContent = "july"
select.appendChild(options6)

const options7 = document.createElement("option")
options7.textContent = "August"
select.appendChild(options7)

const options8 = document.createElement("option")
options8.textContent = "September"
select.appendChild(options8)

const options9 = document.createElement("option")
options9.textContent = "October"
select.appendChild(options9)

const options10 = document.createElement("option")
options10.textContent = "November"
select.appendChild(options10)

const options11 = document.createElement("option")
options11.textContent = "December"
select.appendChild(options11)

const select1= document.createElement("select")
bth.appendChild(select1)

for(let j = 1; j<=31; j++){
    const option1 = document.createElement("option")
    option1.textContent = `${j}`
    select1.appendChild(option1)
}

const select2= document.createElement("select")
bth.appendChild(select2)

for(let j = 2023; j>=1990; j--){
    const option2 = document.createElement("option")
    option2.textContent = `${j}`
    select2.appendChild(option2)
}

const gender = document.createElement("div")
form.appendChild(gender)
const gen = document.createElement("a")
gen.textContent="Gender"
gender.appendChild(gen)

const male = document.createElement("label")
male.textContent="Male"
gender.appendChild(male)

const maler = document.createElement("input")
maler.setAttribute("type", "radio")
maler.setAttribute("name", "Male")
male.appendChild(maler)

const female = document.createElement("label")
female.textContent="Female"
gender.appendChild(female)

const fmaler = document.createElement("input")
fmaler.setAttribute("type", "radio")
fmaler.setAttribute("name", "Male")
female.appendChild(fmaler)

const other = document.createElement("label")
other.textContent="Other"
gender.appendChild(other)

const oth = document.createElement("input")
oth.setAttribute("type", "radio")
oth.setAttribute("name", "Male")
other.appendChild(oth)

const agree = document.createElement("div")
form.appendChild(agree)
agree.setAttribute("style", "margin: 5px 25px;")
const box = document.createElement("input")
box.setAttribute("type", "checkbox")
agree.appendChild(box)
const check = document.createElement("a")
check.textContent="I agree every terms and conditions."
agree.appendChild(check)

agree.style.cssText=`
color:gray;
font-size: 12px;
margin: 5px 25px;
display:flex;
align-items:center;
`


const btn = document.createElement("button")
btn.textContent="SUBMIT"
form.appendChild(btn)

btn.addEventListener("click", function() {
    alert("submitted ")
});
btn.addEventListener("mouseenter", function(){
btn.style.backgroundColor = "orangered"
btn.style.color = "white"
});
btn.addEventListener("mouseout", function(){
    btn.style.backgroundColor = "rgba(255, 68, 0, 0.548)"
    btn.style.color = "black"
});

btn.style.cssText=`
display:flex;
margin: 20px auto 5px;
padding: 10px 30px;
font-family: 'Courier New', Courier, monospace;
font-weight: bolder;
font-size: 20px;
background: rgba(255, 68, 0, 0.548);
color: black;
border: none;
border-radius: 5px;
box-shadow: 3px 5px rgba(54, 54, 54, 0.541);
`
male.style.cssText=`
padding: 5px;
padding-left: 15px;
margin: 5px 23px;
border: 2px solid lightgrey;
border-radius: 5px;
grid-row: 2/3;
`
maler.style.cssText=`
margin-left: 23px;
`
female.style.cssText=`
padding: 5px;
padding-left: 13px;
margin: 5px 23px;
border: 2px solid lightgrey;
border-radius: 5px;
grid-row: 2/3;
`
fmaler.style.cssText=`
margin-left: 12px;
`
other.style.cssText=`
padding: 5px;
padding-left: 13px;
margin: 5px 23px;
border: 2px solid lightgrey;
border-radius: 5px;
grid-row: 2/3;
`
oth.style.cssText=`
margin-left: 20px;
`
body.style.cssText=`
margin: 0;
background:  rgba(179, 179, 179, 0.350);
display:flex;
justify-content: center;
align-items: center;
`
h1.style.cssText=`
text-align:center;
padding: 15px;
margin:0;
margin-bottom: 10px;
font-family: 'Courier New', Courier, monospace;
background: #333;
color: orangered;
border-radius: 5px 5px 0 0;
`
form.style.cssText=`
margin: 10vh 25vw;
background: white;
padding: 0 0 30px;
width: 450px;
border-radius: 8px;
border: 2px solid rgba(255, 68, 0, 0.548);
box-shadow: 5px 10px rgba(54, 54, 54, 0.541);
`
select.style.cssText=`
margin: 5px 23px;
padding: 5px;
border-radius: 5px;
border: 2px solid lightgray;
grid-row: 2/3;
`
select1.style.cssText=`
margin: 5px 23px;
padding: 5px;
border-radius: 5px;
border: 2px solid lightgray;
grid-row:2/3;
`
select2.style.cssText=`
margin: 5px 23px;
padding: 5px;
border-radius: 5px;
border: 2px solid lightgray;
grid-row:2/3;   
`
div.style.cssText=`
display: grid;
margin: 0 5px;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(3, 1fr);
`
contact.style.cssText=`
display: grid;
margin: 0 25px;
grid-template-rows: repeat(3, 1fr);
grid-template-columns: repeat(2, 1fr);
`
em.style.cssText=`
margin: 20px 5px 0;
display:inline-block;
font-weight: bolder;
font-size: 10px;
`
mail.style.cssText=`
padding: 5px;
padding-left: 13px;
margin:5px;
border: 2px solid lightgrey;
border-radius: 5px;
grid-row: 2/3;
grid-column: 1/3;
`
ph.style.cssText=`
padding: 5px;
padding-left: 13px;
margin:5px;
border: 2px solid lightgrey;
border-radius: 5px;
grid-row: 3/4;
grid-column: 1/3;
`
bth.style.cssText=`
display:grid;
margin: 0 5px;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(3, 1fr);
`
input.style.cssText=`
padding: 5px;
padding-left: 13px;
margin: 5px 1px 5px 23px;
border: 2px solid lightgrey;
border-radius: 5px;
grid-row: 2/3;
`
input1.style.cssText=`
padding: 5px;
padding-left: 13px;
margin: 5px 23px 5px 1px;
border: 2px solid lightgrey;
border-radius: 5px;
grid-row: 2/3;
`
text3.style.cssText=`
margin: 20px 25px 0;
display:inline-block;
font-weight: bolder;
font-size: 10px;
`
gender.style.cssText=`
display:grid;
margin: 0 5px;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(3, 1fr);
`
gen.style.cssText=`
margin: 20px 25px 0;
display:inline-block;
font-weight: bolder;
font-size: 10px;
`
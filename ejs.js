const express = require('express');
const app = express();
const BLOG = require("./views/database.js");

app.listen(3000);


app.set('view engine' , 'ejs');
app.set('views', __dirname + '/views');

app.get('/' , (req , res)=>{
	res.render('index' ,  {title : 'home'});
})

app.get('/gpage2' , (req , res)=>{
	const content = {title : ' page2' , snipet: 'you can contact me!'}
	res.status(200).render('Page2' , content)
})


app.get('/mpr' , (req , res)=>{
	res.status(200).render('m_project' ,  {title : 'my projects'})
})


app.get('/mp' , (req , res)=>{
	res.status(200).render('m_profile' ,  {title : 'know me'})
})


// app.get('/page20' , (req , res)=>{
// 	res.redirect('./page2/page2.html')
// })

app.get('/contactme' , (req , res)=>{
	res.status(200).render('contact-me' , {title:'contact' })
})

app.get('/projectR' , (req , res)=>{
	res.status(200).render('pregister' , {title : 'register-the-project'})
})

app.use(express.urlencoded({extended:true}))


app.post('/blog' , (req , res) => {
	const b = new BLOG(
		req.body
		)
	b.save()
	.then((resault) => res.redirect('contactme'))
	.catch((err) => console.log(err))
})


app.post('/savep' , (req , res)=>{
	const b2 = new BLOG(
		req.body
	)

	b2.save()
	.then((resault)=> {
		res.redirect('mpr')})
	.catch((err)=>(err))
})



app.use((req , res)=>{
	res.status(200).render('4_0_4_page' ,  {title : 'oops!'})
})
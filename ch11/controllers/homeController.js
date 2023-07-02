
const homeController = (req, res)=>{
 res.render('index', {'name': 'Ben'}) //passing the variables
}

export {homeController};
const homeController = (req, res)=>{
    const data = {
        'name': 'harsh',
        'branch': 'csd',
        'id': '0901CD211028',
        'marks': [23,32,73,23,4214,42]
    }
    res.render('index', data)
}
export {homeController};
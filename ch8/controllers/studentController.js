const allStudent = (req, res)=>{
    res.send('All student')
}

const deleteStudent = (req, res)=>{
    console.log(req.params);
    const {id} = req.params;
    console.log(id);
    if(id == 10){
        res.send('Id of sonam so cannot delete')
    }
    else{
        res.send(`student delete ${id}`);
    }
}
export {allStudent, deleteStudent}; //using es6
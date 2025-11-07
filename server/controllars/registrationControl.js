const registrationControl = (req, res) => {
    const {userName, email, password} = req.body;

    if(!userName){
        res.status(404).send({Message: "Please Enter your userName"})
    }else if(!email){
        res.status(404).send({Message: "Please Enter your email"})
    }else if(!password){
        res.status(404).send({Message: "Please Enter your password"})
    }else{
        res.status(202).send({Message: `${userName} your profile created SUCCESSFULLY`})
    }
}

module.exports = registrationControl
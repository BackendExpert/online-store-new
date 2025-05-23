const User = require("../model/User");
const bcrypt = require('bcrypt');
const UserActivity = require("../model/UserActivity");

const authController = {
    signup: async (req, res) => {
        try {
            const {
                username,
                email,
                password
            } = req.body

            // check user is in db
            const checkuser = await User.find(
                {
                    $or: [
                        { username: username },
                        { email: email },
                    ]
                }
            )

            if(checkuser){
                return res.json({ Error: "User Already Exists"})
            }

            // hash password

            const hashpass = await bcrypt.hash(password, 10)

            // add data to db

            const newUser = new User({
                username: username,
                email: email,
                password: hashpass
            })

            const resultNewUser = await newUser.save()

            // add recode to UserActivity

            const newUserActivity = new UserActivity({
                email: email,
                activity: "User Regisation"
            })

            const resultNewUserActivity = await newUserActivity.save()

            if(resultNewUserActivity){
                return res.json({ Status: "Success", Message: "User Registation Success, verfy your email now"})
            }
            else{
                return res.json({ Error: "Internal Server Errror"})
            }

        }
        catch (err) {
            console.log(err)
        }
    }
};

module.exports = authController;
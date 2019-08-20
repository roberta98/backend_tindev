const Dev = require('../models/Dev');

module.exports = {

    async store(req, res){

        const { user } = req.headers; //quem deu o like
        const { devId } = req.params; //pra quem se deu o like
       
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev) {
            return res.status(400).json({error : 'Dev not exists'})
        }

        loggedDev.dislikes.push(targetDev._id); 
        await loggedDev.save();
        
        return res.json(loggedDev)

    }
} 
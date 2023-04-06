const mongoose = require('mongoose');

const devURI=`mongodb+srv://tester:sonic_tool@cluster0.mwgyziz.mongodb.net/ImageGallery?retryWrites=true&w=majority`

module.exports = () => {
  mongoose.connect(process.env.MONGODB_URI || devURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
   
}
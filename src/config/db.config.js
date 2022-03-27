const mongoose = require("mongoose");

const dbConnection = () => {
  try {
    mongoose.connect(process.env.DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MondoDB Atlas')
  } catch (error) {
    throw new Error('Error when init database');
  }
};

module.exports = {
  dbConnection,
};

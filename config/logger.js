const { createLogger, transports, format } = require("winston");
require("winston-mongodb").MongoDB;

const logger = createLogger({
  transports: [
    new transports.MongoDB({
      level: "info",
      db: "mongodb+srv://sovanndev:55557777@cluster0.xp3wr.mongodb.net/UranusQ",
      options: {
        useUnifiedTopology: true,
      },
      collection: "userlog",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;

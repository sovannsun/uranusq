const { createLogger, transports, format } = require("winston");
require("winston-mongodb").MongoDB;

const logger = createLogger({
  transports: [
    new transports.MongoDB({
      level: "info",
      db: "mongodb://localhost:27017/UranusQ",
      options: {
        useUnifiedTopology: true,
      },
      collection: "UserLog",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;

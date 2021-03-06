const Sequelize = require("sequelize");
// const { QueryTypes } = require("sequelize");
const path = require("path");

function getUserHome() {
  return process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
}

const mergedDatabse = path.resolve(getUserHome(), "download_music.db");
const sequelize = new Sequelize("main", null, null, {
  dialect: "sqlite",
  storage: mergedDatabse,
  logging: false,
});

const Song = sequelize.define(
  "song",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      _autoGenerated: true,
    },
    song_id: Sequelize.INTEGER,
    song_name: Sequelize.STRING,
    raw: Sequelize.STRING,
    album_name: Sequelize.STRING,
    artist_name: Sequelize.STRING,
    album_logo: Sequelize.STRING,
    artist_logo: Sequelize.STRING,
    status: Sequelize.INTEGER,
    local_file: Sequelize.STRING,
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["song_id"],
      },
    ],
  }
);
// console.log(path.resolve(getUserHome(), "allmusic.db"));

module.exports = {
  sequelize,
  Song,
};

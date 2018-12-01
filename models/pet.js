module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define("Pet", {
    id: {//our id
      type: DataTypes.INTEGER,
      primaryKey: false
  },
  petName: {//satus from etsy
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [1]
    }
  },
  petSize: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a product from being entered if it doesn't
      // have a title value
      allowNull: true,
      // len is a validation that checks that our product is between 1 and 140 characters
      validate: {
        len: [1]
      }
    },
    petBreed: {//may cause an issue but capture
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    user_ID: {//capture price
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    complete: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new products complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  return Pet;
};
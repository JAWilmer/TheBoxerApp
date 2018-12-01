// create table boxers.itemsSold(
//     itemsSold_ID int not null auto_increment PRIMARY KEY, -- dynamically created
//     listing_ID int, -- from etsy (prodcuts that were sold)
//         user_ID int, -- from firebase
//         -- box_ID int, NICE TO HAVE LATER
//     soldOn_Date Date, -- dynamically created
//     salesPrice decimal (20,4) -- from etsy
//     );
module.exports = function (sequelize, DataTypes) {
    var SoldItem = sequelize.define("SoldItem", {
      id: {//our id
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      product_ID: {//satus from etsy
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      soldOnDate: {
        type: DataTypes.DATE,
        // AllowNull is a flag that restricts a product from being entered if it doesn't
        // have a title value
        allowNull: true,
        // len is a validation that checks that our product is between 1 and 140 characters
        validate: {
          len: [1]
        }
      },
      price: {//may cause an issue but capture
        type: DataTypes.DECIMAL,
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
    return SoldItem;
  };
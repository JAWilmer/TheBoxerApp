// module.exports = function(sequelize, DataTypes) {
//   var Product = sequelize.define("Product", {
//     title: {
//       type: DataTypes.TEXT,
//       // AllowNull is a flag that restricts a product from being entered if it doesn't
//       // have a title value
//       allowNull: false,
//       // len is a validation that checks that our product is between 1 and 140 characters
//       validate: {
//         len: [1]
//       }
//     },
//     complete: {
//       type: DataTypes.BOOLEAN,
//       // defaultValue is a flag that defaults a new products complete value to false if
//       // it isn't supplied one
//       defaultValue: false
//     }
//   });
//   return Product;
// };


module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    id: {//our id
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  active: {//satus from etsy
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [1]
    }
  },
    title: {
      type: DataTypes.TEXT,
      // AllowNull is a flag that restricts a product from being entered if it doesn't
      // have a title value
      allowNull: false,
      // len is a validation that checks that our product is between 1 and 140 characters
      validate: {
        len: [1]
      }
    },
    description: {//may cause an issue but capture
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    price: {//capture price
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    currency_code: {//if I can capture
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    quantity: {//number of items from
      type: DataTypes.INTEGER,
      allowNull: true,
      len: [1]
    },
    imageURL: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    category: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
            len: [1]
          }
        },
    tags: {
          type: DataTypes.TEXT,
          allowNull: true,
          validate: {
            len: [1]
          }
        },
    //******* */
    size: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    listingURL: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    category_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    product_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
  shop_section_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      len: [1]
    }
  },
  ending_tsz: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      len: [1]
    }
  },  
    //****** */
    complete: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new products complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  return Product;
};
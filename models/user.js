//AR updated id from auto increment to string and using the key in Firabase now as the primary key
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {//our id
            type: DataTypes.STRING,
            primaryKey: true
        },
        emailAddress: {//status from etsy
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        firstName: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a product from being entered if it doesn't
            // have a title value
            allowNull: true,
            // len is a validation that checks that our product is between 1 and 140 characters
            validate: {
                len: [1]
            }
        },
        lastName: {//may cause an issue but capture
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        address: {//capture price
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        city: {//if I can capture
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        state: {//number of items from
            type: DataTypes.STRING,
            allowNull: true,
            len: [1]
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        optIn: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        lastLoginDate: {
            type: DataTypes.DATE,
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
    return User;
};
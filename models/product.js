module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        short_description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        long_description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        img: {
            type: DataTypes.STRING
        }
    });

    Product.associate = function (models) {
        Product.hasMany(models.Review, {
            onDelete: "cascade"
        });
    };

    return Product;
};
module.exports = function(sequelize, DataTypes) {
    var Cart = sequelize.define("Cart", {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Cart.associate = function(models) {
        Cart.belongsTo(models.Product, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Cart;
}
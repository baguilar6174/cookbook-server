import { DataTypes, Model, Optional } from 'sequelize';
import { Recipe, Ingredient } from '.';
import sequelizeConnection from '../config';

interface RecipeIngredientAttributes {
    id: number;
    RecipeId: number;
    IngredientId: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface RecipeIngredientInput extends Optional<RecipeIngredientAttributes, 'id'> {}
export interface RecipeIngredientOutput extends RecipeIngredientInput {}

class RecipeIngredient extends Model<RecipeIngredientAttributes, RecipeIngredientInput> implements RecipeIngredientAttributes {
    
    public id!: number;
    public RecipeId!: number;
    public IngredientId!: number;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

RecipeIngredient.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    RecipeId: {
        type: DataTypes.BIGINT,
        field: 'recipe_id',
        allowNull: false,
        references: {
            model: Recipe,
            key: 'id'
        }
    },
    IngredientId: {
        type: DataTypes.BIGINT,
        field: 'ingredient_id',
        allowNull: false,
        references: {
            model: Ingredient,
            key: 'id'
        }
    }
}, {
    tableName: "tc_recipe_ingredient",
    sequelize: sequelizeConnection,
    paranoid: false,
    timestamps: false,
});

Recipe.belongsToMany(Ingredient, {
    through: RecipeIngredient,
    foreignKey: 'id'
});

Ingredient.belongsToMany(Recipe, {
    through: RecipeIngredient,
    foreignKey: 'id'
});

export default RecipeIngredient;
import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

// Define todos los atributos posibles de nuestro modelo
interface IngredientAttributes {
    id: number;
    name: string;
    slug: string;
    description?: string;
    foodGroup?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

// Algunos atributos son opcionales en las llamadas `Ingredient.build` y` Ingredient.create`
// Define el tipo de objeto pasado al creador de modelos de Sequelize (model.create)
export interface IngredientInput extends Optional<IngredientAttributes, 'id' | 'slug'> {}

// Define el objeto de retorno de (model.create | model.update | model.findOne)
export interface IngredientOuput extends Required<IngredientAttributes> {}


// Esta clase extiende, inicializa y exporta la clase del modelo de Sequelize
class Ingredient extends Model<IngredientAttributes, IngredientInput> implements IngredientAttributes {
    
    public id!: number
    public name!: string
    public slug!: string
    public description!: string
    public foodGroup!: string
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Ingredient.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT
    },
    foodGroup: {
        type: DataTypes.STRING,
        field: 'food_group'
    }
}, {
    tableName: "tc_ingredients",
    timestamps: false,
    sequelize: sequelizeConnection,
    paranoid: false,
})

export default Ingredient;
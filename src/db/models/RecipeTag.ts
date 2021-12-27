import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import { Recipe, Tag } from '.';

interface RecipeTagAttribtues {
    id: number;
    RecipeId: number;
    TagId: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface RecipeTagInput extends Optional<RecipeTagAttribtues, 'id'> {}
export interface RecipeTagOutput extends Required<RecipeTagInput> {}

class RecipeTag extends Model<RecipeTagAttribtues, RecipeTagInput> implements RecipeTagAttribtues {
    
    public id!: number;
    public RecipeId!: number;
    public TagId!: number;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

RecipeTag.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    RecipeId: {
        type: DataTypes.BIGINT,
        field: 'recipe_id',
        references: {
            model: Recipe,
            key: 'id'
        }
    },
    TagId: {
        type: DataTypes.BIGINT,
        field: 'tag_id',
        references: {
            model: Tag,
            key: 'id'
        }
    }
}, {
    tableName: "tc_recipe_tag",
    sequelize: sequelizeConnection,
    paranoid: false
});

Tag.belongsToMany(Recipe, {
    through: RecipeTag
})

Recipe.belongsToMany(Tag, {
    through: RecipeTag
});

export default RecipeTag;
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'movie',
    modelName: 'Movie',
    version: false,
    underscored: true,
    timestamps: false
})


export class Movie extends Model{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
 
    })
    id_movie: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,

    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    background_img: string;

    @Column({
        type: DataType.REAL,
        allowNull: false,
 
    })
    rating: string;

}




























// import { DataTypes } from "sequelize";
// import sequelizeConnection from "../index";

// export const Movie = sequelizeConnection.define('movie', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     background_img: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     rating: {
//         type: DataTypes.FLOAT,
//         allowNull: false,
//     },
    

// })
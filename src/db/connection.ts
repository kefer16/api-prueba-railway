import { Sequelize } from "sequelize";

export const db =  new Sequelize('railway','root','cErC5mUrddF15lPOLATE',{
    host: "containers-us-west-24.railway.app",
    port: 7311,
    dialect: "mysql",
    define: {
        timestamps: false
    }
    // logging : false
})
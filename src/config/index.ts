import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    port: parseInt(process.env.PORT, 10) || 3000,

    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },

    api: {
        root: '/mos'
    },

    database: {
        name: process.env.DB_NAME || 'ddr3',
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        host: process.env.DB_HOSTNAME || 'localhost',
        port: process.env.DB_PORT || 5432
    },

    
};
import * as SQLite from 'react-native-sqlite-storage';

// Initialize the database
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const databaseName = 'myDatabase.db';
const databaseTable = 'notas';

const initDatabase = () => {
    return new Promise((resolve) => {
        SQLite.openDatabase(databaseName, { location: 'default' })
            .then((db) => {
                db.executeSql('CREATE TABLE IF NOT EXISTS ' + databaseTable + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, av1 INTEGER, av2 INTEGER, av3 INTEGER)')
                    .then(() => {
                        resolve();
                    })
                    .catch((error) => {
                        console.error('Error creating table:', error);
                        resolve();
                    });
            })
            .catch((error) => {
                console.error('Error opening database:', error);
                resolve();
            });
    });
};
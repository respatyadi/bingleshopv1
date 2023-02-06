# bingleshopv1
gold challenge bingleshop v1

#goals
1. Rancangan database menggunakan ERD sesuai studi kasus
2. Server REST API dibuat dengan Express
3. Penyimpanan data ke PostgreSQL dilakukan dengan Sequelize
4. Terdapat API register & login
5. Terdapat API untuk membaca, menyimpan, memperbarui, dan menghapus data

#config
1. environment yang digunakan : development
2. nama database : db_bingleshopv1

#controller
1. controllerItems : digunakan untuk membuat controller yang berhubungan dengan Table Item
2. controllerOrders : digunakan untuk membuat controller yang berhubungan dengan Table Order
3. controllerProducts : digunakan untuk membuat controller yang berhubungan dengan Table Product
4. controllerRoles : digunakan untuk membuat controller yang berhubungan dengan Table Role
5. controllerUsers : digunakan untuk membuat controller yang berhubungan dengan Table User

#middleware
1. authen : middleware yang digunakan untuk mengautentikasi token
2. bcrypt : middleware yang digunakan untuk mengenkripsi nilai password menjadi hash
3. jwt : jsonwebtoken (jwt) untuk verifikasi token antara server dan client

#migrations
1. create-user : Hasil generate migration dari sequelize untuk membuat table Users
2. create-role : Hasil generate migration dari sequelize untuk membuat table Roles
3. create-product : Hasil generate migration dari sequelize untuk membuat table Products
4. create-item : Hasil generate migration dari sequelize untuk membuat table Items
5. create-order : Hasil generate migration dari sequelize untuk membuat table Orders
6. addPrimaryKey : Hasil generate migration dari sequelize untuk menambahkan Primary Key dan Foreign Key

#models
1. index : Hasil generate models dari sequelize init
2. item : Hasil generate models dari sequelize untuk membuat table beserta atribut item
3. order : Hasil generate models dari sequelize untuk membuat table beserta atribut order
4. product : Hasil generate models dari sequelize untuk membuat table beserta atribut product
5. role : Hasil generate models dari sequelize untuk membuat table beserta atribut role
6. user : Hasil generate models dari sequelize untuk membuat table beserta atribut user

#app
main service api

#erd
design entity relation diagram

#package
package dan depedencies yang digunakan

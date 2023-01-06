package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"

	"server/pkg/model"
)

var DB *gorm.DB

func DatabaseConection() {
	errEnv := godotenv.Load()
	if errEnv != nil {
		panic("failed to load env file")
	}

	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASS")
	dbHost := os.Getenv("DB_HOST")
	dbName := os.Getenv("DB_NAME")
	dbPort := os.Getenv("DB_PORT")

	// mysql", "root:password@tcp(localhost:3306)/testdb
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", dbUser, dbPass, dbHost, dbPort, dbName);
	// fmt.Print(dsn);


	db, err := gorm.Open(mysql.Open(dsn))
	if err != nil {
		panic(err)
	}
	db.AutoMigrate(&model.User{})
	DB = db
	fmt.Println("Database Connected")
	
}
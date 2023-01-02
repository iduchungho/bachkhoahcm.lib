package service

import (
	"database/sql"
	"server/config"
	"server/pkg/model"
)

func CreateNewUSerService(db *sql.DB) bool {

	query := `
		INSERT INTO user (id, name)
		VALUES (2013382, "YESICA");
	`
	db.Query(query)

	return true
}

func GetUsersService() ([]model.User, error) {
	var users []model.User

	if err := config.DB.Find(&users).Error; err != nil {
		return users, err
	}

	return users, nil
}

func CreateUserService(user *model.User) {
	
}

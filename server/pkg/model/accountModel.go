package model

type Account struct {
	Id			int 	`json:"id"`
	Email 		string 	`json:"email"`
	Username 	string 	`gorm:"primaryKey" json:"username"`
	Password 	string 	`json:"password"`
}
package controller

import (
	"encoding/json"
	"net/http"
	"server/config"
	"server/pkg/model"
	"server/pkg/utils"
)

var ResponseJson = utils.ResponseJson
var ResponseError = utils.ResponseError

func GetUserController(w http.ResponseWriter, r *http.Request) {
	var users []model.User

	if err := config.DB.Find(&users).Error; err != nil {
		ResponseError(w, http.StatusInternalServerError, err.Error())
		return
	}

	ResponseJson(w, http.StatusOK, users)
}

func CreateUserController(w http.ResponseWriter, r *http.Request) {
	//TODO: validate

	var newUser model.User

	decoder := json.NewDecoder(r.Body);
	if err := decoder.Decode(&newUser); err != nil{
		ResponseError(w, http.StatusInternalServerError, err.Error())
		return
	}
	defer r.Body.Close()

	if err:= config.DB.Create(&newUser).Error; err != nil{
		ResponseError(w, http.StatusInternalServerError, err.Error())
		return;
	}

	ResponseJson(w, http.StatusCreated, newUser)
}

func DeleteUserController(w http.ResponseWriter, r *http.Request){

}

func UpdateUserController(w http.ResponseWriter, r *http.Request){
	
}

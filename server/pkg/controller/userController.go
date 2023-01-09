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

	var newUser model.User

	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&newUser); err != nil {
		ResponseError(w, http.StatusInternalServerError, err.Error())
		return
	}
	defer r.Body.Close()

	if err := config.DB.Create(&newUser).Error; err != nil {
		ResponseError(w, http.StatusInternalServerError, err.Error())
		return
	}

	ResponseJson(w, http.StatusCreated, newUser)
}

func DeleteUserController(w http.ResponseWriter, r *http.Request) {
	input := map[string]string{"id": ""}

	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&input); err != nil {
		ResponseError(w, http.StatusBadRequest, err.Error())
		return
	}

	// A defer statement defers the execution of a function until the surrounding function returns.
	// The deferred call's arguments are evaluated immediately, 
	// but the function call is not executed until the surrounding function returns.
	defer r.Body.Close()

	var user model.User
	if config.DB.Delete(&user, input["id"]).RowsAffected == 0 {
		ResponseError(w, http.StatusBadRequest, "no user")
		return
	}

	response := map[string]string{"message": "user delete"}
	ResponseJson(w, http.StatusOK, response)
}

func UpdateUserController(w http.ResponseWriter, r *http.Request) {

}

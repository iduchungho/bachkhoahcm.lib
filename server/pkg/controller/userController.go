package controller

import (
	"net/http"
	"server/pkg/service"
	"server/pkg/utils"
)

var ResponseJson = utils.ResponseJson
var ResponseError = utils.ResponseError

func GetUserController(w http.ResponseWriter, r *http.Request) {
	user, err := service.GetUsersService()

	if err != nil {
		ResponseError(w, http.StatusInternalServerError, err.Error())
	}

	ResponseJson(w, http.StatusOK, user)
}

func CreateUserController(w http.ResponseWriter, r *http.Request) {

}

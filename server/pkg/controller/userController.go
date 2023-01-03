package controller

import (
	"net/http"
	"server/config"
	"server/pkg/model"
	"server/pkg/utils"
)

var ResponseJson = utils.ResponseJson
var ResponseError = utils.ResponseError

func GetUserController(w http.ResponseWriter, r *http.Request) {
	var products []model.User

	if err := config.DB.Find(&products).Error; err != nil {
		ResponseError(w, http.StatusInternalServerError, err.Error())
		return
	}

	ResponseJson(w, http.StatusOK, products)
}

func CreateUserController(w http.ResponseWriter, r *http.Request) {

}

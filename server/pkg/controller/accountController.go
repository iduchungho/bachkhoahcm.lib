package controller

import (
	"net/http"
	"server/pkg/model"
	"strconv"

	"github.com/gorilla/mux"
)

func GetUserAccount(w http.ResponseWriter, r *http.Request){
	vars := mux.Vars(r)
	id, err := strconv.ParseInt(vars["id"],10, 64)
	if err != nil {
		ResponseError(w, http.StatusBadRequest, err.Error())
		return
	}

	var accountRes model.Account
	accountRes.Id = int(id)
}
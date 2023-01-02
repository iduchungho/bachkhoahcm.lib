package route

import (
	"server/pkg/controller"
	"github.com/gorilla/mux"
)

func UserRoutes(r *mux.Router){
	r.HandleFunc("/getUser", controller.GetUserController).Methods("GET")
	r.HandleFunc("/createUser", controller.CreateUserController).Methods("POST")
}
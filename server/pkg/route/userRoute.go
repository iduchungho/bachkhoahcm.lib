package route

import (
	"server/pkg/controller"

	"github.com/gorilla/mux"
)

func UserRoutes(r *mux.Router) {
	r.HandleFunc("/api/getUser", controller.GetUserController).Methods("GET")
	r.HandleFunc("/api/createUser", controller.CreateUserController).Methods("POST")
	r.HandleFunc("/api/deleteUser", controller.DeleteUserController).Methods("DELETE")
	r.HandleFunc("/api/updateUser/{id}", controller.UpdateUserController).Methods("PUT")
}

package app

import (
	"fmt"
	"net/http"
	"server/config"
	"server/pkg/route"

	"github.com/gorilla/mux"
)

func Init() {
	config.DatabaseConection()
}

func Run() {
	r := mux.NewRouter()

	route.UserRoutes(r)
	route.DocumentRoute(r)
	route.AccountRoute(r)

	fmt.Println("Server is listening on port 8080")
	http.ListenAndServe("localhost:8080", r)
}
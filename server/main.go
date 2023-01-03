package main

import (
	"server/app"
)

func main() {

	// app database connection
	app.Init()
	// app run with localhost and port 8080
	app.Run()
}

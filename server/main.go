package main

import (
	"server/services"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/docs", services.GetDocument)
	router.Run("localhost:8080")
}

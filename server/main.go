package main

import (
	"server/pkg/service"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/docs", service.GetDocument)
	router.Run("localhost:8080")
}

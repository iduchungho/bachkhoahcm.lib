package services

import (
	"net/http"
	"server/models"

	"github.com/gin-gonic/gin"
)

func GetDocument(c *gin.Context){
	c.IndentedJSON(http.StatusOK, models.Docs)
}
package service

import (
	"net/http"
	"server/model"

	"github.com/gin-gonic/gin"
)

func GetDocument(c *gin.Context){
	c.IndentedJSON(http.StatusOK, model.Docs)
}
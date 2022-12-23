package model

type Document struct {
	ID 			string `json:"id"`
	Title 		string `json:"title"`
	Faculty 	string `json:"faculty"`
}

var Docs = []Document{
	{ID: "1", Title: "BTL DSA", Faculty: "CSE"},
	{ID: "2", Title: "BTL DSA1", Faculty: "CSE"},
	{ID: "3", Title: "BTL DSA2", Faculty: "CSE"},
}
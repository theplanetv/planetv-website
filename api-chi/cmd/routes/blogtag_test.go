package routes

import (
	"api-chi/cmd/models"
	"api-chi/internal/message"
	
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/go-chi/chi/v5"
	"github.com/stretchr/testify/assert"
)

func TestBlogTagRoutes(t *testing.T) {
	r := chi.NewRouter()
	BlogTagRoutes(r)
	id := ""

	t.Run("Count success", func(t *testing.T) {
		req := httptest.NewRequest("GET", "/blogtag/count", nil)
		res := httptest.NewRecorder()

		r.ServeHTTP(res, req)

		assert.Equal(t, http.StatusOK, res.Code)
		var response message.Response
		json.NewDecoder(res.Body).Decode(&response)
		assert.Equal(t, message.GET_DATA_SUCCESS, response.Message)
		assert.NotNil(t, response.Data)
	})

	t.Run("Create success", func(t *testing.T) {
		input := models.BlogTag{Name: "test tag"}
		body, _ := json.Marshal(input)

		req := httptest.NewRequest("POST", "/blogtag", bytes.NewBuffer(body))
		res := httptest.NewRecorder()

		r.ServeHTTP(res, req)

		assert.Equal(t, http.StatusOK, res.Code)
		var response message.Response
		json.NewDecoder(res.Body).Decode(&response)
		assert.Equal(t, message.CREATE_DATA_SUCCESS, response.Message)
		assert.NotNil(t, response.Data)

		idValue, ok := response.Data.(string)
		if !ok {
			t.Fatalf("Expected response.Data to be of type string, got %T", response.Data)
		}
		id = idValue
	})

	t.Run("Update success", func(t *testing.T) {
		if id == "" {
			t.Fatal("ID must be set before running Update test")
		}

		input := models.BlogTag{
			Id:   id,
			Name: "updated tag",
		}
		body, _ := json.Marshal(input)

		req := httptest.NewRequest("PATCH", "/blogtag", bytes.NewBuffer(body))
		res := httptest.NewRecorder()

		r.ServeHTTP(res, req)

		assert.Equal(t, http.StatusOK, res.Code)
		var response message.Response
		json.NewDecoder(res.Body).Decode(&response)
		assert.Equal(t, message.UPDATE_DATA_SUCCESS, response.Message)
		assert.NotNil(t, response.Data)
	})

	t.Run("Remove success", func(t *testing.T) {
		if id == "" {
			t.Fatal("ID must be set before running Remove test")
		}

		req := httptest.NewRequest("DELETE", "/blogtag/"+id, nil)
		res := httptest.NewRecorder()

		r.ServeHTTP(res, req)

		assert.Equal(t, http.StatusOK, res.Code)
		var response message.Response
		json.NewDecoder(res.Body).Decode(&response)
		assert.Equal(t, message.REMOVE_DATA_SUCCESS, response.Message)
	})
}

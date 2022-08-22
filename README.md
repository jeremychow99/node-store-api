
# About:
Store API built using Node.js with Express and Mongoose. Code written with guidance from an online tutorial course.

# API documentation:
Endpoint: localhost:portnumber/api/v1/products

Default port is configured to 3000 in app.js

API Search Parameters:
| Parameter | Description | Type|
|---|---|---|
|featured= | Is the product featured|Boolean|
|company= | Name of company |String |
| name=| Name of product | String|
| sort= | Sort results based on input. Available options:price,name,rating |String |
| fields= | Displays only selected fields |String |
| numFilters= |filter on a specific numerical condition (<, <=, =, > or >=). Available options: price, rating |String |

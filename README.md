
# About:
Store API built using Node.js with Express and Mongoose. Code written with guidance from John Smilga's NodeJS Tutorial and Projects Course.

# API documentation:
Endpoint: localhost:portnumber/api/v1/products
default portnumber used on localhost is 3000

API Search Parameters:
| Parameter | Description | Type|
|---|---|---|
|featured= | Is the product featured|Boolean|
|company= | Name of company |String |
| name=| Name of product | String|
| sort= | Sort results based on input. Available options:price,name,rating |String |
| fields= | Displays only selected fields |String |
| numFilters= |filter on a specific numerical condition (<, <=, =, > or >=). Available options: price, rating |String |

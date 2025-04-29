# ![Typescript](logo.png)

# TypeScript + NodeJS + TypeORM + Express + PostgreSQL

Simple api project with TypeScript, Node.js, TypeORM and Postgres.

## Endpoints


### 🔍 Get all products
```sh
curl -X GET http://localhost:8090/api/products
```

---

## 🔎 Get product by id
```sh
curl -X GET http://localhost:8090/api/products/123
```
> Replace `123` with the actual product ID.

---

## ➕ Create a new product
```sh
curl -X POST http://localhost:8090/api/products   -H "Content-Type: application/json"   -d '{
    "name": "Test Product",
    "description": "Product description",
    "weight": 1
}'
```

---

## ✏️ Update product
```sh
curl -X PUT http://localhost:8090/api/products/123   -H "Content-Type: application/json"   -d '{
    "name": "Updated Product",
    "description": "Updated description",
    "weight": 2
}'
```

---

## ❌ Delete product
```sh
curl -X DELETE http://localhost:8090/api/products/123
```
> Replace `123` with the actual product ID.
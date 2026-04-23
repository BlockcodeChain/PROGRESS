<!-- SERVER.JS  -->


<!-- ----------------------------- -->
# 📘 EXPRESS.JS INTERVIEW CHEATSHEET (MERN READY)

---

# 🟢 BASIC LEVEL

---

## 1. What is Middleware in Express?

👉 Middleware is a function that runs **between request and response**.

### ✔ Use:

* Access `req`, `res`, `next`
* Modify request/response
* Add logic like auth, logging, validation

### 💡 Simple answer:

> Middleware is a function that executes during the request-response cycle and helps in processing requests before reaching the final route.

---

## 2. Difference between `express.json()` and `express.urlencoded()`

👉 Both are used to read incoming data.

| express.json()  | express.urlencoded() |
| --------------- | -------------------- |
| Reads JSON data | Reads form data      |
| Used in APIs    | Used in HTML forms   |

### 💡 Simple answer:

> express.json() reads JSON data, while express.urlencoded() reads form data and converts both into req.body.

---

## 3. Why do we use CORS?

👉 CORS allows frontend and backend to communicate safely.

### 💡 Simple answer:

> CORS is a security feature that allows or restricts requests from different origins like frontend and backend running on different ports.

---

## 4. What is cookie-parser used for?

👉 It reads cookies from browser.

### 💡 Simple answer:

> cookie-parser middleware reads cookies from the request and makes them available in req.cookies for authentication and session handling.

---

## 5. What is dotenv?

👉 Used to manage sensitive data.

### 💡 Simple answer:

> dotenv loads environment variables from a .env file into process.env to keep sensitive data like API keys and DB URLs secure.

---

# 🟡 INTERMEDIATE LEVEL

---

## 6. Flow of Request in Express

👉 Step-by-step flow:

1. Client sends request
2. Middleware runs (json, cors, etc.)
3. Route is matched
4. Controller executes
5. Response is sent
6. If error → goes to error handler

### 💡 Simple answer:

> Request first passes through middleware, then routes, then controller, and finally response is sent. If any error occurs, it goes to the global error handler.

---

## 7. Why use Router files?

👉 To keep code clean and scalable.

### 💡 Simple answer:

> Router files are used to separate routes into modules so that the code is clean, scalable, and easy to maintain.

---

## 8. What is Helmet?

👉 Security middleware.

### 💡 Simple answer:

> Helmet is a security middleware that sets HTTP headers to protect the app from attacks like XSS and clickjacking.

---

## 9. What is Global Error Handler?

👉 Central error system.

### 💡 Simple answer:

> A global error handler is middleware that catches all errors in one place and sends a proper response instead of crashing the server.

---

# 🔴 ADVANCED LEVEL

---

## 10. What happens if errors are not handled globally?

👉 Server becomes unstable.

### 💡 Simple answer:

> Without global error handling, the server may crash or send inconsistent responses, making debugging difficult.

---

## 11. How does Express detect an error?

👉 Using `next(error)`

### 💡 Simple answer:

> Express detects an error when next() is called with an error object and directly forwards it to the error-handling middleware.

---

## 12. What is `next(error)`?

👉 Passes error forward.

### 💡 Simple answer:

> next(error) is used to pass errors to the global error handler instead of continuing normal execution.

---

# 🏆 FINAL INTERVIEW TIPS

✔ Speak in flow, not single points
✔ Always mention “clean, scalable, modular”
✔ Don’t memorize, understand logic
✔ Keep answers short (5–6 lines max)

---

<!-- ----------------------------- -->
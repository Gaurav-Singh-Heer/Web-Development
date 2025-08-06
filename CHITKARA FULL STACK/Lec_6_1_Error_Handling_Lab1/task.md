/*Lab 1 Activities

*Lab 1: Student Feedback Submission API*
Need to build a small API for a university portal where students can submit feedback on courses they have taken.
The API should be designed with robust error handling, using both try-catch blocks and a centralized error-handling *middleware*.

---

### 1. Create a POST endpoint: /feedback

Accepts JSON input:

* studentId (number)
* courseCode (string)
* rating (number, 1 to 5)
* comments (optional, string)

---

### 2. Local Error Handling using try-catch:

Wrap logic in a try-catch block.
Inside try:

* Validate inputs
* Simulate saving feedback (e.g., push to an array).
  In catch:
* Use next(error) to pass the error to the centralized handler.

---

### 3. Validation Rules (Throw Errors in try):

* studentId and courseCode must be present.
* rating must be a number between 1 and 5.

If any validation fails, throw an error using:

js
throw new Error("Your validation message");


---

### 4. Centralized Error Handler:

Create a middleware at the end of the file:

js
app.use((err, req, res, next) => {
    // Log error
    // Respond with JSON and appropriate HTTP status
});


Should return proper error response (e.g., 400 for bad request) and a helpful error message.

---

*Example Valid Request:*
*POST* /feedback

json
{
  "studentId": 123,
  "courseCode": "CS101",
  "rating": 4,
  "comments": "Great course!"
}


---

*Expected Response for Invalid:*

json
{ "error": "courseCode is required and rating must be between 1 and 5" }


*/

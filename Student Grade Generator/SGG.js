
    function calculateGrade() {
      let marks = document.getElementById("marks").value;

      // Convert input to a number
      marks = Number(marks);

      if (marks >= 0 && marks <= 100) {
        // Calculate grade based on marks
        let grade;
        if (marks >= 79) {
          grade = "A";
        } else if (marks >= 60 && marks <= 79) {
          grade = "B";
        } else if (marks >= 50 && marks <= 59) {
          grade = "B";
        } else if (marks >= 40 && marks <= 49) {
          grade = "C";
        } 
        else {
          grade = "E";
        }
      
        // Output the result
        document.getElementById("result").innerHTML = `The student's grade is ${grade}.`;
      } else {
        // Output an error message
        document.getElementById("result").innerHTML = "Invalid input! Marks should be between 0 and 100.";
      }
    }
 
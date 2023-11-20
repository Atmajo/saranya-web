// script.js
function submitSurvey() {
    const question1 = document.getElementById('question1').value;
    const question2 = document.getElementById('question2').value;
    const question3 = document.getElementById('question3').value;
    const question4 = document.getElementById('question4').value
    console.log("Heelo")
    // You can perform actions with the survey data here (e.g., display an alert)
    
    setTimeout(()=> {
        alert(`Survey submitted successfully!\nQuestion 1: ${question1}\nQuestion 2: ${question2}\nQuestion 3: ${question3}\nQuestion 4: ${question4}`);
    },3000);
    // Optionally, reset the form
    document.getElementById('surveyForm').reset();
}

// script.js
function submitSurvey() {
    const question1 = document.getElementById('question1').value;
    const question2 = document.getElementById('question2').value;

    // You can perform actions with the survey data here (e.g., display an alert)
    alert(`Survey submitted successfully!\nQuestion 1: ${question1}\nQuestion 2: ${question2}`);

    // Optionally, reset the form
    document.getElementById('surveyForm').reset();
}

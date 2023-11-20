<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Innovative Survey Site</title>
</head>
<body>
    <div class="container">
        <h1>Innovative Survey</h1>
        <form id="surveyForm">
            <label for="question1">Question 1: What is your favorite color?</label>
            <input type="text" id="question1" name="question1" required>

            <label for="question2">Question 2: What is your favourite dish?</label>
            <input type="text" id="question2" name="question2" required>

            <label for="question2">Question 3: What is your favourite Bird?</label>
            <input type="text" id="question3" name="question3" required>

            <label for="question2">Question 4: How would you rate our service (1-10)?</label>
            <input type="number" id="question4" name="question4" max="10" min="1" required>

            <button type="submit">Submit</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>

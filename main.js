function calculateSumAndDisplayWords() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var sum = num1 + num2;

    if (sum >= wordsArray.length) {
        console.log("Aukat se Bahar hai Bhai");
        document.getElementById('result').innerText = "Aukat se Bahar hai Bhai";
        return false;
    }

    var choices = wordsArray[sum];
    var words = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('result').innerText = words;
    return false;
}
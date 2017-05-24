var answers = {
    "link": "anchor",
    "list": "ordered-list",
    "service": "meta-slash",
    "table": ["table-data", "caption"],
    "form": ["autocomplete", "action"]
};


var myTest = (function (answers) {
            var balance = 0;
            var init = function () {
                var result = document.getElementById("result");
                result.onclick = findAnswers;
            };

            function findAnswers() {
                balance = 0;
                for (var key in answers) {
                    var question = document.getElementsByName(key);
                    if (question[0].type == "radio") {
                        radioButton(question, key);
                    } else {
                        checkBox(question, key);
                    }
                }
                finalResult();
            }

            function radioButton(question, key) {
                for (var i = 0; i < question.length; i++) {
                    if (question[i].checked && question[i].value === answers[key]) {
                        balance += 2;
                    } else {
                        balance += 0;
                    }
                }
            }

            function checkBox(question, key ) {
                for (var i = 0; i < question.length; i++) {
                    if (question[i].checked) {
                        if(answers[key].indexOf(question[i].value) !== -1){
                            balance += 1;
                        } else {
                            balance -= 1;
                        }
                    }
                }
            }

            function finalResult() {

                var percentage = (balance * 100) / 10;
                alert("Your result is: " + balance + "\n" + "Percent of correct answers: " + percentage);
            }

            return {
                init: init
            }
        }
        (answers)
    );

myTest.init();

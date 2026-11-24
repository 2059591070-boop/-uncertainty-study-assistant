// Preset academic answers
const answers = {
    q1: "Overfitting occurs when a model learns the training data too closely and performs poorly on unseen data.",

    q2: "K-means clustering groups data into K clusters by assigning points to their nearest centroid and repeatedly updating the centroids.",

    q3: "Gradient descent is an optimisation method that updates model parameters in the direction of the negative gradient to reduce the loss function."
};

// Uncertainty expression conditions
const uncertaintyMessages = {
    A: "I am not certain whether this answer is correct.",
    B: "There is uncertainty about whether this answer is correct."
};

// Simulated verification results
const verificationResults = {
    q1: {
        status: "success",
        message: "Simulated verification: The reference information supports the answer. Overfitting involves poor generalisation to unseen data."
    },

    q2: {
        status: "success",
        message: "Simulated verification: The reference information supports the answer. K-means repeatedly assigns data points and updates centroids."
    },

    q3: {
        status: "failed",
        message: "Simulated verification failed: No reference information is available. Please consult your lecture notes before relying on this answer."
    }
};

// Interaction records
const interactionLog = [];

let currentQuestion = null;
let currentCondition = null;

// Display the selected answer
document.getElementById("ask-button").addEventListener("click", function () {

    currentQuestion = document.getElementById("question").value;
    currentCondition = document.getElementById("condition").value;

    document.getElementById("answer").textContent =
        answers[currentQuestion];

    document.getElementById("uncertainty").textContent =
        uncertaintyMessages[currentCondition];

    document.getElementById("answer-panel").hidden = false;

    document.getElementById("verification-result").textContent = "";

    interactionLog.push({
        action: "ask",
        question: currentQuestion,
        condition: currentCondition,
        timestamp: new Date().toISOString()
    });
});

// Verify the displayed answer
document.getElementById("verify-button").addEventListener("click", function () {

    if (!currentQuestion) {
        return;
    }

    const result = verificationResults[currentQuestion];
    const resultPanel = document.getElementById("verification-result");

    resultPanel.textContent = result.message;

    if (result.status === "success") {
        resultPanel.style.color = "#166534";
    } else {
        resultPanel.style.color = "#b91c1c";
    }

    interactionLog.push({
        action: "verify",
        question: currentQuestion,
        condition: currentCondition,
        result: result.status,
        timestamp: new Date().toISOString()
    });

    console.table(interactionLog);
});
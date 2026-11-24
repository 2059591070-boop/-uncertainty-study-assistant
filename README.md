# Uncertainty-Aware AI Study Assistant

## 1. Project Overview

This research prototype explores how different expressions of AI uncertainty may influence students' verification behaviour when using academic AI assistants.

## 2. Project Status

Version 1.0 implements:

- Three predefined academic questions.
- Simulated AI responses.
- First-person and impersonal uncertainty expressions.
- Simulated verification success and failure.
- Interaction logging in the browser console.

No live AI model or external verification service is connected.

## 3. Technology Stack

- HTML: Interface structure.
- CSS: Visual presentation.
- JavaScript: Interaction logic and behaviour logging.
- Visual Studio Code: Development environment.

## 4. How to Run

1. Download the repository files.
2. Open index.html in a web browser.
3. Select an uncertainty expression and academic question.
4. Click Ask Question.
5. Optionally click Verify Answer.

No additional dependencies or API keys are required.

## 5. Development Record

### Stage 1: Interface development

Created the HTML interface and styled it using CSS.

An incomplete HTML file initially prevented the dropdown menus from appearing. The missing code was restored and the interface was tested again.

### Stage 2: Uncertainty expressions

Implemented two uncertainty conditions while keeping the academic answer unchanged.

Both conditions were manually tested using the overfitting question.

### Stage 3: Verification

Implemented simulated verification success and failure, including guidance to consult lecture notes when verification fails.

### Stage 4: Interaction logging

Implemented logging of user actions, question identifiers, uncertainty conditions, verification outcomes and timestamps.

The records were inspected in the browser console.

## 6. Functional Testing

| Test | Result |
|---|---|
| Display academic answers | Pass |
| First-person uncertainty | Pass |
| Impersonal uncertainty | Pass |
| Identical answers across conditions for overfitting | Pass |
| Simulated verification success | Pass |
| Simulated verification failure | Pass |
| Interaction logging | Pass |
| Clear previous verification feedback | Pass |

These are developer functional tests, not participant study results.

## 7. Limitations

- Academic questions and answers are predefined.
- Verification results are simulated.
- Interaction records are lost when the page is refreshed.
- The prototype does not establish whether uncertainty wording improves appropriate trust.
- Formal user evaluation has not yet been conducted.

## 8. AI Assistance

ChatGPT assisted with prototype planning, HTML, CSS, JavaScript and debugging.

I transferred the generated code into Visual Studio Code, corrected an incomplete HTML file, manually tested the interface and inspected the interaction logs.

## 9. Testing Evidence

- [First-person uncertainty](<屏幕截图 2026-11-25 031557.png>)
- [Impersonal uncertainty](<屏幕截图 2026-11-25 031606.png>)
- [Successful verification](<屏幕截图 2026-11-25 035146.png>)
- [Failed verification](<屏幕截图 2026-11-25 035211.png>)
- [Interaction log](<屏幕截图 2026-11-25 033034.png>)

These screenshots document manual functional testing.

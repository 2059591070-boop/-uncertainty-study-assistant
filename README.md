# Uncertainty-Aware AI Study Assistant

**README prose word count: 492**

## 1. Project Overview

This research prototype explores how different expressions of AI uncertainty may influence students' verification behaviour when using academic AI assistants.

## 2. Project Status

Version 1.0 implements:

- Three predefined academic questions.
- Simulated AI responses.
- First-person and impersonal uncertainty expressions.
- Simulated verification success and failure.
- In-memory interaction logging displayed in the browser console.

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

For the interaction log, open the browser developer tools and select Console. No additional dependencies or API keys are required.

## 5. Development Record

### Stage 1: Interface development

An incomplete HTML file initially prevented the dropdown menus from appearing. I restored the missing code and checked the interface before adding CSS styling.

### Stage 2: Uncertainty expressions

Two fixed uncertainty messages were added while keeping the academic answer unchanged to support a controlled comparison. I manually tested both conditions using the overfitting question.

### Stage 3: Verification

Simulated success and failure feedback was added to give students an optional checking action and guidance when reference information was unavailable. I tested both outcomes.

### Stage 4: Interaction logging

Logging was added for possible future evaluation. It records actions, question identifiers, conditions, timestamps and verification outcomes. I inspected the browser console; the captured log contains 12 developer actions, including repeated clicks.

The [initial prototype](https://github.com/2059591070-boop/-uncertainty-study-assistant/commit/e48fcfc8320ab3ef8f164536585104b74f49f40b) and [testing evidence](https://github.com/2059591070-boop/-uncertainty-study-assistant/commit/a30a0350677e7209482e381e52ddbd6fc07a104b) are recorded in GitHub.

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
- The prototype does not establish whether uncertainty wording improves appropriate trust or learning.
- Formal user evaluation has not yet been conducted.

## 8. AI Assistance

I defined the project idea and coordinated its development using a main ChatGPT conversation and several task-specific conversations. ChatGPT generated the code, report, diagrams and storyboards, and assisted with project planning, literature checking and debugging. I deployed and tested the prototype locally and collected testing evidence.

I transferred the generated code into Visual Studio Code, corrected the incomplete HTML, checked both uncertainty conditions and verification outcomes, inspected interaction logs, and uploaded the project files and screenshots to GitHub.

The report and diagrams use the source code and existing testing evidence. Some storyboard steps are reconstructed and labelled accordingly; they are not additional tests or participant observations.

## 9. Testing Evidence

- [First-person uncertainty](<屏幕截图 2026-11-25 031557.png>)
- [Impersonal uncertainty](<屏幕截图 2026-11-25 031606.png>)
- [Successful verification](<屏幕截图 2026-11-25 035211.png>)
- [Failed verification](<屏幕截图 2026-11-25 035146.png>)
- [Interaction log](<屏幕截图 2026-11-25 033034.png>)

These screenshots document manual functional testing. The system diagram and storyboards are included in the accompanying A2 project report.

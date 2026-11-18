"use strict";

const questions = [
  {
    text: "Что в экономическом смысле наиболее точно характеризует собственность?",
    options: [
      "Отношения между людьми по поводу присвоения благ и условий их использования",
      "Только физическое обладание вещью в данный момент",
      "Исключительно перечень вещей, записанных в документах"
    ],
    correct: 0
  },
  {
    text: "Какие три правомочия традиционно входят в содержание права собственности?",
    options: [
      "Производство, распределение и потребление",
      "Владение, пользование и распоряжение",
      "Покупка, обмен и наследование"
    ],
    correct: 1
  },
  {
    text: "Какое правомочие позволяет определить юридическую судьбу имущества — например, продать или подарить его?",
    options: ["Пользование", "Владение", "Распоряжение"],
    correct: 2
  },
  {
    text: "Как называется форма собственности, при которой имущество принадлежит отдельному гражданину или организации?",
    options: ["Частная", "Общенародная", "Муниципальная"],
    correct: 0
  },
  {
    text: "Какой пример относится к государственной собственности?",
    options: [
      "Личная квартира гражданина",
      "Имущество, принадлежащее Российской Федерации или её субъекту",
      "Оборудование, купленное частной фирмой"
    ],
    correct: 1
  },
  {
    text: "Кому принадлежит муниципальная собственность?",
    options: [
      "Только федеральным органам власти",
      "Исключительно коммерческим организациям",
      "Муниципальным образованиям"
    ],
    correct: 2
  },
  {
    text: "Что обычно понимают под средствами производства?",
    options: [
      "Орудия труда и предметы труда, используемые для создания благ",
      "Только готовые товары в магазине",
      "Деньги, предназначенные исключительно для личных покупок"
    ],
    correct: 0
  },
  {
    text: "Как связаны отношения собственности и социально-экономический строй?",
    options: [
      "Собственность влияет только на бытовые привычки людей",
      "Формы собственности и распределение ресурсов во многом определяют устройство экономики и общества",
      "Между ними нет значимой связи"
    ],
    correct: 1
  },
  {
    text: "Что означает экономическая реализация собственности?",
    options: [
      "Оформление права собственности только в государственном реестре",
      "Фактическое извлечение дохода или иной выгоды из использования имущества",
      "Запрет на использование имущества владельцем"
    ],
    correct: 1
  },
  {
    text: "Какой признак отличает кооперативную собственность?",
    options: [
      "Имущество объединяется участниками для совместной деятельности и принадлежит кооперативу",
      "Всё имущество без исключения принадлежит государству",
      "Каждый участник владеет только чужими личными вещами"
    ],
    correct: 0
  },
  {
    text: "Какова роль частной собственности в рыночной экономике?",
    options: [
      "Она полностью исключает обмен между производителями",
      "Она может создавать стимулы к предпринимательству, инвестициям и более эффективному использованию ресурсов",
      "Она означает, что государство не устанавливает никаких правил"
    ],
    correct: 1
  },
  {
    text: "В чём состоит ключевое различие между личной и частной собственностью в учебной экономической терминологии?",
    options: [
      "Личная обычно связана с удовлетворением потребностей человека, а частная может служить также получению дохода",
      "Личная принадлежит только государству, а частная — только муниципалитету",
      "Различий в употреблении этих понятий не бывает ни в одном контексте"
    ],
    correct: 0
  },
  {
    text: "Что такое приватизация?",
    options: [
      "Передача частного имущества в безвозмездное пользование государству",
      "Передача государственного или муниципального имущества в частную собственность в установленном порядке",
      "Объединение всех частных предприятий в одно государственное"
    ],
    correct: 1
  },
  {
    text: "Что такое национализация?",
    options: [
      "Передача частного имущества в государственную собственность на основании закона и с соблюдением установленных гарантий",
      "Добровольный обмен частными квартирами между гражданами",
      "Покупка гражданином акций частной компании"
    ],
    correct: 0
  },
  {
    text: "Что означает многообразие форм собственности?",
    options: [
      "В экономике может существовать только одна форма собственности",
      "Одновременно существуют разные формы собственности, например частная, государственная и муниципальная",
      "Любое имущество обязательно делится поровну между всеми гражданами"
    ],
    correct: 1
  },
  {
    text: "Что из перечисленного является примером общей долевой собственности?",
    options: [
      "Здание, принадлежащее одному владельцу",
      "Общее имущество участников, доли которых определены",
      "Оборудование, которое организация только временно арендует"
    ],
    correct: 1
  },
  {
    text: "Что означает ограниченность ресурсов для отношений собственности?",
    options: [
      "Необходимы правила, определяющие, кто и на каких условиях получает доступ к ресурсам и принимает решения об их использовании",
      "Каждый ресурс автоматически становится бесхозным",
      "Вопрос о распределении благ перестаёт иметь значение"
    ],
    correct: 0
  },
  {
    text: "Как собственность может влиять на социальную структуру общества?",
    options: [
      "Никак: имущественное положение не связано с возможностями людей",
      "Распределение имущества и доходов может влиять на экономические возможности и положение социальных групп",
      "Она определяет только возраст населения"
    ],
    correct: 1
  },
  {
    text: "Что в рыночной экономике означает защита права собственности?",
    options: [
      "Владелец вправе использовать имущество любым способом, даже нарушая закон",
      "Закон признаёт и защищает права владельца, одновременно устанавливая пределы и обязанности",
      "Государство гарантирует владельцу прибыль от любого имущества"
    ],
    correct: 1
  },
  {
    text: "Как точнее всего описать смешанную экономику с точки зрения форм собственности?",
    options: [
      "В ней сосуществуют частный, государственный и другие секторы, а государство регулирует экономику",
      "В ней разрешена только государственная собственность",
      "В ней отсутствуют обмен, предприятия и правовые нормы"
    ],
    correct: 0
  }
];

const totalQuestions = questions.length;
const answerLetters = ["А", "Б", "В"];
let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");
const progressLabel = document.getElementById("progress-label");
const progressPercent = document.getElementById("progress-percent");
const progressFill = document.getElementById("progress-fill");
const progressTrack = document.getElementById("progress-track");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");

function renderQuestion() {
  const question = questions[currentQuestion];
  const questionNumber = currentQuestion + 1;
  const percent = Math.round((questionNumber / totalQuestions) * 100);

  answered = false;
  progressLabel.innerHTML = `Вопрос <strong>${questionNumber}</strong> из ${totalQuestions}`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
  progressTrack.setAttribute("aria-valuenow", String(questionNumber));
  questionElement.textContent = question.text;
  feedbackElement.textContent = "";
  feedbackElement.className = "feedback";
  nextButton.hidden = true;
  answersElement.replaceChildren();

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.setAttribute("aria-label", `${answerLetters[index]}. ${option}`);

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.setAttribute("aria-hidden", "true");
    letter.textContent = answerLetters[index];

    const text = document.createElement("span");
    text.textContent = option;
    button.append(letter, text);
    button.addEventListener("click", () => selectAnswer(index));
    answersElement.append(button);
  });
}

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const question = questions[currentQuestion];
  const buttons = answersElement.querySelectorAll(".answer");
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.correct) button.classList.add("correct");
  });

  if (selectedIndex === question.correct) {
    score += 1;
    scoreElement.textContent = String(score);
    feedbackElement.textContent = "Верно! Отличная работа.";
    feedbackElement.classList.add("is-correct");
  } else {
    buttons[selectedIndex].classList.add("incorrect");
    feedbackElement.textContent = `Неверно. Правильный ответ: ${question.options[question.correct]}`;
    feedbackElement.classList.add("is-incorrect");
  }

  nextButton.innerHTML = currentQuestion === totalQuestions - 1
    ? "Посмотреть результат <span aria-hidden=\"true\">→</span>"
    : "Следующий вопрос <span aria-hidden=\"true\">→</span>";
  nextButton.hidden = false;
  nextButton.focus();
}

function getAssessment(finalScore) {
  if (finalScore >= 18) {
    return {
      title: "Отлично!",
      note: "Ты уверенно разбираешься в теме собственности и экономического устройства."
    };
  }
  if (finalScore >= 15) {
    return {
      title: "Хорошо!",
      note: "У тебя крепкие знания. Повтори отдельные понятия — и будет ещё лучше."
    };
  }
  if (finalScore >= 10) {
    return {
      title: "Удовлетворительно.",
      note: "Основы знакомы. Повтори материал и попробуй пройти викторину ещё раз."
    };
  }
  return {
    title: "Нужно повторить материал.",
    note: "Не расстраивайся: повторение поможет разобраться в теме и улучшить результат."
  };
}

function showResult() {
  const assessment = getAssessment(score);
  quizElement.hidden = true;
  resultElement.hidden = false;
  resultElement.replaceChildren();

  const icon = document.createElement("div");
  icon.className = "result-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = score >= 15 ? "🏆" : "📘";

  const title = document.createElement("h2");
  title.textContent = assessment.title;

  const resultScore = document.createElement("p");
  resultScore.className = "result-score";
  resultScore.append(document.createTextNode(String(score)));
  const total = document.createElement("span");
  total.textContent = ` / ${totalQuestions} баллов`;
  resultScore.append(total);

  const note = document.createElement("p");
  note.className = "result-note";
  note.textContent = assessment.note;

  const restartButton = document.createElement("button");
  restartButton.className = "primary-button";
  restartButton.type = "button";
  restartButton.innerHTML = "Пройти заново <span aria-hidden=\"true\">↻</span>";
  restartButton.addEventListener("click", restartQuiz);

  resultElement.append(icon, title, resultScore, note, restartButton);
  restartButton.focus();
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreElement.textContent = "0";
  resultElement.hidden = true;
  quizElement.hidden = false;
  renderQuestion();
  document.getElementById("page-title").focus();
}

nextButton.addEventListener("click", () => {
  if (!answered) return;
  if (currentQuestion === totalQuestions - 1) {
    showResult();
    return;
  }
  currentQuestion += 1;
  renderQuestion();
  questionElement.focus();
});

renderQuestion();

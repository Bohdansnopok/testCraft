'use client';

import { useEffect, useState } from 'react';
import './createTest.scss';
import { Plus, Trash2, Check, X } from 'lucide-react';

export default function createTest() {
  const [questions, setQuestions] = useState(() => {
    const saved = localStorage.getItem('questions');
    return saved ? JSON.parse(saved) : [];
  });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    question: '',
    answers: ['', '', ''],
    correctIndex: 0,
  });

  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questions));
  }, [questions]);

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      question: 'Нове питання',
      type: 'choice',
      answers: ['Варіант 1', 'Варіант 2', 'Варіант 3'],
      correctIndex: 0,
    };
    setQuestions([...questions, newQuestion]);
    setEditingId(newQuestion.id);
    setEditForm({
      question: newQuestion.question,
      type: newQuestion.type,
      answers: [...newQuestion.answers],
      correctIndex: newQuestion.correctIndex,
    });
  };

  const startEdit = (q) => {
    setEditingId(q.id);
    setEditForm({
      question: q.question,
      type: q.type,
      answers: [...q.answers],
      correctIndex: q.correctIndex,
    });
  };

  const saveQuestion = () => {
    setQuestions(
      questions.map((q) => (q.id === editingId ? { ...q, ...editForm } : q))
    );
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
    if (editingId === id) {
      setEditingId(null);
    }
  };

  const updateAnswer = (index, value) => {
    const newAnswers = [...editForm.answers];
    newAnswers[index] = value;
    setEditForm({ ...editForm, answers: newAnswers });
  };

  const addAnswer = () => {
    setEditForm({
      ...editForm,
      answers: [...editForm.answers, ''],
    });
  };

  const removeAnswer = (index) => {
    if (editForm.answers.length > 2) {
      const newAnswers = editForm.answers.filter((_, i) => i !== index);
      setEditForm({
        ...editForm,
        answers: newAnswers,
        correctIndex:
          editForm.correctIndex >= index && editForm.correctIndex > 0
            ? editForm.correctIndex - 1
            : editForm.correctIndex,
      });
    }
  };

  return (
    <section className="createTest">
      <div className="container">
        <h1>Создание теста</h1>
        <div className="createTest__form">
          <input
            type="text"
            className="createTest__form__input"
            placeholder="Название теста"
          />
          <input
            type="text"
            className="createTest__form__input"
            placeholder="Описание теста"
          />
          <select name="testType" id="testType" className="globalSelect">
            <option value="selectType">Выберите тип теста</option>
            <option value="study">Образовательный</option>
            <option value="psychology">Психологический</option>
            <option value="happy">Развлекательный</option>
          </select>

          <div className="addQuestion">
            <button
              onClick={addQuestion}
              className="addQuestion__button orangeBtn"
            >
              Добавить вопрос
            </button>
            <div className="addQuestion__questionsCounter">
              Питань у тесті: {questions.length}
            </div>
            <div>
              {questions.map((q, index) => (
                <div key={q.id} className="addQuestion__content">
                  {editingId === q.id ? (
                    <div className="addQuestion__questionContent">
                      <div className="addQuestion__questionContent__editButtons">
                        <span>Редагування питання {index + 1}</span>
                        <div className="addQuestion__questionContent__editButtons__buttons">
                          <button onClick={saveQuestion} className="orangeBtn">
                            <Check size={16} />
                            Зберегти
                          </button>
                          <button onClick={cancelEdit} className="orangeBtn">
                            <X size={16} />
                            Скасувати
                          </button>
                        </div>
                      </div>

                      <div className="addQuestion__questionContent__questionText">
                        <label className="addQuestion__questionContent__questionText__title">
                          Питання:
                        </label>
                        <input
                          type="text"
                          value={editForm.question}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              question: e.target.value,
                            })
                          }
                          placeholder="Введіть питання"
                          className="addQuestion__questionContent__questionText__input"
                        />
                      </div>

                      <div className="addQuestion__questionContent__answers">
                        <div className="addQuestion__questionContent__answers__addVersion">
                          <label>Варіанти відповідей:</label>
                          <button onClick={addAnswer} className="orangeBtn">
                            + Додати варіант
                          </button>
                        </div>
                        <div>
                          {editForm.answers.map((answer, i) => (
                            <div
                              key={i}
                              className="addQuestion__questionContent__answers__answer"
                            >
                              <span>{String.fromCharCode(97 + i)})</span>
                              <input
                                type="text"
                                value={answer}
                                onChange={(e) =>
                                  updateAnswer(i, e.target.value)
                                }
                                placeholder={`Варіант ${i + 1}`}
                                className="addQuestion__questionContent__answers__answer__input"
                              />
                              <button
                                onClick={() =>
                                  setEditForm({ ...editForm, correctIndex: i })
                                }
                                className="orangeBtn"
                                title="Позначити як правильну відповідь"
                              >
                                {editForm.correctIndex === i ? (
                                  <Check size={16} />
                                ) : (
                                  <X size={16} />
                                )}
                              </button>
                              {editForm.answers.length > 2 && (
                                <button
                                  onClick={() => removeAnswer(i)}
                                  className="orangeBtn"
                                >
                                  <Trash2 size={16} />
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="question">
                      <div className="question__content">
                        <div className="question__content__title">
                          <div>
                            <span>{index + 1}.</span>
                            <span>{q.question}</span>
                          </div>
                        </div>
                        <div className="question__content__buttons">
                          <button
                            onClick={() => startEdit(q)}
                            className="orangeBtn"
                          >
                            Редагувати
                          </button>
                          <button
                            onClick={() => deleteQuestion(q.id)}
                            className="orangeBtn"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>

                      <div className="question__content__answers">
                        {q.answers.map((answer, i) => (
                          <div key={i}>
                            <span>{String.fromCharCode(97 + i)})</span>
                            <span>{answer}</span>
                            {q.correctIndex === i && (
                              <Check size={16} className="orangeBtn" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {questions.length === 0 && (
              <div>Натисніть "Додати питання", щоб почати створювати тест</div>
            )}

            {/* {questions.length > 0 && (
            <div>
              <h3>JSON для збереження:</h3>
              <pre>{JSON.stringify(questions, null, 2)}</pre>
            </div>
          )} */}
          </div>
        </div>
      </div>
    </section>
  );
}

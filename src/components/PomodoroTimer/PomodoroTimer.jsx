// src/PomodoroTimer.js
import React, { useState, useEffect } from "react";
import "./PomodoroTimer.css";
import alarmSound from "./bell.mp3";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const audio = new Audio(alarmSound);
  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (seconds === 0) {
          if (minutes === 0) {
            audio.play();
            setIsBreak(!isBreak);
            setMinutes(isBreak ? 25 : 5);
            setSeconds(0);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, seconds, minutes, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
    setIsBreak(false);
  };

  const shortBreak = () => {
    setIsBreak(true);
    setMinutes(5);
    setSeconds(0);
    setIsActive(true);
  };
  const longBreak = () => {
    setIsBreak(true);
    setMinutes(10);
    setSeconds(0);
    setIsActive(true);
  };

  return (
    <div className="pomodoro-timer">
      <h1 className="break-status">{isBreak ? "Break Time!" : "Work Time!"}</h1>
      <div className="time">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={shortBreak} className="pomodoro__button">
        short break
      </button>
      <button onClick={longBreak} className="pomodoro__button">
        long break
      </button>
    </div>
  );
};

export default PomodoroTimer;

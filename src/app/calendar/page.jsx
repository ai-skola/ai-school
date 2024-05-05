import React from "react";
import styles from "./calendar.module.css";
import "./calendar.css";
import { randomInt } from "crypto";

function page() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const subjects = [
    "Math",
    "Biology",
    "Physics",
    "Art",
    "History",
    "Georgian",
    "Sport",
  ];
  const colors = ["blue", "green", "yellow"];

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.controlContainer}>
          <div className={styles.formatSelect}>
            <div className={styles.dayContainer} id="interText">
              <h3 className={styles.day}>Day</h3>
            </div>
            <div className={styles.weekContaiener} id="interText">
              <h3 className={styles.week}>Week</h3>
            </div>
            <div className={styles.monthContainer} id="interText">
              <h3 className={styles.month}>Month</h3>
            </div>
          </div>
          <div className={styles.timeSelect}>
            <div className={styles.monthSelectContainer}>
              <button className={styles.monthSelector}>Month</button>
            </div>
            <div className={styles.split}></div>
            <div className={styles.yearSelectContainer}>
              <button className={styles.yearSelector}>Year</button>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.testContaiener}>
              <div className={styles.blueCircle}></div>
              <h3 className={styles.test}></h3>Test
            </div>
            <div className={styles.hwContaiener}>
              <div className={styles.yellowCircle}></div>
              <h3 className={styles.hw}>Homework</h3>
            </div>
            <div className={styles.lessionContaiener}>
              <div className={styles.greenCircle}></div>
              <h3 className={styles.lession}>Lession</h3>
            </div>
          </div>
        </div>
        <div className={styles.calendarContaienr}>
          <div className={styles.calendar}>
            {days.map((day, i) => (
              <div className={styles.dayz} key={i}>
                <div className={styles.day_name}>{day}</div>
                {subjects
                  .slice(i)
                  .concat(subjects.slice(0, i))
                  .map((subject, j) => (
                    <div
                      className={`grid_item ${
                        colors[Math.floor(Math.random() * colors.length)]
                      }`}
                      key={j}
                    >
                      <div className={styles.subject}>{subject}</div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

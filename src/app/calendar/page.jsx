"use client";

import React from "react";
import styles from "./calendar.module.css";
import "./calendar.css";

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

  const grades = [8, 7, 9, 10, 9, 7, 10];
  const reasons = [
    "didn't know 2+2",
    "heart is on the other side",
    "made horse go backwards",
    "beautiful art",
    "he knew 1121",
    "didn't know deep meaning in ვეფხისტყაოსანი",
    "strong ashell",
  ];
  const colors = ["blue", "green", "yellow"];

  const handleSubjectClick = (subject, grade, reason) => {
    console.log(`Subject: ${subject} Grade: ${grade}, Reason: ${reason}`);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.controlContainer}>{/*... */}</div>
        <div className={styles.calendarContaienr}>
          <div className={styles.calendar}>
            {days.map((day, i) => (
              <div className={styles.dayz} key={i}>
                <div className={styles.day_name}>{day}</div>
                {subjects
                  .slice(i)
                  .concat(subjects.slice(0, i))
                  .map((subject, j) => {
                    const index = subjects.indexOf(subject);
                    return (
                      <div
                        className={`grid_item ${
                          colors[Math.floor(Math.random() * colors.length)]
                        }`}
                        key={j}
                        onClick={() =>
                          handleSubjectClick(
                            subject,
                            grades[index],
                            reasons[index]
                          )
                        }
                      >
                        <div className={styles.subject}>{subject}</div>
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

"use client";

import React, { useState } from "react";
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

  const materials = [
    "Addition, 2+2",
    "Anatomy of human",
    "Kinetic and potential energy",
    "Drawing apple",
    "Battle of didgori, 1121",
    "ვეფხისტყაოსანი",
    "Arm Wrestling",
  ];
  const colors = ["blue", "green", "yellow", "green", "green"];

  const attendance = ["Yes", "No", "Yes", "Yes"];

  const handleSubjectClick = (subject, grade, reason, attendance, material) => {
    console.log(`Subject: ${subject} Grade: ${grade}, Reason: ${reason}`);

    // Create a new div element with the class "infoBox"
    const div = document.createElement("div");
    div.className = styles.infoBox;

    // Set its content to the subject, grade, and reason values
    div.innerHTML = `
    <div style="display:flex">
      <p>Your Grade: ${grade} - <p class="whyText" style="margin-left:5px;background-color: #1e0786; color: white; border-radius:5px;width:55px;height:25px;">Why?</p></p>
      </div>
      <p>Attendance: ${attendance}</p>
      <div style="display:flex">
      <p>Material: <p style="text-decoration: underline;display:flex;">${material}</p></p>
      </div>
    `;

    // Add the div to the document body
    document.body.appendChild(div);

    // Position the div near the mouse cursor
    div.style.position = "absolute";
    div.style.left = event.clientX + "px";
    div.style.top = event.clientY + "px";

    // Create a new div element for the reason tip
    const reasonTip = document.createElement("div");
    reasonTip.className = styles.reasonTip;
    reasonTip.textContent = reason;

    // Add the reason tip to the document body
    document.body.appendChild(reasonTip);

    // Position the reason tip near the "Why?" element
    reasonTip.style.position = "absolute";
    reasonTip.style.left = event.clientX + "px";
    reasonTip.style.top = event.clientY + "px";

    // Add a mouseover event listener to the "Why?" element
    const whyEl = div.querySelector(".whyText");
    whyEl.addEventListener("mouseover", () => {
      reasonTip.style.display = "block";
    });

    // Add a mouseout event listener to the "Why?" element
    whyEl.addEventListener("mouseout", () => {
      reasonTip.style.display = "none";
    });

    // Remove the div when it is clicked
    div.addEventListener("click", () => {
      div.remove();
      reasonTip.remove();
    });

    // Remove the div when the user clicks somewhere else on the page
    document.addEventListener("click", (event) => {
      if (event.target !== div) {
        div.remove();
        reasonTip.remove();
      }
    });
  };

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
              <button className={styles.monthSelector}>May</button>
              <img
                src="icons/downArrow.svg"
                alt="arrIcon"
                className={styles.downArrow}
              />
            </div>
            <div className={styles.split}></div>
            <div className={styles.yearSelectContainer}>
              <button className={styles.yearSelector}>2024</button>
              <img
                src="icons/downArrow.svg"
                alt="arrIcon"
                className={styles.downArrow}
              />
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.testContaiener}>
              <div className={styles.blueCircle}></div>
              <h3 className={styles.test}></h3>Test
            </div>
            <div className={styles.hwContaiener}>
              <div className={styles.redCircle}>
                <img src="icons/hwIcon.svg" alt="hwIcon" />
              </div>
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
                  .map((subject, j) => {
                    const index = subjects.indexOf(subject);
                    const att = [Math.floor(Math.random() * attendance.length)];
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
                            reasons[index],
                            attendance[att],
                            materials[index]
                          )
                        }
                      >
                        <div className={styles.hwLogo}>
                          <img src="icons/hwIcon.svg" alt="hwIcon" />
                        </div>
                        <h3 className={styles.subject}>{subject}</h3>
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

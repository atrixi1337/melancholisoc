/* MELANCHOLISOC — the night never files its own tickets */
(function () {
  "use strict";

  /* --- the clock: it is always night somewhere in the bureau --- */
  var clocks = document.querySelectorAll("[data-clock]");
  function tick() {
    var now = new Date();
    var hh = String(now.getHours()).padStart(2, "0");
    var mm = String(now.getMinutes()).padStart(2, "0");
    var ss = String(now.getSeconds()).padStart(2, "0");
    clocks.forEach(function (el) {
      el.textContent = hh + ":" + mm + ":" + ss;
    });
  }
  tick();
  setInterval(tick, 1000);

  /* --- night counter: day № of the endless shift -------------- */
  var nights = document.querySelectorAll("[data-night]");
  if (nights.length) {
    var epoch = new Date("2023-03-01T00:00:00");
    var day = Math.floor((Date.now() - epoch.getTime()) / 86400000) + 1000;
    nights.forEach(function (el) {
      el.textContent = day.toLocaleString("en-US");
    });
  }

  /* --- marquee: duplicate content for a seamless loop --------- */
  var track = document.getElementById("marquee-track");
  if (track) track.innerHTML += track.innerHTML;

  /* --- typewriter for the hero dispatch line ------------------ */
  var LINES = [
    "the alert fired at 03:33, as it always does. nobody opened it. nobody closed it.",
    "there is no third floor. the click came from the third floor.",
    "ticket #4471 remains pending. the system apologizes every four hours.",
    "i have begun to find the false positives comforting. this concerns me.",
    "escalation tree: me, then the committee. the committee has not yet been formed."
  ];
  var typeEl = document.querySelector("[data-typewriter]");
  if (typeEl) {
    var li = 0, ci = 0, deleting = false;
    var cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.textContent = "\u258c";
    typeEl.after(cursor);
    (function type() {
      var line = LINES[li];
      if (!deleting) {
        ci++;
        typeEl.textContent = line.slice(0, ci);
        if (ci === line.length) {
          deleting = true;
          return setTimeout(type, 3400);
        }
        setTimeout(type, 34 + Math.random() * 40);
      } else {
        ci -= 3;
        if (ci <= 0) {
          ci = 0;
          deleting = false;
          li = (li + 1) % LINES.length;
          typeEl.textContent = "";
          return setTimeout(type, 600);
        }
        typeEl.textContent = line.slice(0, ci);
        setTimeout(type, 14);
      }
    })();
  }

  /* --- reveal on scroll ---------------------------------------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* --- 404: assign a ticket that will never be worked ---------- */
  var ticketEl = document.querySelector("[data-ticket]");
  if (ticketEl) {
    var n = Math.floor(4000 + Math.random() * 90000);
    ticketEl.textContent = "#" + n + "-PENDING";
  }

  /* --- footer year of the night -------------------------------- */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = "night " + new Date().getFullYear();
})();

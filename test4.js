const main = document.querySelector(".main");
const obj = {
  "core members": [
    { name: "Haripriya Chivukula", info: "Core Coordinator" },
    { name: "Sagar Gohil", info: "Core Coordinator" },
    { name: "Akshit Prajapati", info: "Core Coordinator" },
  ],
  "Web & app team": [
    { name: "Anubhav Shriwastava", info: "Web Development Lead" },
    { name: "Jyot Prajapati", info: "App Development Lead" },
    { name: "Kandarp Shah", info: "Web Development Lead" },
  ],
  documentation: [
    { name: "Bhoomi Patel", info: "Documentation Lead" },
    { name: "Hetvi Shah", info: "Documentation Lead" },
  ],
  "Graphic design": [
    { name: "Prabdeep Singh Ghatora", info: "Design Lead" },
    { name: "Anurag Sen", info: "Design Lead" },
  ],
  Publicity: [
    { name: "Parth Thakar", info: "Publicity Lead" },
    { name: "Krunalsinh Rana", info: "Publicity Lead" },
    { name: "Darpan Parekh", info: "Publicity Lead" },
  ],
  Logistics: [
    { name: "Dhruv Chadderwala", info: "Logistics Lead" },
    { name: "Kunal Rajpurohit", info: "Logistics Lead" },
    { name: "Nadir Ali Khoja", info: "Logistics Lead" },
    { name: "Vrund Thakkar", info: "Logistics Lead" },
  ],
  VFX: [{ name: "Yash Ranpariya", info: "VFX Lead" }],
  Decoration: [
    { name: "Darshan Modi", info: "Decoration Lead" },
    { name: "Vanshita Patel", info: "Decoration Lead" },
    { name: "Ayushi Upadhyay", info: "Decoration Lead" },
    { name: "Prashant Acharya", info: "Decoration Lead" },
  ],
  "Department coordinator": [
    { name: "Hemang Barai", info: "Departmental Coordinator (CL)" },
    { name: "Nidhi Patel", info: "Departmental Coordinator (CL)" },
    { name: "Dipti Rathod", info: "Departmental Coordinator (CH)" },
    { name: "Avni Chavda", info: "Departmental Coordinator (CH)" },
    { name: "Dhyey Dodiya", info: "Departmental Coordinator (CP)" },
    { name: "Dhruvi Vadariya", info: "Departmental Coordinator (CP)" },
    { name: "Rishi Sha", info: "Departmental Coordinator (EC)" },
    { name: "Richa Mishra", info: "Departmental Coordinator (EC)" },
    { name: "Helly Parikh", info: "Departmental Coordinator (EE)" },
    { name: "Dhaval Kalathiya", info: "Departmental Coordinator (EE)" },
    { name: "Kanti Patel", info: "Departmental Coordinator (IT)" },
    { name: "Dharvi Kaneriya", info: "Departmental Coordinator (IT)" },
    { name: "Shyama Kareliya", info: "Departmental Coordinator (MC)" },
    { name: "Dhruvil Nakum", info: "Departmental Coordinator (MC)" },
    { name: "Harsh joshi", info: "Departmental Coordinator (ME)" },
    { name: "Sarang Pandya", info: "Departmental Coordinator (ME)" },
  ],
};

createRow = (title, data) => {
  const row = document.createElement("div");
  row.classList.add("row");
  row.innerHTML = `<div class="title"><p>${title}</p></div>`;
  data.forEach((e) => {
    const card = document.createElement("div");
    card.classList.add("show");
    card.innerHTML = `
        
        <img src="assets/${e.name}.png">
        <div class="data">
            <p>${e.name}</p>
            <p>${e.info}</p>
        </div>
        
        `;
    row.appendChild(card);
  });
  main.appendChild(row);
};
for (o in obj) {
  createRow(o, obj[o]);
}

//scroll trigger thanks medium.blogs ^_^

function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector);
  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el, options);
  });
}
function addObserver(el, options) {
  // Check if `IntersectionObserver` is supported
  if (!("IntersectionObserver" in window)) {
    // Simple fallback
    // The animation/callback will be called immediately so
    // the scroll animation doesn't happen on unsupported browsers
    if (options.cb) {
      options.cb(el);
    } else {
      entry.target.classList.add("active");
    }
    // We don't need to execute the rest of the code
    return;
  }

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(el);
        } else {
          entry.target.classList.add("active");
        }
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(el);
}
scrollTrigger(".title");

//   scrollTrigger('.data')

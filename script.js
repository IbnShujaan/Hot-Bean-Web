const names = ["Alex", "Jamie", "Taylor", "Jordan", "Morgan"];
const experiences = ["1 year", "2 years", "3 years", "5 years", "No experience"];
const dob = ["1995-06-12", "1998-11-30", "2000-04-15", "1992-09-21"];

function loadTrainees() {
    const container = document.getElementById('trainees');
    for (let i = 0; i < 5; i++) {
        const div = document.createElement('div');
        div.className = 'profile-block';
        div.innerHTML = `<strong>Name:</strong> ${names[Math.floor(Math.random()*names.length)]}<br>
                         <strong>DOB:</strong> ${dob[Math.floor(Math.random()*dob.length)]}<br>
                         <strong>Experience:</strong> ${experiences[Math.floor(Math.random()*experiences.length)]}`;
        container.appendChild(div);
    }
}

function loadJobSpec() {
    const specs = ["Front-End Developer", "Full-Stack Web Engineer", "Backend Developer"];
    const requirements = [
        "BSc in Computer Science or equivalent",
        "At least 2 years experience with JavaScript and React",
        "Understanding of RESTful APIs",
        "Excellent communication skills"
    ];
    document.getElementById('job-title').textContent = specs[Math.floor(Math.random()*specs.length)];
    const reqList = document.getElementById('job-reqs');
    requirements.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        reqList.appendChild(li);
    });
}
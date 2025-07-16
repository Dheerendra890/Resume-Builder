document.getElementById('resumeForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const resumeData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        education: document.getElementById('education').value,
        experience: document.getElementById('experience').value,
        skills: document.getElementById('skills').value,
    };

    const response = await fetch('http://localhost:5000/api/resume', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(resumeData),
    });

    const data = await response.json();
    document.getElementById('message').innerText = data.message;
});

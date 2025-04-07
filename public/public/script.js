document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
  
    await fetch('/feedbacks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message })
    });
  
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
    loadFeedbacks();
  });
  
  async function loadFeedbacks() {
    const res = await fetch('/feedbacks');
    const feedbacks = await res.json();
  
    const list = document.getElementById('feedbackList');
    list.innerHTML = '';
    feedbacks.forEach(fb => {
      const div = document.createElement('div');
      div.className = 'feedback';
      div.innerHTML = `<strong>${fb.name}</strong>: ${fb.message}`;
      list.appendChild(div);
    });
  }
  
  loadFeedbacks();
  
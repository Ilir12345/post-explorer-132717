
// RegisterPost component

import { useState } from 'react';

function RegisterPost({ onAdd, titleRef }) {
  const [form, setForm] = useState({
    title: '',
    userId: '',
    body: '',
    featured: false,
    category: 'News'
  });
  const [err, setErr] = useState('');

  const handleSubmit = () => {
    if (!form.title.trim()) { setErr('Title must not be empty'); return; }
    if (!form.userId || Number(form.userId) <= 0) { setErr('User ID must be a positive number greater than zero'); return; }
    setErr('');
    onAdd({ ...form, userId: Number(form.userId), featured: form.featured, category: form.category });
    setForm({ title: '', userId: '', body: '', featured: false, category: 'News' });
    if (titleRef.current) titleRef.current.focus();
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>Register New Post</h2>
      {err && <p style={{ color: 'red' }}>{err}</p>}
      <input ref={titleRef} placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} /><br /><br />
      <input placeholder="User ID" type="number" value={form.userId} onChange={e => setForm({ ...form, userId: e.target.value })} /><br /><br />
      <textarea placeholder="Body" value={form.body} onChange={e => setForm({ ...form, body: e.target.value })} /><br /><br />
      <label><input type="checkbox" checked={form.featured} onChange={e => setForm({ ...form, featured: e.target.checked })} /> Featured</label><br /><br />
      <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
        <option value="News">News</option>
        <option value="Opinion">Opinion</option>
        <option value="Tutorial">Tutorial</option>
      </select><br /><br />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default RegisterPost;
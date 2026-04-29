// useRef and useCallback

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import PostCard from './components/PostCard';
import RegisterPost from './components/RegisterPost';

// Student: Ilir Bajrami | ID: 132717

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = () => {
    setLoading(true);
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setPosts(data.map(post => ({
          ...post,
          featured: false,
          category: "News"
        })));
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => { fetchPosts(); }, []);

  const addPost = useCallback((newPost) => {
    setPosts(prev => [...prev, { ...newPost, id: Date.now() }]);
  }, []);

  const totalCount = useMemo(() => posts.length, [posts]);

  const titleRef = useRef(null);

  if (loading) return <p>Loading posts...</p>;
  if (error) return (
    <div>
      <p>Error: {error}</p>
      <button onClick={fetchPosts}>Retry</button>
    </div>
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Post Explorer</h1>
      <p><strong>Total posts: {totalCount}</strong></p>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
      <RegisterPost onAdd={addPost} titleRef={titleRef} />
    </div>
  );
}

export default App;
function PostCard({ post }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', margin: '10px 0', backgroundColor: '#f9f9f9' }}>
      <p><strong>ID:</strong> {post.id}</p>
      <p><strong>User ID:</strong> {post.userId}</p>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p><strong>Category:</strong> {post.category}</p>
      <p><strong>Featured:</strong> {post.featured ? 'Yes' : 'No'}</p>
      {post.featured === true && <p style={{ color: 'gold', fontWeight: 'bold' }}>⭐ Featured post</p>}
      {post.category === 'Tutorial' && <p style={{ color: 'blue', fontWeight: 'bold' }}>📚 Tutorial category</p>}
    </div>
  );
}

export default PostCard;
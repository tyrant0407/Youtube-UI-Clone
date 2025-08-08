function Comments() {
    const dummyComments = [
      { id: 1, user: "John Doe", avatar: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=", text: "Great video! Really enjoyed it." },
      { id: 2, user: "Jane Smith", avatar: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=", text: "Thanks for the explanation, very helpful." },
      { id: 3, user: "Alex Brown", avatar: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=", text: "Could you make a tutorial on advanced topics?" }
    ];
  
    return (
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4 text-white">Comments</h2>
  
        {/* Comment Input */}
        <div className="flex items-start gap-3 mb-6">
          <img
            src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <textarea
            placeholder="Add a comment..."
            className="flex-1 border-b border-gray-300 focus:outline-none focus:border-black resize-none p-1"
            rows="1"
          ></textarea>
        </div>
  
        {/* Comment List */}
        {dummyComments.map((c) => (
          <div key={c.id} className="flex gap-3 mb-4">
            <img
              src={c.avatar}
              alt={c.user}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold text-white">
                {c.user} <span className="text-xs">• 2 days ago</span>
              </p>
              <p className="text-sm text-gray-500">{c.text}</p>
              <div className="flex gap-4 mt-1 text-sm text-gray-500">
                <button><i className="ri-thumb-up-line"></i> 5</button>
                <button><i className="ri-thumb-down-line"></i></button>
                <button>Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Comments;
  
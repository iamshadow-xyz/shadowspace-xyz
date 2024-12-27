import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [summary, setSummary] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      summary,
      coverImageUrl,
      content: value,
    };
    console.log(postData);
    // You can add code here to send postData to your server
  };

  return (
    <div className="max-w-2xl mx-auto mt-24 p-4">
      <h1 className="text-3xl mb-6">Create Post</h1>
      <form onSubmit={handleSubmit} className="p-4 border border-[#dadada30]">
        <div className="mb-4">
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border border-[#dadada30] w-full bg-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Content:</label>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Summary:</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="p-2 border border-[#dadada30] w-full bg-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Cover Image URL:</label>
          <input
            type="text"
            value={coverImageUrl}
            onChange={(e) => setCoverImageUrl(e.target.value)}
            className="p-2 border border-[#dadada30] w-full bg-transparent"
            required
          />
        </div>
        <button type="submit" className="p-2 bg-red-400 text-white w-full">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default Create;

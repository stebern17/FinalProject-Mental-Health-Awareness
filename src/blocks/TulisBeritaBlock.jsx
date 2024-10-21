import React, { useState } from "react";

export default function TulisBeritaBlock() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi sederhana
    if (!title || !content || !author) {
      setErrorMessage("Semua kolom harus diisi.");
      return;
    }
    // Proses submit
    const newArticle = {
      title,

      content,
      author,
      tags: tags.split(",").map((tag) => tag.trim()), // Memisahkan tag dengan koma
    };
    console.log(newArticle);

    // Setelah berhasil disubmit, bersihkan form
    setTitle("");
    setContent("");
    setAuthor("");
    setTags("");
    setErrorMessage("");
    alert("Berita berhasil dikirim!");
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl bg-white rounded-lg shadow-lg">
      {errorMessage && (
        <p className="text-red-500 text-center mb-4">{errorMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Judul Berita */}
        <div>
          <label className="block text-sm font-medium text-[#16423C] mb-2">
            Judul Berita
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#16423C] focus:ring-[#16423C]"
            placeholder="Masukkan judul berita"
          />
        </div>

        {/* Konten Berita */}
        <div>
          <label className="block text-sm font-medium text-[#16423C] mb-2">
            Konten Berita
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#16423C] focus:ring-[#16423C]"
            rows="6"
            placeholder="Tulis isi berita di sini"
          ></textarea>
        </div>

        {/* Penulis */}
        <div>
          <label className="block text-sm font-medium text-[#16423C] mb-2">
            Penulis
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#16423C] focus:ring-[#16423C]"
            placeholder="Masukkan nama penulis"
          />
        </div>

        {/* Tag Berita */}
        <div>
          <label className="block text-sm font-medium text-[#16423C] mb-2">
            Tag Berita
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#16423C] focus:ring-[#16423C]"
            placeholder="Masukkan tag (pisahkan dengan koma)"
          />
        </div>

        {/* Tombol Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#16423C] text-white px-6 py-2 rounded-md hover:bg-[#6A9C89] transition duration-300"
          >
            Kirim Berita
          </button>
        </div>
      </form>
    </div>
  );
}

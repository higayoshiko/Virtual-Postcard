class ImgUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "gro0aggm");

    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dvphd4uly/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}
export default ImgUploader;

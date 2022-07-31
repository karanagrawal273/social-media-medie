const STORAGE_URL = "https://api.cloudinary.com/v1_1/dws2rvgyv/image/upload";
export default async function upload(file) {
  const url = STORAGE_URL;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "posts_preset");
  formData.append("api_key", "PJBJPuaD3DzPUIQ4srmidUqXEis");

  try {
    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.secure_url;
  } catch (err) {
    return "";
  }
}
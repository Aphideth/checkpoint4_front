import axios from "axios";
import { useState } from "react";

const DashboardAdmin = () => {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/admin", {
  //       headers: { "x-access-token": localStorage.getItem("token") },
  //     })
  //     .then(({ data }) => {
  //       console.log(data);
  //     });
  // });

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const formData = new FormData();
  // const config = {
  //   headers: { "content-type": "multipart/form-data" },
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && image && description && category) {
      await axios
        .post("http://localhost:8000/", {
          name: name,
          image: image,
          description: description,
          id_category: category,
        })
        .then(({ data }) => {
          if (data.error) setError(data.error);
          else {
            setError("");
            setName("");
            setImage("");
            setDescription("");
            setCategory("");
          }
        });
      window.location.href = "/";
    } else setError("All fields are required");
  };

  return (
    <div className="text-center">
      <h1>Add recipe</h1>
      <div>
        <form onSubmit={handleSubmit}>
          {error && <p className="register-error">{error}</p>}
          <div>
            <div>
              <div>
                <h3>New recipe</h3>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium font-bold text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <div>
                  <label htmlFor="image">Image</label>
                  <div>
                    <input
                      type="text"
                      name="image"
                      id="image"
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="Description">Description</label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    placeholder="Presentation"
                    defaultValue={""}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Category">Category</label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    placeholder="Category"
                    defaultValue={""}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
              </div>

              <div className="px-5 py-5 bg-white text-right sm:px-6">
                <button type="submit" value="Send">
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardAdmin;

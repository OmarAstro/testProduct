import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

const ExploreMenu = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await fetch("https://api.example.com/products");
        const response = await fetch("data.json");

        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);

        // Extract unique categories from the product data
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(["all", ...uniqueCategories]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);

    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div
      className="d-flex align-items-center flex-column p-2 container-fluid"
      style={{ marginTop: "100px" }}
    >
      <h1 className=" mb-4 omar">Our Products</h1>
      <div>
        {/* <label htmlFor="category-filter">Product:</label> */}
        <div
          className="d-flex flex-wrap justify-content-center gap-3 mb-4 "
          id="category-filter"
          value={selectedCategory}
        >
          {categories.map((category) => (
            <button
              onClick={handleCategoryChange}
              className="btn btn-outline-dark btn m-2 "
              key={category}
              value={category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid d-flex flex-wrap justify-content-center  ">
        {filteredProducts.map((product) => (
          <MDBCard
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            key={product.id}
            // className={` ${index % 2 === 0 ? "" : ""}`}
            className="col-xs-12 col-sm-6 col-lg-4 col-xl-4 btn-outline-light
          btn"
            style={{
              // backgroundImage: `url(${product.image}+)`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
              maxWidth: "500px",
              padding: "2rem",
              borderRadius: "10px",
              margin: "1rem",
            }}
          >
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  style={{
                    aspectRatio: "4/5",
                    objectFit: "",
                    borderRadius: "10px",
                  }}
                  src={product.image}
                  alt="..."
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>
                    {product.title.substring(0, 15)}...
                  </MDBCardTitle>
                  <MDBCardText>
                    {product.description.substring(0, 40)}...
                  </MDBCardText>
                  <MDBCardText>
                    <button
                      className="btn btn-outline-dark  align-items-end justify-content-end "
                      variant="light"
                      href={`/products/${product.id}`}
                    >
                      View Details
                    </button>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;

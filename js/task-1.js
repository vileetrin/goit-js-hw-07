const categories = document.querySelector("#categories");
const categoriesItems = document.querySelectorAll("li.item");

console.log("Number of categories: ", categoriesItems.length);

categoriesItems.forEach((item) => {
    const categoriesTitle = item.querySelector("h2").textContent;
    const categoriesListItems = item.querySelectorAll("li");

    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${categoriesListItems.length}`);
});



function selectCategory() {
    const catergoriesList = document.getElementById("categories").value;
    const drinksList = document.getElementById("drinksList");
    const entreesList = document.getElementById("entreesList");
    const dessertsList = document.getElementById("dessertsList");
    drinksList.style.display = "none";
    entreesList.style.display = "none"
    dessertsList.style.display = "none";
    if (catergoriesList == "drinks") {
         drinksList.style.display = "block"
    } else if (catergoriesList == "entrees") {
        entreesList.style.display = "block"
    } else if (catergoriesList == "desserts") {
         dessertsList.style.display = "block"
    } else {
        alert("Are you not hungry?")
    }
} 
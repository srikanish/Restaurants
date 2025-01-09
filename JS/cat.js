
const items = [
    { name: "Buffalo Bits", category: "All,Main Dish", description: "Spicy cauliflower with ranch.", type: "Vegetarian", price: "$13.00", img: "../FOOD_IMG/Buffalo Bits.jpg" },
    { name: "Beef Steak", category: "All,Main Dish", description: "Tender beef steak with garlic butter.", type: "Non-Vegetarian", price: "$25.00", img: "C:/Users/lenovo/OneDrive/Desktop/FOOD WEB/FOOD_IMG/Beef Steak.jpg" },
    { name: "Pasta Alfredo", category: "All,Main Dish", description: "Creamy pasta with Alfredo sauce.", type: "Vegetarian", price: "$14.00", img: "C:/Users/lenovo/OneDrive/Desktop/FOOD WEB/FOOD_IMG/Pasta Alfredo.jpg" },
    { name: "Vegetable Stir-Fry", category: "All,Main Dish", description: "Fresh veggies stir-fried in soy sauce.", type: "Vegetarian", price: "$12.00", img: "C:/Users/lenovo/OneDrive/Desktop/FOOD WEB/FOOD_IMG/veggie_stirfry.jpg" },
    { name: "Shrimp Scampi", category: "All,Main Dish", description: "Succulent shrimp with garlic and butter.", type: "Non-Vegetarian", price: "$22.00", img: "C:/Users/lenovo/OneDrive/Desktop/FOOD WEB/FOOD_IMG/Shrimp Scampi.jpg" },
    { name: "French Fries", category: "All,Appetizers", description: "Crispy golden fries.", type: "Vegetarian", price: "$5.00", img: "C:/Users/lenovo/OneDrive/Desktop/FOOD WEB/FOOD_IMG/french_fries.jpg" },
    { name: "Chocolate Cake", category: "All,Dessert", description: "Rich and moist chocolate cake.", type: "Vegetarian", price: "$7.00", img: "../FOOD_IMG/chocolate_cake.jpg" },
    { name: "Margherita Pizza", category: "All,Pizza", description: "Fresh tomatoes, mozzarella, and basil.", type: "Vegetarian", price: "$12.00", img: "../FOOD_IMG/margherita_pizza.jpg" },
    { name: "Pepperoni Pizza", category: "All,Pizza", description: "Pepperoni, mozzarella, and tomato sauce.", type: "Non-Vegetarian", price: "$15.00", img: "../FOOD_IMG/pepperoni_pizza.jpg" },
    { name: "BBQ Chicken Pizza", category: "All,Pizza", description: "Grilled chicken, BBQ sauce, red onions.", type: "Non-Vegetarian", price: "$16.00", img: "../FOOD_IMG/bbq_chicken_pizza.jpg" },
    { name: "Iced Lemon Tea", category: "All,Beverages", description: "Refreshing iced lemon tea.", type: "Vegetarian", price: "$3.00", img: "../FOOD_IMG/iced_lemon_tea.jpg" },
    { name: "Espresso Coffee", category: "All,Beverages", description: "Strong espresso shot to wake you up.", type: "Vegetarian", price: "$4.00", img: "../FOOD_IMG/espresso_coffee.jpg" },
    { name: "Margherita Pizza", category: "All,Pizza", description: "Fresh tomatoes, mozzarella, and basil.", type: "Vegetarian", price: "$12.00", img: "../FOOD_IMG/Margherita pizza.jpg" },
    { name: "Pepperoni Pizza", category: "All,Pizza", description: "Pepperoni, mozzarella, and tomato sauce.", type: "Non-Vegetarian", price: "$15.00", img: "../FOOD_IMG/Pepperoni .jpg" },
    { name: "BBQ Chicken Pizza", category: "All,Pizza", description: "Grilled chicken, BBQ sauce, red onions, and cilantro.", type: "Non-Vegetarian", price: "$16.00", img: "../FOOD_IMG/BBQ Chicken _pizza.jpg" },
    { name: "Veggie Supreme Pizza", category: "All,Pizza", description: "Tomatoes, mozzarella, basil, and mozzarella.", type: "Vegetarian", price: "$14.00", img: "../FOOD_IMG/Veggie Delight_pizza.jpg" },
    { name: "Four Cheese Pizza", category: "All,Pizza", description: "Mozzarella, Parmesan, Gouda.", type: "Vegetarian", price: "$13.00", img: "../FOOD_IMG/Four Cheese _pizza.jpg" },
    //Appetizers
    { name: "Four Cheese Pizza", category: "All,Appetizers", description: "Mozzarella, Parmesan, Gouda.", type: "Vegetarian", price: "$13.00", img: "../FOOD_IMG/Four Cheese _pizza.jpg" },
    { name: "Garlic Bread ", category: "All,Appetizers", description: "Cheese, salt, tomato.", type: "Non-Vegetarian", price: "$14.00", img: "../FOOD_IMG/preview.jpg" },
    { name: "Mozzarella Sticks", category: "All,Appetizers", description: "Mozzarella with marinara.", type: "Non-Vegetarian", price: "$14.00", img: "../FOOD_IMG/preview.jpg" },
    { name: "Shrimp Cocktail ", category: "All,Appetizers", description: "Shrimp with cocktail.", type: "Non-Vegetarian", price: "$14.00", img: "../FOOD_IMG/preview.jpg" },
    { name: "Deviled Eggs", category: "All,Appetizers", description: "Eggs with paprika.", type: "Non-Vegetarian", price: "$14.00", img: "../FOOD_IMG/preview.jpg" },
    { name: "Bruschetta ", category: "All,Appetizers", description: "Meatballs with marinara sauce", type: "Non-Vegetarian", price: "$14.00", img: "../FOOD_IMG/preview.jpg" },
    { name: "Hummus with Pita", category: "All,Appetizers", description: "Meatballs with marinara sauce", type: "Non-Vegetarian", price: "$14.00", img: "../FOOD_IMG/preview.jpg" },
    { name: "Mushrooms", category: "All,Appetizers", description: "Meatballs with marinara sauce", type: "Non-Vegetarian", price: "$14.00", img: "../FOOD_IMG/preview.jpg" },
    { name: "Caprese Skewers", category: "All,Appetizers", description: "Meatballs with marinara sauce", type: "Non-Vegetarian", price: "$14.00", img: "../FOOD_IMG/preview.jpg" },
    { name: "Buffalo Bits", category: "All,Appetizers", description: "Meatballs with marinara sauce", type: "Non-Vegetarian", price: "$14.00", img: "../FOOD_IMG/preview.jpg" },  


{ name: "Meatballs", category: "All,Appetizers", description: "Meatballs with marinara sauce", type: "Non-Vegetarian", price: "$18.00", img: "../FOOD_IMG/preview.jpg" },
{ name: "Spicy Potato", category: "All,Appetizers", description: "Chili, pota to, Salt.", type: "Vegetarian", price: "$12.00", img: "C:/Users/lenovo/OneDrive/Desktop/FOOD WEB/FOOD_IMG/spicy potato.webp" },
{ name: "Garlic Bread", category: "All,Appetizers", description: "Cheese, salt, tomato.", type: "Vegetarian", price: "$12.00", img: "../FOOD_IMG/Garlic Bread.jpeg" },
{ name: "Italian Nachos", category: "All,Appetizers", description: "Cheese, garlic, salt, tomato.", type: "Non-Vegetarian", price: "$23.00", img: "../FOOD_IMG/Italian-Nachos.jpg" },
{ name: "Chicken Wings", category: "All,Appetizers", description: "BBQ, honey mustard.", type: "Non-Vegetarian", price: "$15.00", img: "../FOOD_IMG/Chicken Wings.jpg" },
{ name: "Mozzarella Sticks", category: "All,Appetizers", description: "Mozzarella with marinara.", type: "Vegetarian", price: "$13.00", img: "../FOOD_IMG/Mozzarella Sticks.jpg " },
{ name: "Spring Rolls", category: "All,Appetizers", description: "Veggie rolls with chili sauce", type: "Non-Vegetarian", price: "$14.00", img: "../FOOD_IMG/spring roll.avif" },
{ name: "Hummus with Pita", category: "All,Appetizers", description: "Meatballs with marinara sauce", type: "Non-Vegetarian", price: "$14.00", img: "../FOOD_IMG/Hummus with Pita.jpg" },
{ name: "Mushrooms", category: "All,Appetizers", description: "Mushrooms with cheese.", type: "Vegetarian", price: "$14.00", img: "../FOOD_IMG/mushroom.jpg" },
{ name: "Bruschetta", category: "All,Appetizers", description: "Toasted bread with tomatoes.", type: "Vegetarian", price: "$10.00", img: "../FOOD_IMG/Bruschetta.jpg" },
{ name: "Shrimp Cocktail", category: "All,Appetizers", description: "Shrimp with cocktail.", type: "Seafood", price: "$20.00", img: "../FOOD_IMG/Shrimp Cocktail.jpg" },
{ name: "Deviled Eggs", category: "All,Appetizers", description: "Eggs with paprika.", type: "Vegetarian", price: "$9.00", img: "../FOOD_IMG/Deviled Eggs.jpg" },
{ name: "Caprese Skewers", category: "All,Appetizers", description: "Tomatoes, mozzarella, basil.", type: "Vegetarian", price: "$12.00", img: "../FOOD_IMG/Caprese Skewers.webp" },
{ name: "Buffalo Bits", category: "All,Appetizers", description: "Spicy cauliflower with ranch.", type: "Vegetarian", price: "$13.00", img: "../FOOD_IMG/Buffalo Bits.jpg" },
{ name: "Tomato Soup", category: "All,Appetizers", description: "Fresh tomatoes, herbs.", type: "Vegetarian", price: "$10.00", img: "../FOOD_IMG/Tomato Soup.jpg" },
{ name: "Chicken Noodle", category: "All,Appetizers", description: "Chicken, noodles.", type: "Vegetarian", price: "$11.00", img: "../FOOD_IMG//Chicken Noodle.jpg" },
{ name: "French Onion", category: "All,Appetizers", description: "Onions, cheese.", type: "Vegetarian", price: "$12.00", img: "../FOOD_IMG/French Onion.jpg" },
{ name: "Caesar Soup", category: "All,Appetizers", description: "Romaine, croutons, Parmesan", type: "Vegetarian", price: "$14.00", img: "../FOOD_IMG/Caesar Salad.jpg" },
{ name: "Greek Soup", category: "All,Appetizers", description: "Greens, tomatoes, cucumbers.", type: "Non-Vegetarian", price: "$13.00", img: "../FOOD_IMG/Greek Salad.jpg" },
{ name: "Garden Soup", category: "All,Appetizers", description: "Greens, tomatoes, cucumbers.", type: "Vegetarian", price: "$13.00", img: "../FOOD_IMG/Garden Salad.jpg" },
{ name: "Mushroom Soup", category: "All,Appetizers", description: "Mushrooms, cream, herbs.", type: "Vegetarian", price: "$10.00", img: "../FOOD_IMG/Mushroomsoup.jpg" },

{ name: "Caprese Soup", category: "All,Appetizers", description: "Tomatoes, mozzarella, basil.", type: "Vegetarian", price: "$12.00", img: "../FOOD_IMG/Caprese Salad.jpg" },
{ name: "Spinach Soup", category: "All,Appetizers", description: "Spinach, strawberries,feta.", type: "Vegetarian", price: "$13.00", img: "../FOOD_IMG/Spinach Salad.jpg" },
{ name: "Grilled Chicken", category: "All,Appetizers", description: "Fresh tomatoes, herbs.", type: "Non-Vegetarian", price: "$10.00", img: "../FOOD_IMG/grill1.jpg" },
{ name: "Pasta Alfredo", category: "All,Appetizers", description: "Chicken, noodles.", type: "Vegetarian", price: "$11.00", img: "../FOOD_IMG/Pasta Alfredo.jpg" },
{ name: "Beef Steak", category: "All,Appetizers", description: "Vegetables, pasta, beans", type: "Vegetarian", price: "$16.00", img: "../FOOD_IMG/Beef Steak.jpg" },
{ name: "Vegetable Stir-Fry", category: "All,Appetizers", description: "Onions, cheese.", type: "Vegetarian", price: "$12.00", img: "../FOOD_IMG//Vegetable Stir-Fry.jpg" },
{ name: "Salmon", category: "All,Appetizers", description: "Romaine, croutons, Parmesan.", type: "Vegetarian", price: "$14.00", img: "../FOOD_IMG/Salmon.jpg" },
{ name: "Chicken Parmesan", category: "All,Appetizers", description: "Greens, tomatoes, cucumbers.", type: "Non-Vegetarian", price: "$13.00", img: "../FOOD_IMG/Chicken Parmesan.jpg" },
{ name: "Veggie Burger", category: "All,Appetizers", description: "Greens, tomatoes, cucumbers.", type: "Vegetarian", price: "$13.00", img: "../FOOD_IMG/Mushroomsoup.jpg" },
{ name: "Lamb Chops", category: "All,Appetizers", description: "Mushrooms, cream, herbs.", type: "Vegetarian", price: "$10.00", img: "../FOOD_IMG/Lamb Chops.jpg" },
{ name: "Shrimp Scampi", category: "All,Appetizers", description: "Tomatoes, mozzarella, basil.", type: "Vegetarian", price: "$12.00", img: "../FOOD_IMG/Shrimp Scampi.jpg" },
{ name: "BBQ Ribs", category: "All,Appetizers", description: "Spinach, strawberries,feta.", type: "Vegetarian", price: "$13.00", img: "../FOOD_IMG/BBQ Ribs.jpg" },
{ name: "Classic Lemonade", category: "All,Appetizers", description: "Freshly squeezed lemons with a hint of sweetness.", type: "Vegetarian", price: "$5.00", img: "../FOOD_IMG/Lemonade19-3.jpg" },
{ name: "Fresh Orange", category: "All,Appetizers", description: "Freshly squeezed oranges for a refreshing taste.", type: "Vegetarian", price: "$6.00", img: "../FOOD_IMG/Fresh Orange Juice.jpg" },
{ name: "Sparkling Water", category: "All,Appetizers", description: "Sparkling refreshing carbonated water.", type: "Vegetarian", price: "$4.00", img: "../FOOD_IMG/Sparkling Water.jpg" },


{ name: "Espresso Coffee", category: "All,Appetizers", description: "Rich, aromatic, and bold espresso coffee.", type: "Vegetarian", price: "$7.00", img: "../FOOD_IMG/Espresso Coffee.jpg" },
{ name: "Iced Lemon Tea", category: "All,Appetizers", description: "Chilled tea with lemon for a refreshing sip.", type: "Vegetarian", price: "$5.00", img: "../FOOD_IMG/Iced Lemon Tea.jpg" },
{ name: "Tiramisu", category: "All,Appetizers", description: "coffee-soaked ladyfingers and mascarpone cream.", type: "Dessert", price: "$7.00", img: "../FOOD_IMG/Tiramisu.jpg" },
{ name: "Chocolate Lava", category: "All,Appetizers", description: "molten center, vanilla ice cream.", type: "Dessert", price: "$8.00", img: "../FOOD_IMG/Chocolate Lava Cake.jpg" },
{ name: "Panna Cotta", category: "All,Appetizers", description: "Silky vanilla custard topped with berry sauce.", type: "Dessert", price: "$5.00", img: "../FOOD_IMG/Panna Cotta.jpg" },
{ name: "Gelato", category: "All,Appetizers", description: "pistachio, chocolate, and vanilla.", type: "Dessert", price: "$4.00", img: "../FOOD_IMG/Gelato .jpg" },
{ name: "Cheesecake", category: "All,Appetizers", description: "Creamy cheesecake with a graham cracker croutons.", type: "Dessert", price: "$6.00", img: "../FOOD_IMG/Cheesecake .jpg" },
{ name: "Margherita pizza", category: "All,Appetizers", description: "Fresh tomatoes, mozzarella, and basil.", type: "Vegetarian", price: "$14.00", img: "../FOOD_IMG/Margherita pizza.jpg" },
{ name: "Pepperoni Pizza", category: "All,Appetizers", description: "Pepperoni, mozzarella, and tomato sauce.", type: "Non-Vegetarian", price: "$15.00", img: "../FOOD_IMG/Pepperoni .jpg" },




  ];

function displayItemsByCategory(category) {
    const itemContainer = document.getElementById("item-container");
    itemContainer.innerHTML = "";
    items.forEach((item) => {
        if (item.category.includes(category) || category === 'All') {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cat_main");

            const itemImage = document.createElement("img");
            itemImage.src = item.img || "placeholder.jpg";  
            itemImage.classList.add("cat_img");
            itemElement.appendChild(itemImage);

            const itemName = document.createElement("h2");
            itemName.textContent = item.name;
            itemElement.appendChild(itemName);

            if (item.description) {
                const itemDescription = document.createElement("div");
                itemDescription.classList.add("description");
                itemDescription.textContent = item.description;
                itemElement.appendChild(itemDescription);
            }

            if (item.type) {
                const itemType = document.createElement("div");
                itemType.classList.add("type");
                itemType.textContent = item.type;
                itemElement.appendChild(itemType);
            }

            if (item.price) {
                const itemPrice = document.createElement("div");
                itemPrice.classList.add("price");
                itemPrice.textContent = `Price: ${item.price}`;
                itemElement.appendChild(itemPrice);
            }

            const addButton = document.createElement("button");
            addButton.textContent = "Add To Cart";
            addButton.onclick = () => addToCart(item.name);
            itemElement.appendChild(addButton);

            itemContainer.appendChild(itemElement);
        }
    });
}

function addToCart(itemName) {
    alert(`${itemName} has been added to your cart!`);
}
displayItemsByCategory('All');
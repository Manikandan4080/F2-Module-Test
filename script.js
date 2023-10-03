const recipies = [
    {
      name: "Veggie Delight",
      imageSrc: "https://source.unsplash.com/random?veggies",
      time: "30 min",
      type: "veg",
      isLiked: false,
      rating: 4.2,
    },
    {
      name: "Chicken Grill",
      imageSrc: "https://source.unsplash.com/random?chicken",
      time: "45 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.5,
    },
    {
      name: "Cheese Pizza",
      imageSrc: "https://source.unsplash.com/random?pizza",
      time: "40 min",
      type: "veg",
      isLiked: false,
      rating: 4.1,
    },
    {
      name: "Steak",
      imageSrc: "https://source.unsplash.com/random?steak",
      time: "60 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.7,
    },
    {
      name: "Grilled Salmon",
      imageSrc: "https://source.unsplash.com/random?salmon",
      time: "50 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.6,
    },
    {
      name: "Tomato Pasta",
      imageSrc: "https://source.unsplash.com/random?pasta",
      time: "35 min",
      type: "veg",
      isLiked: false,
      rating: 4.0,
    },
    {
      name: "Vegan Salad",
      imageSrc: "https://source.unsplash.com/random?salad",
      time: "20 min",
      type: "veg",
      isLiked: false,
      rating: 3.9,
    },
    {
      name: "Fried Chicken",
      imageSrc: "https://source.unsplash.com/random?friedChicken",
      time: "55 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.3,
    },
    {
      name: "Mushroom Risotto",
      imageSrc: "https://source.unsplash.com/random?risotto",
      time: "45 min",
      type: "veg",
      isLiked: false,
      rating: 4.5,
    },
    {
      name: "Burger",
      imageSrc: "https://source.unsplash.com/random?burger",
      time: "30 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.2,
    },
    {
      name: "Paneer Tikka",
      imageSrc: "https://source.unsplash.com/random?paneerTikka",
      time: "40 min",
      type: "veg",
      isLiked: false,
      rating: 4.4,
    },
    {
      name: "BBQ Ribs",
      imageSrc: "https://source.unsplash.com/random?ribs",
      time: "70 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.6,
    },
    {
      name: "Caesar Salad",
      imageSrc: "https://source.unsplash.com/random?caesarSalad",
      time: "25 min",
      type: "veg",
      isLiked: false,
      rating: 3.8,
    },
    {
      name: "Fish Tacos",
      imageSrc: "https://source.unsplash.com/random?fishTacos",
      time: "35 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.3,
    },
    {
      name: "Chocolate Cake",
      imageSrc: "https://source.unsplash.com/random?chocolateCake",
      time: "90 min",
      type: "veg",
      isLiked: false,
      rating: 4.9,
    },
  ];
  

  const recipieContainer = document.getElementById("myCont");
  
  function addRecipe(item){
      const cont = document.createElement("div");
      cont.className="card";
  
      const recImg = document.createElement('img');
      recImg.src = item.imageSrc;
      cont.appendChild(recImg)
  
      const veg = document.createElement("p");
      // if(item.type === "veg"){
      //     veg.innerText = "Veg";
      //     vegRecipies.push(item);
      // }
      // else{
      //     veg.innerText="Non Veg";
      //     nonVeg.push(item);
      // }
      
      veg.innerText = (item.type === "veg" ? "Veg" : "Non Veg");
      veg.style.fontSize = "13px";
      veg.style.color = "#bbbbbb";
      veg.style.width = "100%";
      veg.style.textAlign = "left";
      cont.appendChild(veg);
  
      const nameAndRating = document.createElement("div");
      const recipeName = document.createElement("h4");
      recipeName.innerText = item.name;
  
      const imgRating = document.createElement("div");
      const starImg = document.createElement("img");
      starImg.src = "assets/star.png";
  
      const rating = document.createElement("h4");
      rating.innerText = item.rating;
      imgRating.style.display = "flex";
      imgRating.style.gap = "5px";
  
      imgRating.appendChild(starImg);
      imgRating.appendChild(rating);
  
      nameAndRating.style.width = "100%";
      nameAndRating.appendChild(recipeName);
      nameAndRating.appendChild(imgRating);
  
  
      nameAndRating.style.display = "flex";
      nameAndRating.style.justifyContent = "space-between";
      cont.appendChild(nameAndRating);
  
      
  
  
      const timeAndLiked = document.createElement("div");
      const recipeTime = document.createElement("h3");
      recipeTime.innerText = item.time;
      recipeTime.style.color = "#dc582a";
  
      const likeAndComent = document.createElement("div");
      const liked = document.createElement("img");
      liked.src = "assets/heart.png";
      liked.id = `likedImage${item.name}`;


      liked.addEventListener("click", (event) => {
        const imageId = event.target.id;
        const img = document.getElementById(imageId);
        if(item.liked != true){
          img.src = "assets/liked.png";
          item.liked = true;
        }
        else{
          img.src = "assets/heart.png";
          item.liked = false;
        }});
  
      const comment = document.createElement("img");
      comment.src = "assets/comments.png";

      likeAndComent.appendChild(liked);
      likeAndComent.appendChild(comment);

      timeAndLiked.style.width = "100%"
      timeAndLiked.appendChild(recipeTime);
      timeAndLiked.appendChild(likeAndComent);
  
  
      timeAndLiked.style.display = "flex";
      timeAndLiked.style.justifyContent = "space-between";
      cont.appendChild(timeAndLiked);
  
      
      
      recipieContainer.appendChild(cont)
  }


  function filterRecipes(searchQuery) {
    recipieContainer.innerHTML = "";
    
    const filteredRecipes = recipies.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(filteredRecipes);
    
    filteredRecipes.forEach((recipe) => {
      addRecipe(recipe);
    });
  }

  const searchInput = document.getElementById("inputBar");
  searchInput.addEventListener("input", (event) => {
    const searchQuery = event.target.value.trim();
    filterRecipes(searchQuery);
  });




  function toggleRecpie(type){
    recipieContainer.innerHTML = "";

  // Filter recipes based on the selected type
  let filteredRecipes;
  if (type === "all") {
    filteredRecipes = recipies;
  } else {
    filteredRecipes = recipies.filter((recipe) => recipe.type === type);
  }

  // Generate cards for filtered recipes
  filteredRecipes.forEach((recipe) => {
    addRecipe(recipe);
  });
  }

  const allBtn = document.getElementById("allRecipies");
  allBtn.addEventListener("click", () => toggleRecpie("all"));

  const vegBtn = document.getElementById("vegOnly");
  vegBtn.addEventListener("click",() => toggleRecpie("veg"));

  const nonVegBtn = document.getElementById("nonVeg");
  nonVegBtn.addEventListener("click",() => toggleRecpie("non-veg"));
  







  function filterRecipesByRating() {
    // Clear existing recipes
    recipieContainer.innerHTML = "";
  
    let filteredRecipes;
    if (ratingAboveRadio.checked) {
      filteredRecipes = recipies.filter((recipe) => recipe.rating > 4.0);
    } 
    else if (ratingBelowRadio.checked) {
      filteredRecipes = recipies.filter((recipe) => recipe.rating < 4.0);
    } 
    else {
      filteredRecipes = recipies;
    }
  
    // Generate cards for filtered recipes
    filteredRecipes.forEach((recipe) => {
      addRecipe(recipe);
    });
  }
  
  // Event listeners for radio buttons
  const ratingAboveRadio = document.getElementById("above");
  const ratingBelowRadio = document.getElementById("below");
  ratingAboveRadio.addEventListener("change", filterRecipesByRating);
  ratingBelowRadio.addEventListener("change", filterRecipesByRating);





  for(i in recipies){
    addRecipe(recipies[i]);
}
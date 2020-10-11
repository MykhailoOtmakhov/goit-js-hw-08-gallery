const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsList = ingredients.map((ingredient) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = ingredient;
    return ingredientItem;
  });

    const ingredientsNamedList = document.querySelector('#ingredients');
    ingredientsNamedList.append(...ingredientsList)

//   console.log(ingredientsNamedList)
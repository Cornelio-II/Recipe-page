
<template>
  <main>
    <article>
      <header>
        <picture>
          <img  
        src="/src/assets/images/image-omelette.jpeg"
        alt="image-omelette.jpeg" 
        />
      </picture>
        <h1>Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </header>
      <div class="menu">
            <aside>
            <div class="prep-time">
              <h2 class="heading-name">Preparation time</h2>
              <ul>
                <!-- unordered list -->
                <li><p><span>Total:</span> Approximately 10 minutes</p></li>
                <li><p><span>Preparation:</span> 5 minutes</p></li>
                <li><p><span>Cooking:</span> 5 minutes</p></li>
              </ul>
            </div>
          </aside>
          <section>
            <h2>Ingredients</h2>
            <ul>
              <!-- unordered list -->
              <li><p>2-3 large eggs</p></li>
              <li><p>Salt, to taste</p></li>
              <li><p>Pepper, to taste</p></li>
              <li><p>1 tablespoon of butter or oil</p></li>
              <li>
                <p>Optional fillings: cheese, diced vegetables, cooked meats, herbs</p>
              </li>
            </ul>
          </section>
          <hr />
          <!-- horizontal line -->
          <section>
            <h2>Instructions</h2>
            <ol>
              <!-- ordered list -->
              <li>
                <p><span>Beat the eggs:</span> In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add a
                tablespoon of water or milk for a fluffier texture.
              </p>
              </li>
              <li>
                <p><span>Heat the pan:</span> Place a non-stick frying pan over medium heat
                  and add butter or oil.
                </p>
              </li>
              <li>
                <p><span>Cook the omelette:</span> Once the butter is melted and bubbling,
                pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
                surface.
              </p>
              </li>
              <li>
                <p><span>Add fillings (optional):</span> When the eggs begin to set at the
                edges but are still slightly runny in the middle, sprinkle your
                chosen fillings over one half of the omelette.
              </p>
              </li>
              <li>
              <p><span>Fold and serve:</span> As the omelette continues to cook, carefully
                lift one edge and fold it over the fillings. Let it cook for another
                minute, then slide it onto a plate.
              </p>
              </li>
              <li>
                <p>
                  <span>Enjoy:</span> Serve hot, with additional salt and pepper if needed.
                </p>
              </li>
            </ol>
          </section>
          <hr />
          <!-- horizontal line -->
          <section>
            <h2>Nutrition</h2>
            <table>
              <!-- table -->
              <caption>
                The table below shows nutritional values per serving without the
                additional fillings.
              </caption>
              <tbody>
                <tr>
                  <td class="td-name">Calories</td>
                  <td class="td-grams">277kcal</td>
                </tr>
                <tr>
                  <td class="td-name">Carbs</td>
                  <td class="td-grams">0g</td>
                </tr>
                <tr>
                  <td class="td-name">Protein</td>
                  <td class="td-grams">20g</td>
                </tr>
                <tr>
                  <td class="td-name">Fat</td>
                  <td class="td-grams">22g</td>
                </tr>
              </tbody>
            </table>
          </section>
       </div>
    </article>
  </main>
  <!-- footer -->
  <footer>
        <div class="attribution">
          <p>
            Challenge by
            <a
              href="httuls://www.frontendmentor.io?ref=challenge"
              target="_blank"
              >Frontend Mentor</a
            >. Coded by <a href="https://github.com/Cornelio-II/Recipe-page">Cornelio Jr</a>.
          </p>
        </div>
      </footer>
</template>

<style scoped>
aside .prep-time {
 background-color: var(--rose-50);
 padding: 1.2em 1.5em;
 margin: 1.5em;
 border-radius: 1.2rem;
 font-weight: var(--Outfit-weight-semi-bold);
}
aside .heading-name {
  color: var(--rose-800); 
  margin-top: 0.4rem;
  font-family: var(--Outfit-font);
  font-weight: var(--Young-Serif-weight);
}
.menu{
  margin: auto 0;
  padding: 0.5rem;
}
.td-name{
  display: flex;
  justify-content: flex-start;
  margin-left: 2rem;
  padding: 0.5em 0;
 font-weight: var(--Outfit-weight-regular);
}
.td-grams {
  display: flex;
  justify-content: flex-end;
  margin-right: 3rem;
  padding: 0.5em 0;
  margin-top: -2.7rem;
  color: var(--brown-800);
  font-weight: var(--Outfit-weight-semi-bold);
}
.attribution {
  font-size: clamp(0.875rem, 0.831rem + 0.1878vw, 1rem);
  color: hsl(229, 8%, 60%);
}

.attribution a {
  color: hsl(228, 45%, 44%);
}

@media (min-width: 46.875rem) {
  main{
    margin: 1.75rem ;
    padding: 1.25rem;
  }
  picture,img{
    border-radius: 0.625rem;
  }
}
</style>
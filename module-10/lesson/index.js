// ---- ПРИМЕР с выводом информации о героях Star Wars

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.get-heroes');

    const createHero = (heroData) => {
        const { skin_color, name, height, birth_year, gender, id } = heroData;

        const hero = document.createElement('div');
        hero.className = 'hero';

        hero.innerHTML = `
            <img src="https://starwars-visualguide.com/assets/img/characters/${id}.jpg" alt="${name}">
            <div>
                <span>Name:</span>
                <span>${name}</span>
            </div>
            <div>
                <span>Birthday:</span>
                <span>${birth_year}</span>
            </div>
            <div>
                <span>Gender:</span>
                <span>${gender}</span>
            </div>
            <div>
                <span>Skin color:</span>
                <span>${skin_color}</span>
            </div>
            <div>
                <span>Height:</span>
                <span>${height}</span>
            </div>        
        `;

        return hero;
    };

    const handleButtonClick = () => {
        fetch('https://swapi.dev/api/people')
            .then(data => data.json())
            .then(data => {
                const { results } = data;
                const heroesWrapper = document.querySelector('.heroes-wrapper');

                for (let i = 0; i < results.length; i++) {
                    const hero = {
                        ...results[i],
                        id: i + 1,
                    };
                    const newHero = createHero(hero);
                    heroesWrapper.append(newHero);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    button.addEventListener('click', handleButtonClick);
});

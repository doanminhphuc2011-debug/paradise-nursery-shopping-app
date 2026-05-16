import { useState } from 'react';

function ProductList() {
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState([]);

  const plants = [
    {
      id: 1,
      name: 'Aloe Vera',
      price: 10,
      category: 'Succulents',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      name: 'Snake Plant',
      price: 15,
      category: 'Succulents',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      name: 'Peace Lily',
      price: 20,
      category: 'Flowering',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 4,
      name: 'Orchid',
      price: 25,
      category: 'Flowering',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 5,
      name: 'Fern',
      price: 18,
      category: 'Indoor',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 6,
      name: 'Money Plant',
      price: 12,
      category: 'Indoor',
      image: 'https://via.placeholder.com/100'
    }
  ];

  const addToCart = (plant) => {
    setCartCount(cartCount + 1);
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <nav>
        <h2>Paradise Nursery</h2>
        <ul>
          <li>Home</li>
          <li>Plants</li>
          <li>Cart ({cartCount})</li>
        </ul>
      </nav>

      <h1>Plant Products</h1>

      {['Succulents', 'Flowering', 'Indoor'].map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          {plants
            .filter((plant) => plant.category === category)
            .map((plant) => (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button
                  onClick={() => addToCart(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id)
                    ? 'Added'
                    : 'Add to Cart'}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;

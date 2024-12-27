import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Oliver', age: '5', breed: 'Peterbald' },
];

const breeds = [...new Set(availableCats.map(cat => cat.breed))];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));
        setCats(catsWithImages);
        setFilteredCats(catsWithImages); // Initialize filteredCats with all cats
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    const filtered = cats.filter(cat => {
      const breedMatch = selectedBreed === 'All' || cat.breed === selectedBreed;
      const nameMatch = cat.name.toLowerCase().includes(searchName.toLowerCase());
      return breedMatch && nameMatch;
    });
    setFilteredCats(filtered);
  }, [selectedBreed, searchName, cats]);


  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>

      <div className="filters mb-3">
        <select className="form-select me-2" value={selectedBreed} onChange={e => setSelectedBreed(e.target.value)}>
          <option value="All">All Breeds</option>
          {breeds.map(breed => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
        <input className="form-control" type="text" placeholder="Search by name" value={searchName} onChange={e => setSearchName(e.target.value)} />
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useState } from "react";

function Menu() {
  const [chicha, setChicha] = useState([
    { nom: "Tête plate", prix: 13, checked: false, quantite: 1, saveur: "" },
    { nom: "Khaloud", prix: 15, checked: false, quantite: 1, saveur: "" },
    { nom: "Quasar", prix: 20, checked: false, quantite: 1, saveur: "" },
  ]);

  const saveurOptions = [
    "Menthe",
    "Love66",
    "Hawai",
    "Mi amor",
    "Menthe Sucrée",
    "Lady Killer",
  ];

  const [boissons, setBoissons] = useState([
    { nom: "Boisson soft", prix: 5, checked: false, quantite: 1 },
    { nom: "sirop au choix", prix: 5, checked: false, quantite: 1 },
    { nom: "Redbull", prix: 5, checked: false, quantite: 1 },
    { nom: "Cocktail", prix: 8, checked: false, quantite: 1 },
    { nom: "Diabolo sirop", prix: 5, checked: false, quantite: 1 },
  ]);

  const [entrees, setEntrees] = useState([
    { nom: "Nems x3", prix: 6, checked: false, quantite: 1 },
    { nom: "Nems x6", prix: 9, checked: false, quantite: 1 },
    { nom: "Nems x9", prix: 14, checked: false, quantite: 1 },
    { nom: "Burrata", prix: 9, checked: false, quantite: 1 },
    { nom: "Salade Caesar", prix: 12, checked: false, quantite: 1 },
    { nom: "Salade Saumon Frais", prix: 13, checked: false, quantite: 1 },
  ]);

  const [plats, setPlats] = useState([
    { nom: "Le 7seven", prix: 12, checked: false, quantite: 1 },
    { nom: "Le burger du chef", prix: 14, checked: false, quantite: 1 },
    { nom: "Tortiglioni Forestiere", prix: 12, checked: false, quantite: 1 },
    { nom: "Tortiglioni Saumon Frais", prix: 14, checked: false, quantite: 1 },
  ]);

  const [desserts, setDesserts] = useState([
    { nom: "Gauffre Nutella Chantilly", prix: 8, checked: false, quantite: 1 },
    {
      nom: "Pain perdu caramel beurre salé boule de glace vanille",
      prix: 8,
      checked: false,
      quantite: 1,
    },
    {
      nom: "Fraisier et son coulis de fruits rouges",
      prix: 8,
      checked: false,
      quantite: 1,
    },
    {
      nom: "Fondant au chocolat boule de glace Vanille",
      prix: 8,
      checked: false,
      quantite: 1,
    },
    { nom: "Milshake", prix: 6, checked: false, quantite: 1 },
  ]);

  const [supplements, setSupplements] = useState([
    {
      nom: "Supplément Kinder, Oréo, etc",
      prix: 2,
      checked: false,
      quantite: 1,
    },
  ]);

  const [total, setTotal] = useState(0);

  const handleCheckboxChange = (category, itemId) => {
    let updatedItems;
    switch (category) {
      case "chicha":
        updatedItems = chicha.map((item, index) =>
          index === itemId ? { ...item, checked: !item.checked } : item
        );
        setChicha(updatedItems);
        break;
      case "boissons":
        updatedItems = boissons.map((item, index) =>
          index === itemId ? { ...item, checked: !item.checked } : item
        );
        setBoissons(updatedItems);
        break;
      case "entrees":
        updatedItems = entrees.map((item, index) =>
          index === itemId ? { ...item, checked: !item.checked } : item
        );
        setEntrees(updatedItems);
        break;
      case "plats":
        updatedItems = plats.map((item, index) =>
          index === itemId ? { ...item, checked: !item.checked } : item
        );
        setPlats(updatedItems);
        break;
      case "desserts":
        updatedItems = desserts.map((item, index) =>
          index === itemId ? { ...item, checked: !item.checked } : item
        );
        setDesserts(updatedItems);
        break;
      case "supplements":
        updatedItems = supplements.map((item, index) =>
          index === itemId ? { ...item, checked: !item.checked } : item
        );
        setSupplements(updatedItems);
        break;
      default:
        break;
    }
  };

  const handleQuantityChange = (category, itemId, quantity) => {
    let updatedItems;
    switch (category) {
      case "chicha":
        updatedItems = chicha.map((item, index) =>
          index === itemId ? { ...item, quantite: quantity } : item
        );
        setChicha(updatedItems);
        break;
      case "boissons":
        updatedItems = boissons.map((item, index) =>
          index === itemId ? { ...item, quantite: quantity } : item
        );
        setBoissons(updatedItems);
        break;
      case "entrees":
        updatedItems = entrees.map((item, index) =>
          index === itemId ? { ...item, quantite: quantity } : item
        );
        setEntrees(updatedItems);
        break;
      case "plats":
        updatedItems = plats.map((item, index) =>
          index === itemId ? { ...item, quantite: quantity } : item
        );
        setPlats(updatedItems);
        break;
      case "desserts":
        updatedItems = desserts.map((item, index) =>
          index === itemId ? { ...item, quantite: quantity } : item
        );
        setDesserts(updatedItems);
        break;
      case "supplements":
        updatedItems = supplements.map((item, index) =>
          index === itemId ? { ...item, quantite: quantity } : item
        );
        setSupplements(updatedItems);
        break;
      default:
        break;
    }
  };
  const handleSaveurChange = (itemId, saveur) => {
    const updatedChicha = chicha.map((item, index) =>
      index === itemId ? { ...item, saveur } : item
    );
    setChicha(updatedChicha);
  };
  const calculateTotal = () => {
    const items = [
      ...chicha,
      ...boissons,
      ...entrees,
      ...plats,
      ...desserts,
      ...supplements,
    ];
    const totale = items
      .filter((item) => item.checked)
      .reduce((acc, item) => acc + item.prix * item.quantite, 0);
    setTotal(totale);
  };

  // Appeler la fonction calculateTotal à chaque fois que les cases à cocher ou les quantités sont modifiées
  React.useEffect(() => {
    calculateTotal();
  }, [chicha, boissons, entrees, plats, desserts, supplements]);

  return (
    <div>
      <h1>Menu</h1>
      <h2>Chicha</h2>
      <ul className="nopuce">
        {chicha.map((item, index) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange("chicha", index)}
            />
            <label>
              {item.nom} - {item.prix}€
            </label>
            <input
              type="number"
              value={item.quantite}
              onChange={(e) =>
                handleQuantityChange(
                  "chicha",
                  index,
                  parseInt(e.target.value, 10)
                )
              }
            />
            {item.checked && (
              <select
                value={item.saveur}
                onChange={(e) => handleSaveurChange(index, e.target.value)}
              >
                <option value="">Sélectionner une saveur</option>
                {saveurOptions.map((saveur) => (
                  <option key={saveur} value={saveur}>
                    {saveur}
                  </option>
                ))}
              </select>
            )}
          </li>
        ))}
      </ul>
      <h2>Boissons</h2>
      <ul className="nopuce">
        {boissons.map((item, index) => (
          <li key={item}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange("boissons", index)}
            />
            <label>
              {item.nom} - {item.prix}€
            </label>
            <input
              type="number"
              value={item.quantite}
              onChange={(e) =>
                handleQuantityChange(
                  "boissons",
                  index,
                  parseInt(e.target.value, 10)
                )
              }
            />
          </li>
        ))}
      </ul>
      <h2>Entrées</h2>
      <ul className="nopuce">
        {entrees.map((item, index) => (
          <li key={item}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange("entrees", index)}
            />
            <label>
              {item.nom} - {item.prix}€
            </label>
            <input
              type="number"
              value={item.quantite}
              onChange={(e) =>
                handleQuantityChange(
                  "entrees",
                  index,
                  parseInt(e.target.value, 10)
                )
              }
            />
          </li>
        ))}
      </ul>
      <h2>Plats</h2>
      <ul className="nopuce">
        {plats.map((item, index) => (
          <li key={item}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange("plats", index)}
            />
            <label>
              {item.nom} - {item.prix}€
            </label>
            <input
              type="number"
              value={item.quantite}
              onChange={(e) =>
                handleQuantityChange(
                  "plats",
                  index,
                  parseInt(e.target.value, 10)
                )
              }
            />
          </li>
        ))}
      </ul>
      <h2>Desserts</h2>
      <ul className="nopuce">
        {desserts.map((item, index) => (
          <li key={item}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange("desserts", index)}
            />
            <label>
              {item.nom} - {item.prix}€
            </label>
            <input
              type="number"
              value={item.quantite}
              onChange={(e) =>
                handleQuantityChange(
                  "desserts",
                  index,
                  parseInt(e.target.value, 10)
                )
              }
            />
          </li>
        ))}
      </ul>
      <h2>Suppléments</h2>
      <ul className="nopuce">
        {supplements.map((item, index) => (
          <li key={item}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange("supplements", index)}
            />
            <label>
              {item.nom} - {item.prix}€
            </label>
            <input
              type="number"
              value={item.quantite}
              onChange={(e) =>
                handleQuantityChange(
                  "supplements",
                  index,
                  parseInt(e.target.value, 10)
                )
              }
            />
          </li>
        ))}
      </ul>
      <h2>Total: {total}€</h2>
    </div>
  );
}

export default Menu;

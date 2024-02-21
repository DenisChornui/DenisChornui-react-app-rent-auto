

export const CarBrand = ({ value, onChange}) => {

    const makes = [
        "Buick", "Volvo", "HUMMER", "Subaru", "Mitsubishi", "Nissan",
        "Lincoln", "GMC", "Hyundai", "MINI", "Bentley", "Mercedes-Benz",
        "Aston Martin", "Pontiac", "Lamborghini", "Audi", "BMW", "Chevrolet",
        "Mercedes-Benz", "Chrysler", "Kia", "Land"
      ];

    return (
        <div>
       <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select a make</option>
        {makes.map(make => (
          <option key={make} value={make}>{make}</option>
        ))}
      </select>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter the text"
      />
    </div>
    )
}
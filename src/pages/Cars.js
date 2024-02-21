import React, { useState } from 'react';
import { CarsList } from 'components/carsList';
import { useSearchParams } from 'react-router-dom';
import { CarBrand } from 'components/CarBrand/CarBrand';
export const Cars = () => {
  // const cars = getCars();
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const carName = searchParams.get("name") ?? "";
  //   const [searchValue, setSearchValue] = useState(carName);

  //   const visibleCars = cars.filter((car) => 
  //   car.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

  //   const updateQueryString = (name) => {
  //       const nextParams = name !== "" ? {name} : {};
  //       setSearchParams(nextParams);
  //       setSearchValue(name)
  //   }

  return (
    <main>
      <p>Cars</p>
      {/* <CarBrand value={searchValue} onChange={updateQueryString}/>
      <CarsList cars={visibleCars} /> */}
    </main>
  );
};

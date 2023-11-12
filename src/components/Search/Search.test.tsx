import { render, screen, fireEvent } from '@testing-library/react';
import { MainContext } from '../../pages/MainPage/Main.Page';
import { IdataProduct } from '../../type/interfaces';
import { Search } from './Search';


describe('Search', () => {
  it('should save the entered value in local storage when the search button is clicked', () => {

    const countPage=1;
    const countItemData=1;
    const dataSearch='test query';
    const selectedValue=10;
    const arrProducts:IdataProduct[]=[];
    const handleUpdatePage= (page:number) => {console.log(page)};
    const handleChangeSelect = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {console.log(event)};
    const handleUpdateSearch= (search:string) => {console.log(search)};
    render(
      <MainContext.Provider
      value={{
        countPage,
        countItemData,
        dataSearch,
        selectedValue,
        arrProducts,
        handleUpdatePage,
        handleChangeSelect,
        handleUpdateSearch,
      }}>
        <Search />
      </MainContext.Provider>
    );
    const inputElement = screen.getByPlaceholderText('Search...');
    const searchButton = screen.getByAltText('SearchLogo');
    fireEvent.change(inputElement, { target: { value: dataSearch } });
    fireEvent.click(searchButton);
    const savedQuery = localStorage.getItem('searchQuery');
    expect(savedQuery).toBe('test query');
  });
});

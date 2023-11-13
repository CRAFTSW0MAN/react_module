import { render, screen, fireEvent } from '@testing-library/react';
import { MainContext } from '../../pages/MainPage/Main.Page';
import { IdataProduct } from '../../type/interfaces';
import { Search } from './Search';


describe('Search', () => {
  it('Verify that clicking the Search button saves the entered value to the local storage', () => {

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
    const deleteButton = screen.getByAltText('DeleteLogo');
    fireEvent.change(inputElement, { target: { value: dataSearch } });
    fireEvent.click(searchButton);
    fireEvent.click(deleteButton);
    const savedQuery = localStorage.getItem('searchQuery');
    expect(savedQuery).toBe('test query');
    localStorage.removeItem('searchQuery');
  });
});


describe('Search component', () => {
  beforeEach(() => {
    localStorage.clear();
  });
test('Check that the component retrieves the value from the local storage upon mounting', () => {
  const countPage=1;
    const countItemData=1;
    const dataSearch='';
    const selectedValue=10;
    const arrProducts:IdataProduct[]=[];
    const handleUpdatePage= (page:number) => {console.log(page)};
    const handleChangeSelect = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {console.log(event)};
    const handleUpdateSearch= (search:string) => {console.log(search)};

    localStorage.setItem('searchQuery', 'test value');

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

  expect(screen.getByPlaceholderText('Search...')).toHaveValue('test value');
  localStorage.removeItem('searchQuery');
});
})

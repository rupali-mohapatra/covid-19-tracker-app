
import type { Country } from "../../@types/Types";
import CountryItem from "../CountryItem/CountryItem";
import "./CountryList.css";
import styled from '@emotion/styled';

interface Props {
  countries: Country[];
  onItemClick: (country: Country)=> void;
}
const ListWrapper = styled.ul`
padding:0;
display:flex;
flex-wrap: wrap;
`;

const CountryList: React.FunctionComponent<Props> = ({
  countries, onItemClick,
}) => {
  
  return (
    <ListWrapper>
      {countries.map((country) => (
        <CountryItem key={country.ID} country={country} onItemClick={onItemClick} />
          ))}  
      
    </ListWrapper>
  )
}

export default CountryList
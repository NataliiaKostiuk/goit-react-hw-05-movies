
import { StyledHeader, StyledNavLink } from "./Heder.styled";
 
export const Header = () => {
    return (
      <StyledHeader>
        <nav>
         <StyledNavLink to='/'>Home</StyledNavLink>
         <StyledNavLink to='/movies' >Movies</StyledNavLink>
        </nav>      
        </StyledHeader>
    )
}

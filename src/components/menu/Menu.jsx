import { useState } from "react";
import { StyledHamburger, StyledMenu } from "./menu.styles";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <>
        <StyledHamburger 
        src='/assets/icon-hamburger.svg' alt=""
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        />
			<nav>
                <StyledMenu $isOpen={isOpen}>
                    <h1>HOLA</h1>
            </StyledMenu>
        </nav>

                </>
    );
}
export default Menu;
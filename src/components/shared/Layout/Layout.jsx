import styled from "@emotion/styled";
import { ContactsOutlined, LocationOnOutlined } from "@mui/icons-material";
import ThemedAppBar from "../ThemedAppBar/ThemedAppBar";

const StyledMain = styled('main')({
    paddingTop: 70,
})

const Layout = ({ children, currentMenuId, buttonClickHandler }) => {
    const menuItems = [
        { id: 1, text: 'Contacts', icon: <ContactsOutlined />, url: '/', button: { text: 'New contact', buttonClickHandler } },
        { id: 2, text: 'Locations', icon: <LocationOnOutlined />, url: '/locations' },
    ]

    return (
        <>
            <ThemedAppBar menuItems={menuItems} currentMenuId={currentMenuId} />
            <StyledMain>
                {children}
            </StyledMain>
        </>
    )
}

export default Layout;
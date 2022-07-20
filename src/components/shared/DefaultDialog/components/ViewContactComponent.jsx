import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Heading = styled(Typography)({
    fontWeight: 600,
    fontSize: '.9rem',
    marginBottom: 4
})

const Body = styled(Typography)({
    fontWeight: 400,
    fontSize: '1rem',
    marginBottom: 12
})

const ViewContactComponent = ({ firstName, lastName, locationName, phone }) => (
    <>
        <Heading variant="label">
            First Name
        </Heading>
        <Body>
            { firstName }
        </Body>
        <Heading variant="label">
            Last Name
        </Heading>
        <Body>
            { lastName }
        </Body>
        <Heading variant="label">
            Location
        </Heading>
        <Body>
            { locationName }
        </Body>
        <Heading variant="label">
            Phone number
        </Heading>
        <Body>
            { phone }
        </Body>
    </>
)

export default ViewContactComponent;
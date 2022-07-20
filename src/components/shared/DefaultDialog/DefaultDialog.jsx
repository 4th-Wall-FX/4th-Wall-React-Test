import styled from "@emotion/styled";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";


const ThemedTitle = styled(DialogTitle)({
    fontWeight: 900,
    borderBottom: '1px solid #ededed',
    marginBottom: 24,
    display: 'flex'
})

const DefaultDialog = ({ title, titleIcon, content, isOpen, onCloseHandler }) => (
    <Dialog 
        open={isOpen}
        onClose={onCloseHandler}
        fullWidth>
        <ThemedTitle>{ title } {titleIcon}</ThemedTitle>
        <DialogContent> { content }</DialogContent>
    </Dialog>
);

export default DefaultDialog;
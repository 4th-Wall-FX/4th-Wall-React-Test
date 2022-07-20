import styled from "@emotion/styled";
import { Grid, IconButton, Paper, Typography } from "@mui/material";

const ThemedGridContainer = styled(Grid)({
    padding: 2,
    margin: '16px auto'
});

const ThemedPaper = styled(Paper)({
    padding: 12,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

const ThemedIconButton = styled(IconButton)({
    marginLeft: 1,
});

const GridHeading = styled(Grid)({
    marginBottom: 8,
    paddingBottom: 8,
    borderBottom: '1px solid #ededed',
    color: '#999',
})

const ThemedDataGrid = ({ dataArray, viewHandler, editHandler, removeHandler }) => {
    return (
        <ThemedGridContainer container item spacing={1} xs={12} sm={10} md={6}>
            <GridHeading item xs={12}>
                <Typography>All Contacts</Typography>
            </GridHeading>
            {dataArray.map(({ id, text, viewIcon, editIcon, removeIcon }) => (
                <Grid key={id} item xs={12} sx={{ paddingRight: '8px'}} >
                    <ThemedPaper>
                        <Typography>
                            {text}
                        </Typography>
                        {(viewIcon || editIcon || removeIcon) && (
                            <div>
                                {viewIcon && viewHandler && (
                                    <ThemedIconButton onClick={() => viewHandler(id)}>
                                        {viewIcon}
                                    </ThemedIconButton>
                                )}
                                {editIcon && editHandler && (
                                    <ThemedIconButton onClick={() => editHandler(id)}>
                                        {editIcon}
                                    </ThemedIconButton>
                                )}
                                {removeIcon && removeHandler && (
                                    <ThemedIconButton onClick={() => removeHandler(id)}>
                                        {removeIcon}
                                    </ThemedIconButton>
                                )}
                            </div>
                        )}

                    </ThemedPaper>
                </Grid>
            ))}
        </ThemedGridContainer>
    )
};

export default ThemedDataGrid;
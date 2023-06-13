import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Paper, TextField } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const useStyles = makeStyles((theme) => ({
  Box: {
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.08em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#17202A",
        outline: "1px solid slategrey",
      },
    },
    width: "80%",
    opacity: 0.93,
    height: "56vh",
    margin: "auto auto 20px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "1px 20px 20px 20px",
    background: "#ffff",
    borderRadius: "15px",
    boxShadow: "1px 1px 15px #333",
  },
  div: {
    height: 400,
    overflow: "auto hidden",
    backgroundColor: "",
    width: "100%",
    "& .super-app-theme--header": {
      backgroundColor: "#17202A",
      color: "white",
    },
    justifyContent: "center",
    display: "center",
    color: "#2C3E50",
  },
}));

const TableAPI = (props) => {
  const classes = useStyles();
  var data;
  try {
    const documents = props.documents;
    data = documents.response.docs;
    const { formPublications, setformPublications } = props;

    const handleChange = (event) => {
      const { id, value } = event.target;
      setformPublications({ ...formPublications, [id]: value });
    };
    const columns = [
      {
        field: "title_display",
        headerClassName: "super-app-theme--header",
        headerName: "Title",
        headerAlign: "center",
        minWidth: 350,
        padding: 2,
        align: "center",
      },
      {
        field: "journal",
        headerClassName: "super-app-theme--header",
        headerName: "Journal",
        headerAlign: "center",
        minWidth: 200,
        align: "center",
      },
      {
        field: "eissn",
        headerClassName: "super-app-theme--header",
        headerName: "Eissn",
        headerAlign: "center",
        minWidth: 75,
        align: "center",
      },
      {
        field: "publication_date",
        headerClassName: "super-app-theme--header",
        headerName: "Publication Date",
        headerAlign: "center",
        minWidth: 150,
        align: "center",
      },
      {
        field: "article_type",
        headerClassName: "super-app-theme--header",
        headerName: "Article Type",
        headerAlign: "center",
        minWidth: 160,
        align: "center",
      },
      {
        field: "author_display",
        headerClassName: "super-app-theme--header",
        headerName: "Author",
        flex: 1,
        headerAlign: "center",
        minWidth: 150,
        align: "center",
      },
      {
        field: "score",
        headerClassName: "super-app-theme--header",
        headerName: "Score",
        minWidth: 60,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "id",
        headerClassName: "super-app-theme--header",
        headerName: "See Publication",
        headerAlign: "center",
        minWidth: 160,
        align: "center",
        renderCell: (params) => (
          <IconButton
            color="inherit"
            text="id"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://journals.plos.org/plosone/article?id=${params.id}`}
          >
            <OpenInNewIcon>{params.id}</OpenInNewIcon>
          </IconButton>
        ),
      },
    ];
    return (
      <Paper className={classes.Box}>
        <TextField
          name="id"
          id="id"
          label="Search title"
          placeholder="Enter a title"
          type="search"
          variant="standard"
          size="small"
          value={formPublications.id}
          onChange={handleChange}
        />
        <br />
        <div className={classes.div}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={10}
            rowPerPageOptions={[10]}
          />
        </div>
      </Paper>
    );
  } catch (error) {}
};

export default TableAPI;
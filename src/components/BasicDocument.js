import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink 
} from "@react-pdf/renderer";
import { IconButton } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownloadOutlined';
import { useEffect } from "react";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});



// Create Document Component
function BasicDocument(props) {

  
    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>{props.data.ownerId}</Text>
            </View>
            <View style={styles.section}>
                <Text>{props.data.description}</Text>
                <Text>{props.data.owner}</Text>
                {props.data.input.map((input, index) => {
                    return <Text key={index}>{input}</Text>
                })}
            </View>
            </Page>
        </Document>
        );


  return (<>

  <PDFDownloadLink document={<MyDocument  />} fileName={props.data.name+".pdf"}>
    {({ blob, url, loading, error }) => (
    <IconButton aria-label="download" size="medium">
        <FileDownloadIcon />
	</IconButton>)}
    </PDFDownloadLink>
      </>
  );
}
export default BasicDocument;
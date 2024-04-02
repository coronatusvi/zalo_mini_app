import React from "react";
import { Box, Text, Picker, Page } from "zmp-ui";

function PagePicker() {
  const genTestData = (start, end, prefix) => {
    const data = [];
    // eslint-disable-next-line no-plusplus
    for (let i = start; i < end; i++) {
      data.push({
        value: i + 1,
        displayName: `${i + 1}${prefix}`,
      });
    }
    return data;
  };
  return (
    <Page className="page">
      <div className="section-container">
        <Text.Title size="small">Type</Text.Title>
        <Box mt={6}>
          <Picker
            label="Single Column"
            helperText="Helper text"
            placeholder="Placeholder"
            mask
            maskClosable
            title="Single Column"
            action={{
              text: "Close",
              close: true,
            }}
            // disabled
            data={[
              {
                options: genTestData("key1", 100, "Option"),
                name: "option",
              },
            ]}
          />
        </Box>
        <Box mt={6}>
          <Picker
            label="Multiple Columns"
            placeholder="DD/MM/YY : 00:00"
            mask
            maskClosable
            title="Thời gian"
            action={{
              text: "Close",
              close: true,
            }}
            // disabled
            data={[
              {
                options: genTestData(1930, 2030, ""),
                name: "Year",
              },
              {
                options: genTestData(0, 12, ""),
                name: "Month",
              },
              { options: genTestData(0, 31, ""), name: "Day" },
              { options: genTestData(0, 24, ":00"), name: "Time" },
            ]}
          />
        </Box>
      </div>
    </Page>
  );
}

export default PagePicker;

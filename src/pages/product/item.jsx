import React from "react";
import { Page, List, Icon, Button } from "zmp-ui";

const { Item } = List;
export default function ItemPage(props) {
  return (
    <Page className="section-container">
      <List>
        <Item title="Title" suffix={<Icon icon="zi-chevron-right" />} />
        <Item
          title="Sample text title"
          prefix={<Icon icon="zi-user" />}
          suffix={<Icon icon="zi-check" />}
        />
        <Item
          title="Title"
          suffix={<Icon icon="zi-chevron-right" />}
          subTitle="subtitle"
        />
        <Item title="Title" prefix={<Icon icon="zi-user" />} />
        <Item title="Title" brackets="Brackets" />
        <Item title="Title" subTitle="Subtitle" />
        <Item
          title="Title"
          subTitle="Subtitle"
          suffix={<Icon icon="zi-chevron-right" />}
        />
      </List>
    </Page>
  );
}

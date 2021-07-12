import React from "react";
import { Tabs } from "antd";
import { withRouter } from "react-router";
import CreateItem from "./create";
import ListItem from "./list";

const { TabPane } = Tabs;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "1",
    };
  }

  render() {
    const { current } = this.state;
    return (
      <div className="max-w-4xl mx-auto divide-y-2 divide-gray-200">
        <div className="container-sm pt-20 mx-auto">
          <Tabs
            defaultActiveKey={current}
            onChange={(e) => this.setState({ current: e })}
          >
            <TabPane tab="Mint New NFT" key="1">
              {current === "1" ? <CreateItem {...this.props} /> : null}
            </TabPane>
            <TabPane tab="List NFT for Sale" key="2">
              {current === "2" ? <ListItem {...this.props} /> : null}
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default withRouter(Index);

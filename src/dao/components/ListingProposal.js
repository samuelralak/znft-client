import React from "react";
import { withRouter } from "react-router-dom";
// import { list, proposals } from "../utils/dao-functions";
import ProposalCard from "../../components/ProposalCard/ProposalCard";
import { Skeleton } from "antd";
import { proposals } from "../../utils/queries/dao.query";

class ListingProposal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proposals: [],
      loading: true,
    };
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount = () => {
    this.fetch();
  };

  fetch = async () => {
    const result = await proposals();
    this.setState({ loading: false, proposals: result });
  };

  refresh = () => {
    this.setState({ loading: true });
    this.fetch();
  };

  render() {
    const { proposals, loading } = this.state;
    return (
      <div>
        {loading ? (
          <div className="proposals-list">
            <Skeleton.Button
              active
              size={180}
              style={{ width: 600, marginBottom: "2rem" }}
            />
            <Skeleton.Button
              active
              size={180}
              style={{ width: 600, marginBottom: "2rem" }}
            />
            <Skeleton.Button
              active
              size={180}
              style={{ width: 600, marginBottom: "2rem" }}
            />
          </div>
        ) : (
          <div className="proposals-list">
            {proposals.map((data, index) => (
              <ProposalCard
                {...this.props}
                proposal={data}
                key={index}
                refresh={this.refresh}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(ListingProposal);

import React, { Component } from "react";
import { connect } from "react-redux";
import PortfolioListing from "./Portfolio-Listing";
import { getPortfolios } from "./../../actions";
import PageTop from "../shared/PageTop";
export class PortfolioIndex extends Component {
  componentDidMount() {
    this.props.getPortfolios();
  }
  render() {
    const list = this.props.portfolios || [];
    return (
      <div>
        <PageTop
          desc="The following are only the works that are completely engineered individually; the partial -withen teams- works are not included."
          title="Portfolio"
          color="orange"
          image="undraw_share_opinion_jpw0.svg"
        />
        <PortfolioListing list={list.data} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  portfolios: state.portfolios,
});

const mapDispatchToProps = {
  getPortfolios,
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex);

import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

import WithSpinner from "../withSpinner/with-spinner.component";
import CollectionOverview from "./collections-overview.component";

// const mapStateToProps = (state) => ({
//   isLoading: state.shop.isFetching,
// });

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;

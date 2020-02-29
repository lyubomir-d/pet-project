import Component from "./friends";
import {getPetCollectionStart} from "../../store/pets/actions";
import {connect} from "react-redux";

const mapStateToProps = ({pets: {petCollection}}) => ({
    petCollection
});

const mapDispatchToProps = dispatch => ({
    getPetCollection: () => dispatch(getPetCollectionStart())
});

export const Friends = connect(mapStateToProps, mapDispatchToProps)(Component);

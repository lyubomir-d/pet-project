import FriendForm from './FriendForm';
import {addPetStart} from "../../store/pet/actions";
import {connect} from "react-redux";
import Component from "../../pages/friends/friends";

const mapStateToProps = ({pet: {newPet}}) => ({
    newPet
});

const mapDispatchToProps = dispatch => ({
    addPet: (data) => dispatch(addPetStart(data))
});

export const FriendForm = connect(mapStateToProps, mapDispatchToProps)(Component);


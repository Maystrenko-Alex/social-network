import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect/withAuthRedirect';
import { MessagesPageType, sendMessageAC } from '../../redux/dialogs-reducer';
import { AppRootStateType } from '../../redux/redux-store';
import { Dialogs } from './Dialogs';


type MapStatePropsType = {
  isAuth: boolean
  messagesPage: MessagesPageType
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    messagesPage: state.messagesPage
  }
}

// let DialogsContainer =  compose(connect(mapStateToProps, { sendMessageAC, updateNewTextMessageAC }), withAuthRedirect) (Dialogs);

// export const DialogsContainer = connect(mapStateToProps, { sendMessageAC, updateNewTextMessageAC })(withAuthRedirect(Dialogs));
export default compose<React.ComponentType>(connect(mapStateToProps, { sendMessageAC }), withAuthRedirect)(Dialogs);
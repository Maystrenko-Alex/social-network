import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect/withAuthRedirect';
import { MessagesPageType, sendMessageAC, updateNewTextMessageAC } from '../../redux/dialogs-reducer';
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

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, { sendMessageAC, updateNewTextMessageAC })(Dialogs));

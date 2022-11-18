import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MessagesPageType, sendMessageAC, updateNewTextMessageAC } from '../redux/dialogs-reducer';
import { AppRootStateType } from '../redux/redux-store';
import { Dialogs } from './Dialogs';

// type DialogsContanerPropsType = {

// }

// const DialogsContainer = (props: DialogsContanerPropsType) => {
//   const updateNewMessageBody = (text: string) => props.dispatch(updateNewTextMessageAC(text))
//   const sendMessage = () => props.dispatch(sendMessageAC())

//   return <Dialogs
//     messagesPage={props.state.messagePage}
//     updateNewMessageBody={updateNewMessageBody}
//     sendMessage={sendMessage}
//   />

// };
type MapStatePropsType = {
 messagesPage: MessagesPageType
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    messagesPage: state.messagesPage
  }
}

type MapDispatchToPropsType = {
  sendMessage: () => void
  updateNewMessageBody: (text: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    sendMessage: () => dispatch(sendMessageAC()),
    updateNewMessageBody: (text: string) => dispatch(updateNewTextMessageAC(text))
  }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

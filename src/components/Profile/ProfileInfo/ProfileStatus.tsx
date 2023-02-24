import React, { ChangeEvent } from 'react';

// type StateType = {
//   editMode: boolean
//   title: string
// }

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void
}
export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

  state = {
    editMode: false,
    title: this.props.status
  }

  toggleEditMode = () => {
    if (this.state.editMode) {
      this.props.updateStatus(this.state.title)
    }
    this.setState({
      editMode: Number(!this.state.editMode)
    })
    
  }
 
  changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({title: e.currentTarget.value})
  }

  render() {

    return (
      <div>
        <div onDoubleClick={this.toggleEditMode}>
          <span>{'My Status: '}</span>
          {this.state.editMode
            ? <input autoFocus value={this.state.title} onChange={this.changeStatus} onBlur={this.toggleEditMode.bind(this)} />
            : <span >{this.props.status || '-----'}</span>
          }
        </div>
      </div>
    );
  }
};

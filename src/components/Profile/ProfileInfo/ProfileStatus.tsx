import React, { ChangeEvent } from 'react';

// type StateType = {
//   editMode: boolean
//   title: string
// }

type ProfileStatusPropsType = {
  status: string
}
export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

  state = {
    editMode: false,
    title: this.props.status
  }

  toggleEditMode() {
    console.log('2click')
    this.setState({
      editMode: Number(!this.state.editMode)
    })
  }
 
  changeStatus (e: ChangeEvent<HTMLInputElement>) {
    console.log('change')
    this.setState({title: e.currentTarget.value})
  }

  render() {

    return (
      <div>
        <div onDoubleClick={this.toggleEditMode.bind(this)}>
          <span>{'My Status: '}</span>
          {this.state.editMode
            ? <input autoFocus value={this.state.title} onChange={this.changeStatus.bind(this)} onBlur={this.toggleEditMode.bind(this)} />
            : <span >{this.state.title}</span>
          }
        </div>
      </div>
    );
  }
};

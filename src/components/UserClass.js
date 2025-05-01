import React from "react"

class UserClass extends React.Component {
  constructor(props){
    super(props)

    this.state={
      user:{
        name:'arjun',
        location:'default'
      },
    }

  }
  async componentDidMount(){
    const data=await fetch("https://api.github.com/users/aravind")
    const jason=await data.json()
    this.setState({
      user:jason
    })
  }


  render() {

    const { name,id,avatar_url } = this.state.user
    return (
      <div className='user-card'>
        <img width={50} src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h2>id: {id}</h2>
        <h2>Contact: aravind@Twitter</h2>
      </div>
    )
  }
}
export default UserClass

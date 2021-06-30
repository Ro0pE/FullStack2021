import React from 'react'
import { Link } from "react-router-dom";
const Users = (props) => {

console.log('props , ' , props)
const users = props.users
const userit = props.users.map((user) =><li>{user.name} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{user.blogs.length}</li>)
   
    console.log('testtii ' )
/*return (
  <ul> <Link to='/'></Link>{userit}</ul>
)
}
*/
return (
    <div>
        <ul>{users.map((user) => (
           <Link to = {`/users/${user.id}`}> <li><p>{user.name} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.blogs.length}</p></li></Link>
        ))}
        </ul> 
   </div>
)
        }

export default Users
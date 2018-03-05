import React from 'react';
import UserList from '../container/user.list';
import UserDetail from '../container/user.details'
require("../../scss/style.scss")

const App = () => (
<div>
    <h2>Username List</h2>
    <UserList />
    <hr/>
    <h2>User Detail</h2>
    <UserDetail />
</div>
)

export default App;
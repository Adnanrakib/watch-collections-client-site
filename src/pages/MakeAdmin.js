import React from 'react';

const MakeAdmin = () => {
          return (
                    <div>

<form className="form">
      <h1 className="login">PLEASE LOGIN</h1>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="mail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    {/* <input type="mail" class="from-control" id="exampleInputEmail1" aria-describedby="emailHelp"> */}
    <div id="emailHelp" class="form-text"></div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
    {/* <input type="password" class="form-control" id="exampleInputPassword1"> */}
  </div>
  <button>Add Domain</button>
</form>
                             
                    </div>
          );
};

export default MakeAdmin;
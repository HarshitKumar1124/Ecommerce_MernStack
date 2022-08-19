import React ,{useEffect}from 'react'
import DeleteIcon from "@material-ui/icons/Delete";
import { DataGrid } from "@material-ui/data-grid";
import{Button} from "@material-ui/core"
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "./DisplayUserList.css"

import {DeleteUser,ClearError} from "../../Redux_Actions/UserAction"
import { Delete_User_Reset } from '../../Redux_Constants/UserConstants';

const DisplayUserList = ({ToDisplay,item}) => {

    const dispatch = useDispatch();

  const alert = useAlert();

  const Navigate = useNavigate()

  const{error:DeleteError,isDeleted} = useSelector((state)=>state.delUser)

  const DeleteUserHandler=(id)=>{

     dispatch(DeleteUser(id))
  }

  useEffect(() => {

    if(DeleteError)
    {
      alert.error(DeleteError)
      dispatch(ClearError());
    }

    if(isDeleted)
    {
      alert.success("User Deleted Successfully !")
      Navigate('/dash_board')
      dispatch({type:Delete_User_Reset})
    }
   
  }, [dispatch,DeleteError,alert,isDeleted])
  

  //For DataGrid = Datagrids are the Advanced Features table with inbuilt functionality to sort or arrange data in terms of every field

  //Enter DataGrid Colums
  const columns = [
    {
      field: "id",
      headername: "User ID",
      
      flex: 0.5,
    },
    {
      field: "name",
      headername: "Name",
      minWidth: 100,
      flex: 1,
    },
    {
        field: "email",
        headername: "email",
        flex: 0.5,
       
      },
    {
      field: "UserType",
      headername: "UserType",
      minWidth: 150,
      flex: 0.5,
     
    },
    {
      field: "action",
      headername: "Action",
      
      flex: 0.3,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={()=>DeleteUserHandler(params.getValue(params.id,'id'))}>
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  ToDisplay &&
    ToDisplay.forEach((item) => {
      rows.push({
        id: item._id,
        UserType: item.userType,
        email: item.email,
        name: item.name,
      });
    });



  return (
    <div className="DisplayList_Container">
    <div>{item}List</div>
    <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
          className="UserListTable"
        />
    </div>
  )
}

export default DisplayUserList
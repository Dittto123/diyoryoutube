import React from 'react'
import { Search } from '@mui/icons-material'
import { Paper, IconButton } from "@mui/material"
import { colors } from "../../constants/colors"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

const [value, setValue] = useState("")
const navigate = useNavigate()
const submitHandler = (e) => {
  e.preventDefault()
  console.log(value);
  if(value){
    navigate(`/search/${value}`)
    setValue("")
  }
}


  return <Paper className='paper' onSubmit={submitHandler} component={"form"} sx={{border: `1px solid ${colors.primary}`,ml: {xs: '5px', sm: '1px', md: '0'} ,pl: 2, boxShadow: "none", borderRadius: 15}}>
    <input type='text' placeholder='Search..' className='search-bar' value={value} onChange={e => setValue(e.target.value)} />
    <IconButton type='submit'>
        <Search />
    </IconButton>
  </Paper>
}

export default SearchBar
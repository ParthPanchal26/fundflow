import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import Dev_Dashboard from './Components/Dev_Dashboard/Dev_Dashboard'
import StarterPage from './Components/Starter_Page/StarterPage'
import Dashboard from './Components/Dashboard/Dashboard'
import Signup from './Components/Signup';
import Login from './Components/Login';
import Select from './Components/UserSelection/Select';
import DeveloperForm from './Components/Dev_form/DeveloperForm';
import EntrepreneurForm from "./Components/Entrepreneur/EntrepreneurForm";
import InvestorForm from './Components/InvestorForm/InvestorForm';
import MainPage from './Components/MAIN/MainPage';
import Dev_Profile from './Components/Dev_Profile/Dev_Profile'
import Idea_form from './Components/Idea_Form/Idea_form'
import HelpAndSupport from './Components/HELP_AND_SUPPORT/HelpAndSupport';
import IdeaTable from './Components/IdeaTable/IdeaTable'; 
import Organization from './Components/Top_Organization/Organization'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = () => {
  return (
    // <Outlet />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Select" element={<Select />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Idea_form" element={<Idea_form />} />
        <Route path="/HelpAndSupport" element={<HelpAndSupport />} />
        <Route path="/IdeaTable" element={<IdeaTable />} />
        <Route path="/Dev_Profile" element={<Dev_Profile />} />
        <Route path="/DeveloperForm" element={<DeveloperForm />} />
        <Route path="/Organization" element={<Organization />} />
      </Routes>
    </BrowserRouter>

  )
}

export default Layout
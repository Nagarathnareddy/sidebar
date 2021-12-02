import React from 'react';
import {Link} from 'react-router-dom'
import { StyledMenu } from './Menu.styled';
import { AiOutlineDashboard} from "@react-icons/all-files/ai/AiOutlineDashboard";
import {GrProjects} from "@react-icons/all-files/gr/GrProjects"
import {BsCalendar} from "@react-icons/all-files/bs/BsCalendar"
import {GrTasks} from "@react-icons/all-files/gr/GrTasks"
import {HiOutlineDocumentReport} from "@react-icons/all-files/hi/HiOutlineDocumentReport"
import {RiSettingsLine} from "@react-icons/all-files/ri/RiSettingsLine"
import { bool } from 'prop-types';
import dashboard from "./dashboard";
import projects from "./projects";
import calendar from "./calendar";
import tasks from "./tasks";
import reports from "./reports";
import settings from "./settings";
const Menu = ({open}) => {
  return (
    <StyledMenu open={open}>
      <Link to={"./dashboard"} >
        <span role="img" aria-label="dashboard"><AiOutlineDashboard/></span>
        Dashboard
        </Link>
      <Link to={"./projects"}>
        <span role="img" aria-label="projects"><GrProjects/></span>
       Projects
       </Link>
       <Link to={"./calendar"}>
        <span role="img" aria-label="Calendar"><BsCalendar/></span>
       Calendar
       </Link>
       <Link to={"./tasks"}>
        <span role="img" aria-label="tasks"><GrTasks/></span>
      Tasks
      </Link>
      <Link to={'./reports'}>
        <span role="img" aria-label="Reports"><HiOutlineDocumentReport/></span>
       Reports
       </Link>
       <Link to={"./settings"}>
        <span role="img" aria-label="settings"><RiSettingsLine/></span>
      Settings
      </Link>

    </StyledMenu>
  )
}
Menu.prototype={
  open:bool.isRequired
}
export default Menu;
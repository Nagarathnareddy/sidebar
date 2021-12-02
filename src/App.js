import React from "react";

import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './global';
import {theme} from './theme';
import logo from './hamburguer.png';
import { Burger, Menu } from './components';
import {useState,useRef} from 'react'
import { useOnClickOutside } from './hooks';
import dashboard from "./dashboard";
import projects from "./projects";
import calendar from "./calendar";
import tasks from "./tasks";
import reports from "./reports";
import settings from "./settings";
function App() {
  const [open,setOpen] = useState(false);
  const node = useRef(); 
useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles/>
      <div ref={node}>
      <Router>
     <Switch>
    <Route exact path="/dashboard" component={dashboard}/>
     <Route exact path="/projects" component={projects}/>
     <Route exact path="/tasks" component={tasks}/>
     <Route exact path="/reports" component={reports}/>
     <Route exact path="/settings" component={settings}/>
     </Switch>
    </Router>
      <Burger open = {open} setOpen = {setOpen}/>
      <Menu open = {open} setOpen = {setOpen}/>
      </div>
      </>
   
    </ThemeProvider>
  
  );
}


export default App;

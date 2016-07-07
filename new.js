var states = new Array();
//State Dependent To Country
states['India'] = new Array('Andhrapradesh','Telangana');
states['Uk'] = new Array('England');
states['Us'] = new Array('New York');

var cities = new Array();

cities['India'] = new Array();
cities['India']['Andhrapradesh'] = new Array('Vijayawada','Vizag');
cities['India']['Telangana']= new Array('Warangal','Hyderabad');


cities['Uk'] = new Array();
cities['Uk']['England'] = new Array('London');

cities['Us'] = new Array();
//cities['Us']['New York']= new Array('Niagara Falls');
cities['New York']= new Array('Niagara Falls');


cities['Andhrapradesh']=new Array('Vijayawada','Vizag');//City Is Dependent to State
cities['Telangana']= new Array('Warangal','Hyderabad');//City Is Dependent to State
states['Andhrapradesh'] =new Array('India','Us','Uk');//Country Dependent To State
states['Telangana'] =new Array('India','Us','Uk');//Country Dependent To State


cities['England']= new Array('London');//City Is Dependent to State
states['England'] =new Array('Uk','India','Us');//Country Dependent To State


cities['New York']= new Array('Niagara Falls');//City Is Dependent to State
states['New York'] =new Array('US','Uk','India');//Country Dependent To State

// State is Dependent To City
cities['Warangal']= new Array('Telangana');
cities['Hyderabad']= new Array('Telangana');
cities['Vijayawada']= new Array('Andhrapradesh');
cities['Vizag']= new Array('Andhrapradesh');
cities['London']= new Array('England');
cities['Niagara Falls']= new Array('New York');

//Country is Dependent To City
states['Warangal'] =new Array('India','Us','Uk');
states['Hyderabad'] =new Array('India','Us','Uk');
states['Vijayawada'] =new Array('India','Us','Uk');
states['Vizag'] =new Array('India','Us','Uk');
states['London'] =new Array('Uk','India','Us');;
states['Niagara Falls'] =new Array('Us','India','Uk');;

function set_States() {
  cntrySel = document.getElementById('country');
  stateList = states[cntrySel.value];
  changeSelect('state', stateList, stateList);
  set_Cities();
}
function set_Cities() {

  stateSel = document.getElementById('state');
  cityList = cities[stateSel.value];
  stateList = states[stateSel.value];
  changeSelect('city', cityList, cityList);
  changeSelect('country', stateList, stateList);
}
function set_City() {

  stateSel = document.getElementById('city');
  cityList = cities[stateSel.value];
  stateList = states[stateSel.value];
  changeSelect('state', cityList, cityList);
  changeSelect('country', stateList, stateList);
}

function changeSelect(fieldID, newOptions, newValues) {
  selectField = document.getElementById(fieldID);
  selectField.options.length = 0;
  for (i=0; i<newOptions.length; i++) {
    selectField.options[selectField.length] = new Option(newOptions[i], newValues[i]);
  }
}


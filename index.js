// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(driver => 
    driver.toLowerCase() === name.toLowerCase()
  );
}

function fuzzyMatch(drivers, letters) {
     const drivers = [];
  return drivers.filter(driver => 
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

function matchName(drivers, name) {
  return drivers.filter(driver => 
    driver.name.toLowerCase() === name.toLowerCase()
  );
}
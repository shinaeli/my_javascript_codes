//The 'Bind' method is used to pass the method of an object as a parameter/argument to another function by binding the method to its parent-object.

const adage = {
  name: 'Rita',
  job (duty, firm) {
    console.log(`${this.name} works as ${duty} at ${firm}.`)
  }
}

let sample = adage.job.bind(adage, 'a marketer under TalentCity Energy', 'TalentCity');
setTimeout(sample, 1000);

const details = {name: 'Adeola'};

let sample2 = adage.job.bind(details, 'an Architect', 'ArchiTrust Architectural Group'); //Binding the 'details' object to the 'adage.job' method.
setInterval(sample2, 1000);


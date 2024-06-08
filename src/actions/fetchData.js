'use server';

export async function fetchInfoData() {
  const res = await fetch('https://mcc-dataserver.vercel.app/api/info');

  if(!res.ok) {
    throw new Error(`Failed to fetch 'Info' data.`);
  } else {
    const data = await res.json();
    return data;
  }
}

export async function fetchLicenseData() {
    const res = await fetch('https://mcc-dataserver.vercel.app/api/license');

    if(!res.ok) {
      throw new Error(`Failed to fetch 'License' data.`);
    } else {
      const data = await res.json();
      return data;
    }
}

export async function fetchGeneralData() {
  const res = await fetch('https://mcc-dataserver.vercel.app/api/general');  

  if(!res.ok) {
    throw new Error(`Failed to fetch 'General' data.`);
  } else {
    const data= await res.json();
    return(data); 
  }
};

export async function fetchApplicationsData() {
  const res = await fetch('https://mcc-dataserver.vercel.app/api/applications');  

  if(!res.ok) {
    throw new Error(`Failed to fetch 'Applications' data.`);
  } else {
    const data= await res.json();
    return(data); 
  }
};

export async function fetchDatabasesData() {
  const res = await fetch('https://mcc-dataserver.vercel.app/api/databases');  

  if(!res.ok) {
    throw new Error(`Failed to fetch 'Databases' data.`);
  } else {
    const data= await res.json();
    return(data); 
  }
};

export async function fetchCertificatesData() {
  const res = await fetch('https://mcc-dataserver.vercel.app/api/certificates');  

  if(!res.ok) {
    throw new Error(`Failed to fetch 'Certificates' data.`);
  } else {
    const data= await res.json();
    return(data); 
  }
};

export async function fetchLocalCertificatesData() {
  const res = await fetch('https://mcc-dataserver.vercel.app/api/localCertificates');  

  if(!res.ok) {
    throw new Error(`Failed to fetch 'Local Certificates' data.`);
  } else {
    const data= await res.json();
    return(data); 
  }
};
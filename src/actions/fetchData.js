'use server';

export async function fetchInfoData() {
    debugger;
  const res = await fetch('https://mcc-dataserver.vercel.app/api/info');
  const data = await res.json();
  return data;

  console.log(data);
}

export async function fetchLicenseData() {
    debugger;
    const res = await fetch('https://mcc-dataserver.vercel.app/api/license');
    const data = await res.json();
    return data;

    console.log(data);
}

export async function fetchGeneralData() {
  const res = await fetch('https://mcc-dataserver.vercel.app/api/general');  
  const data= await res.json();
  return(data); 
};
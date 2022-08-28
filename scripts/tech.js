let right2=document.getElementById('right2')
let all=document.getElementById('all')
let care=document.getElementById('care')
let clinical=document.getElementById('clinical')
let finance=document.getElementById('finance')
let marketing=document.getElementById('marketing')
let technology=document.getElementById('technology')

all.addEventListener("click",function(e){
    e.preventDefault()
     right2.innerHTML=""
     let feature=document.createElement("h5")
    feature.innerText="FEATURE ROLE : CARE";
    let all_1=document.createElement("h2")
    all_1.innerText="Adolescent and Child Psychiatrist - Nationwide";
    let all_2=document.createElement("h2")
    all_2.innerText="Child and Adolescent Behavorial Therapist - Nationwide";
    let all_3=document.createElement("h2")
    all_3.innerText="Psychiactric Nurse Practitioner - Nationwide";
    let all_4=document.createElement("h2")
    all_4.innerText="Speech Language Pathologist - Nationwide";
    let all_5=document.createElement("h2")
    all_5.innerText="Chief Clinical Officer";
    let all_6=document.createElement("h2")
    all_6.innerText="Associate General Counsel";
    let all_7=document.createElement("h2")
    all_7.innerText="Senior Manager, Enrollment Marketing Program Management";
    let all_8=document.createElement("h2")
    all_8.innerText="Staff Andriod Developer (Remote)";
     right2.append(feature,all_1,all_2,all_3,all_4,all_5,all_6,all_7,all_8)
})
clinical.addEventListener("click",function(e){
    e.preventDefault()
     right2.innerHTML=""
     let feature=document.createElement("h5")
    feature.innerText="FEATURE ROLE : CLINICAL";
    let clinical_1=document.createElement("h2")
    clinical_1.innerText="Chief Clinical Officer";
    
    
    
     right2.append(feature,clinical_1)
})
care.addEventListener("click",function(e){
    e.preventDefault()
     right2.innerHTML=""
     let feature=document.createElement("h5")
    feature.innerText="FEATURE ROLE : CARE";
    let care_1=document.createElement("h2")
    care_1.innerText="Adolescent and Child Psychiatrist - Nationwide";
    let care_2=document.createElement("h2")
    care_2.innerText="Child and Adolescent Behavorial Therapist - Nationwide";
    let care_3=document.createElement("h2")
    care_3.innerText="Psychiactric Nurse Practitioner - Nationwide";
    let care_4=document.createElement("h2")
    care_4.innerText="Speech Language Pathologist - Nationwide";
    
    
     right2.append(feature,care_1,care_2,care_3,care_4)
})

finance.addEventListener("click",function(e){
    e.preventDefault()
     right2.innerHTML=""
     let feature=document.createElement("h5")
    feature.innerText="FEATURE ROLE : FINANCE";
    let finance_1=document.createElement("h2")
    finance_1.innerText="Associate General Counsel";
    
    
    
     right2.append(feature,finance_1)
})

marketing.addEventListener("click",function(e){
    e.preventDefault()
     right2.innerHTML=""
     let feature=document.createElement("h5")
    feature.innerText="FEATURE ROLE : MARKETING";
    let marketing_1=document.createElement("h2")
    marketing_1.innerText="Senior Manager, Enrollment Marketing Program Management";
    
    
    
     right2.append(feature,marketing_1)
})
technology.addEventListener("click",function(e){
    e.preventDefault()
     right2.innerHTML=""
     let feature=document.createElement("h5")
    feature.innerText="FEATURE ROLE : TECHNOLOGY";
    let technology_1=document.createElement("h2")
    technology_1.innerText="Staff Andriod Developer (Remote)";
    
    
    
     right2.append(feature,technology_1)
})
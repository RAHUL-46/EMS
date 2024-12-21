const emp = [ 
    {
       "id": 1,
       "name": "Aarav Sharma",
       "email": "aaravsharma@gmail.com",
       "password": "123",
       "tasks": [
         {
           "title": "Complete Financial Report",
           "description": "Prepare the quarterly financial report for the team meeting.",
           "date": "2024-12-12",
           "category": "Finance",
           "active": true,
           "newTask": false,
           "complete": false,
           "failed": false
         },
         {
           "title": "Client Meeting Preparation",
           "description": "Prepare slides for the upcoming client meeting.",
           "date": "2024-12-13",
           "category": "Presentation",
           "active": true,
           "newTask": true,
           "complete": false,
           "failed": false
         }
       ],
       "taskCounts": {
         "total": 2,
         "active": 2,
         "newTask": 1,
         "complete": 0,
         "failed": 0
       }
     },
     {
       "id": 2,
       "name": "Anaya Verma",
       "email": "anayaverma@gmail.com",
       "password": "123",
       "tasks": [
         {
           "title": "Data Entry Validation",
           "description": "Validate data entries in the sales sheet.",
           "date": "2024-12-11",
           "category": "Data Mang.",
           "active": false,
           "newTask": false,
           "complete": true,
           "failed": false
         },
         {
           "title": "Customer Feedback Analysis",
           "description": "Analyze the feedback data from surveys.",
           "date": "2024-12-14",
           "category": "Analysis",
           "active": true,
           "newTask": true,
           "complete": false,
           "failed": false
         }
       ],
       "taskCounts": {
         "total": 2,
         "active": 1,
         "newTask": 1,
         "complete": 1,
         "failed": 0
       }
     },
     {
       "id": 3,
       "name": "Vivaan Gupta",
       "email": "vivaangupta@gmail.com",
       "password": "123",
       "tasks": [
         {
           "title": "Update Website Content",
           "description": "Update the content on the homepage of the company website.",
           "date": "2024-12-10",
           "category": "Development",
           "active": true,
           "newTask": false,
           "complete": false,
           "failed": true
         },
         {
           "title": "Bug Fixing",
           "description": "Resolve issues reported in the bug tracker.",
           "date": "2024-12-12",
           "category": "Development",
           "active": true,
           "newTask": true,
           "complete": false,
           "failed": false
         }
       ],
       "taskCounts": {
         "total": 2,
         "active": 2,
         "newTask": 1,
         "complete": 0,
         "failed": 1
       }
     },
     {
       "id": 4,
       "name": "Diya Iyer",
       "email": "diyaiyer@gmail.com",
       "password": "123",
       "tasks": [
         {
           "title": "HR Policy Revision",
           "description": "Draft a new version of the company's HR policies.",
           "date": "2024-12-09",
           "category": "Human Resources",
           "active": false,
           "newTask": false,
           "complete": true,
           "failed": false
         },
         {
           "title": "Interview Scheduling",
           "description": "Arrange interviews for new candidates.",
           "date": "2024-12-13",
           "category": "Recruitment",
           "active": true,
           "newTask": true,
           "complete": false,
           "failed": false
         }
       ],
       "taskCounts": {
         "total": 2,
         "active": 1,
         "newTask": 1,
         "complete": 1,
         "failed": 0
       }
     },
     {
       "id": 5,
       "name": "Rohan Mehta",
       "email": "rohanmehta@gmail.com",
       "password": "123",
       "tasks": [
         {
           "title": "Market Research",
           "description": "Conduct research on competitors' strategies.",
           "date": "2024-12-08",
           "category": "Research",
           "active": false,
           "newTask": false,
           "complete": true,
           "failed": false
         },
         {
           "title": "Team Performance Review",
           "description": "Compile the team's performance for the last quarter.",
           "date": "2024-12-14",
           "category": "Management",
           "active": true,
           "newTask": true,
           "complete": false,
           "failed": false
         }
       ],
       "taskCounts": {
         "total": 2,
         "active": 1,
         "newTask": 1,
         "complete": 1,
         "failed": 0
       }
     }
];


 const  admin  = [ {
      "id": 1,
      "name": "Rahul Goswami",
      "email": "rahul@gmail.com",
      "password": "123"
    }
]
  

export const setlocalstorge = ()=>{
    localStorage.setItem("employee" , JSON.stringify(emp)  )
    localStorage.setItem("admin" , JSON.stringify(admin)  )
}
export const getlocalstorge = ()=>{
  const empdata =  JSON.parse(localStorage.getItem("employee")) 
  const admindata =   JSON.parse(localStorage.getItem("admin")) 

  return {empdata , admindata}
  
}

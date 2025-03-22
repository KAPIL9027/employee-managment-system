# Instructions to run the app
  - Run "cd frontend" command then "npm i" to install the dependencies in the frontend folder
  - Run "cd ..", "cd backend" then "npm i" to install the dependencies in the backend folder
  - Run "cd ..", "npm i" to install the dependencies in the root folder
  - Create an .env file in frontend folder with backend url
    "VITE_BACKEND_API_URL=http://localhost:3000/employees"

  - Run "npm run dev" command in the root folder to run both the frontend and backend

  - Create some employees using add employee functionality as database is not persistent. So It is required to see some employees data in the dashboard

  - Might need to reload the dashboard after creating new employees as it fetches data only when the component is mounted
  
# Screenshots

## Add Employee View
 - With Input Validation
![Screenshot 2025-03-22 145801](https://github.com/user-attachments/assets/859822b3-3880-4af3-a05c-58a58ce06c38)
 - Successfully added an employee
 ![Screenshot 2025-03-22 145838](https://github.com/user-attachments/assets/b2436d83-80d7-4969-a5b7-addb5f2e6ee5)

- Mobile View
  ![Screenshot 2025-03-22 150412](https://github.com/user-attachments/assets/06f0fbad-838b-4723-8ce1-7b2c1fc63e3f)

## Dashboard (Employees List)
- Desktop View
  ![Screenshot 2025-03-22 150230](https://github.com/user-attachments/assets/a75316ff-5697-467b-9509-a9f348cc57b2)
- Mobile View
- ![Screenshot 2025-03-22 150353](https://github.com/user-attachments/assets/d1500476-bef4-404d-86b7-9b2fde1212c7)

## Full Details of Employee
- Desktop View
  ![Screenshot 2025-03-22 150246](https://github.com/user-attachments/assets/b488be30-9de2-4dcc-b28a-8969d37bc38b)
- Mobile View
  ![Screenshot 2025-03-22 150401](https://github.com/user-attachments/assets/5aa888fc-d70e-44b5-b7ef-3e80ecf896bc)

## Backend API Postman Response Screenshots
   - Add Employee POST Request
   ![Screenshot 2025-03-22 150519](https://github.com/user-attachments/assets/d83ae26f-9573-41d1-8142-b37f04ecb4f9)
   - GET Employees
     ![Screenshot 2025-03-22 150537](https://github.com/user-attachments/assets/b27d4c5f-4a91-4a45-956e-e7fbade652cd)
   - GET Employee with id
     ![Screenshot 2025-03-22 150557](https://github.com/user-attachments/assets/3cff8123-8732-469d-befa-75397ec57722)
   - Update Employee with id
     ![Screenshot 2025-03-22 150653](https://github.com/user-attachments/assets/b04f2bc8-0ce6-4625-8a3a-f598b195db3d)
   - Delete Employee with id
     ![Screenshot 2025-03-22 150709](https://github.com/user-attachments/assets/f4a78b18-7aa0-4ab2-8a53-8aefa793cf8b)





   



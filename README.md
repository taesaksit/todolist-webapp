# ✅ Todolist Webapp

**React frontend + Express backend**  
โปรเจกต์ Todolist ที่มีระบบสมัครสมาชิก / เข้าสู่ระบบ (Register / Login) พร้อมกับการยืนยันตัวตนด้วย **JWT** ใช้ MongoDB เป็นฐานข้อมูล  
ใช้ฝึกการทำ Web Application ที่มี frontend-backend และ authentication ครับ

---

## 📋 สารบัญ

- [คุณสมบัติ (Features)](#features)  
- [เทคโนโลยีที่ใช้ (Tech Stack)](#tech-stack)  
- [โครงสร้างโปรเจกต์ (Project Structure)](#project-structure)  
- [ติดตั้งและใช้งาน (Installation)](#installation)  
- [ตัวอย่างการใช้งาน (Usage)](#usage)  
- [Environment Variables](#environment-variables)  
- [เอกสารเพิ่มเติม / รูปภาพ (Screenshots / Demo)](#screenshots--demo)  
- [การมีส่วนร่วม (Contributing)](#contributing)  
- [License](#license)  

---

## ✨ คุณสมบัติ (Features)

- สมัครสมาชิก / ลงชื่อเข้าใช้ (Register / Login)  
- ยืนยันตัวตนด้วย JWT (JSON Web Token)  
- CRUD สำหรับ Todos (สร้าง, อ่าน, แก้ไข, ลบ)  
- React + TypeScript หน้า UI dynamic  
- Backend ด้วย Express.js และ MongoDB  

---

## 🛠 เทคโนโลยีที่ใช้ (Tech Stack)

| ส่วน | เทคโนโลยี |
|------|-------------|
| Frontend | React, TypeScript |
| Backend | Node.js, Express.js |
| ฐานข้อมูล | MongoDB (อาจจะใช้ MongoDB Atlas หรือ Local) |
| Authentication | JWT |
| อื่น ๆ | Cors, Helmet (ถ้ามี), dotenv |

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
todolist-webapp/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/   # สำหรับเรียก API
│   │   └── App.tsx
│   ├── package.json
│   └── tsconfig.json
├── .env.example
└── README.md

![image](https://github.com/user-attachments/assets/2154645c-677e-4b2d-b506-0d96a5427d98)
![image](https://github.com/user-attachments/assets/8ece3761-260d-44a3-904d-6581eebcaae2)
![image](https://github.com/user-attachments/assets/6e5f0dcf-6a25-4700-a391-d399c4a12796)
![image](https://github.com/user-attachments/assets/573c3a24-e938-41f8-bb3c-d2c1aaf332b3)
![image](https://github.com/user-attachments/assets/a7dc47d8-85e1-4cba-a13e-f8626ea5c474)
![image](https://github.com/user-attachments/assets/c7c40cf4-c433-467f-a875-2a11e72f7dcc)
![image](https://github.com/user-attachments/assets/1d395912-d387-462d-8a2e-893160e6af17)



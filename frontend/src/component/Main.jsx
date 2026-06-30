import { useEffect, useState } from "react";
import axios from "axios";
import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";

const Main = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/auth/me",
                    {
                        withCredentials: true,
                    }
                );

                setUser(res.data.user);
            } catch (error) {
                console.log(error);
            }
        };

        getUser();
    }, []);

    if (!user) {
        return <h2>Loading...</h2>;
    }

    if (user.role === "teacher") {
        return <TeacherDashboard />;
    }
    if (user.role === "admin") {
        return <AdminDashboard/>;
    }
    if (user.role === "student") {
        return <StudentDashboard />;
    }
};

export default Main;